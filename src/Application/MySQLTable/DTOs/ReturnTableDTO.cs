using System.Collections.Generic;

namespace CS_480_Project.Application.MySQLTable.DTOs
{
    public class ReturnTableDTO
    {
        public string name { get; set; }
        public IList<EntryDTO> entries { get; set; }
        public IList<string> colHeaders { get; set; }
        public IList<string> colTypes { get; set; }
    }
}
