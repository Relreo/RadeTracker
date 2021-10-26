namespace RadeApp.Data
{
    public class Case
    {
        public string Name { get; set; }    
        public int Id {  get; set;}
        public int campaignId { get; set;}
        public int patentNumber { get; set;}
        public string? product { get; set;}  
        public decimal moneySpentOnCase { get; set;}  
        public string? IPR_status { get; set;}
        public List<CalendarEvent> importantDates { get; set;}

        public Case()
        {

        }

    }
}
