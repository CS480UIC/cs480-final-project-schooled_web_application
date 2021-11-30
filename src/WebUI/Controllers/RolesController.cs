using CS_480_Project.Application.Group.DTOs;
using CS_480_Project.Application.Role.Queries;
using CS_480_Project.Application.Role.Commands.CreateRole;
using CS_480_Project.Application.Role.Commands.DeleteRoleById;
using CS_480_Project.Application.Role.Commands.UpdateRole;
using CS_480_Project.Application.Role.DTOs;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace CS_480_Project.WebUI.Controllers
{
    public class RolesController : ApiControllerBase
    {
        [HttpPost]
        public async Task<ActionResult<GroupRoleDTO>> Create(CreateRoleCommand command)
        {
            return await Mediator.Send(command);
        }

        [HttpPut("[action]")]
        public async Task<ActionResult<GroupRolesDTO>> GetGroupsByGroupId(GetGroupRolesByGroupIdCommand command)
        {
            return await Mediator.Send(command);
        }

        [HttpPut("[action]")]
        public async Task<ActionResult<int>> UpdateRole(UpdateRoleCommand command)
        {
            return await Mediator.Send(command);
        }

        [HttpPut("[action]")]
        public async Task<ActionResult<int>> DeleteRole(DeleteRoleByIdCommand command)
        {
            return await Mediator.Send(command);
        }
    }
}
