namespace RadeApp.Data
{
    public class CalendarEvent
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public int caseID { get; set; }
        public DateTime when { get; set; }
        public string? description { get; set; } 
        public string? where { get; set; }

        public CalendarEvent()
        {

        }

    }
}
