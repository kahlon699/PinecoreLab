using System.ComponentModel.DataAnnotations;

namespace PinecoreLabApi.Models;

public class PineCoreContactMessage
{
    public int Id { get; set; }

    [Required, MaxLength(100)]
    public string Name { get; set; } = string.Empty;

    [Required, EmailAddress, MaxLength(200)]
    public string Email { get; set; } = string.Empty;

    [Required, MaxLength(2000)]
    public string Message { get; set; } = string.Empty;

    public DateTime SubmittedAt { get; set; } = DateTime.UtcNow;
}
