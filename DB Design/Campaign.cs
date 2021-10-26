namespace RadeApp.Data
{
    public class Campaign
    {

        public int Id { get; set; }
        public string Name { get; set; }

        public int pendingCases { get; set; }
        public int assertedPatents {get; set; }
        public int patents_subjectTo_IPR { get; set; }
        public decimal moneySpent { get; set; }

        public List<Case> cases { get; set; }
        /* 
         * Other things needed, but derived from list of cases:
         * Products Covered
         * Timeline in view will get dates from Cases
         */

        public Campaign()
        {

        }

    }
}
