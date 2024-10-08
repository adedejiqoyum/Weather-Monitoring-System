// Backend: ASP.NET Core Web API

namespace WeatherMonitoringSystem.Server.Models
{
    public class WeatherData
    {
        public int Id { get; set; }
        public string Parameter { get; set; }
        public string Value { get; set; }
        public DateTime Timestamp { get; set; }
    }
}
