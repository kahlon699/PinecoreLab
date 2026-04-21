using Microsoft.EntityFrameworkCore;
using PinecoreLabApi.Models;

namespace PinecoreLabApi.Data;

public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
{
    public DbSet<ContactMessage> ContactMessages => Set<ContactMessage>();
}
