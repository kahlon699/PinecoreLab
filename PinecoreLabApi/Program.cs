using Microsoft.EntityFrameworkCore;
using PinecoreLabApi.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddDbContext<AppDbContext>(opt =>
    opt.UseInMemoryDatabase("PinecoreLabDb"));

builder.Services.AddCors(opt =>
{
    opt.AddPolicy("AllowFrontend", policy =>
        policy
            .WithOrigins("http://localhost:5173", "https://pinecorelab.com", "https://www.pinecorelab.com")
            .AllowAnyHeader()
            .AllowAnyMethod());
});

builder.Logging.AddConsole();

var app = builder.Build();

app.UseCors("AllowFrontend");
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.MapGet("/api/health", () => Results.Ok(new
{
    status = "healthy",
    company = "Pinecore Lab",
    description = "Software & App Development Company",
    website = "https://www.pinecorelab.com",
    timestamp = DateTime.UtcNow
}));

app.Run();
