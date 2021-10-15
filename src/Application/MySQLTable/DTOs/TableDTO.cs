using System.Collections.Generic;

namespace CS_480_Project.Application.MySQLTable.DTOs
{
    public class TableDTO
    {
        public string name { get; set; }
        public IList<string> cols { get; set; }
    }
}
