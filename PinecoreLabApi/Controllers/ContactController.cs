using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PinecoreLabApi.Data;
using PinecoreLabApi.Models;

namespace PinecoreLabApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContactController(AppDbContext db, ILogger<ContactController> logger) : ControllerBase
{
    [HttpPost]
    public async Task<IActionResult> Submit([FromBody] ContactMessage message)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        message.SubmittedAt = DateTime.UtcNow;
        db.ContactMessages.Add(message);
        await db.SaveChangesAsync();

        logger.LogInformation("Contact message received from {Email} at {Time}", message.Email, message.SubmittedAt);

        return Ok(new { success = true, message = "Thank you! We'll be in touch soon." });
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var messages = await db.ContactMessages
            .OrderByDescending(m => m.SubmittedAt)
            .ToListAsync();
        return Ok(messages);
    }
}
