using Microsoft.EntityFrameworkCore;
using WeatherMonitoringSystem.Server.Models;

namespace WeatherMonitoringSystem.Server.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<WeatherData> WeatherData { get; set; }
    }
}
