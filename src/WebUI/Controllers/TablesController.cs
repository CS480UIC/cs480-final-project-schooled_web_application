using CS_480_Project.Application.MySQLTable.Commands.CreateTable;
using CS_480_Project.Application.MySQLTable.Commands.DeleteTable;
using CS_480_Project.Application.MySQLTable.Queries;
using CS_480_Project.Application.MySQLTable.DTOs;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace CS_480_Project.WebUI.Controllers
{
    public class TablesController : ApiControllerBase
    {     
        [HttpPut("[action]")]
        public async Task<ActionResult<int>> CreateTable(CreateNewTableCommand command)
        {
            return await Mediator.Send(command);
        }
        
        [HttpPut("[action]")]
        public async Task<ActionResult<ReturnTableDTO>> GetTableData(GetTableDataByNameQuery command)
        {
            return await Mediator.Send(command);
        }
        
        [HttpPut("[action]")]
        public async Task<ActionResult<int>> DeleteTable(DeleteTableCommand command)
        {
            return await Mediator.Send(command);
        }
    }
}
