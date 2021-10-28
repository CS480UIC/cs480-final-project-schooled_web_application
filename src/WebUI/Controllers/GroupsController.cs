using CS_480_Project.Application.Group.DTOs;
using CS_480_Project.Application.Group.Queries;
using CS_480_Project.Application.Group.Commands.CreateGroup;
using CS_480_Project.Application.Role.Commands.CreateRole;
using CS_480_Project.Application.GroupMember.Commands.AddGroupMember;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace CS_480_Project.WebUI.Controllers
{
    public class GroupsController : ApiControllerBase
    {
        [HttpPost]
        public async Task<ActionResult<int>> Create(string token, CreateGroupCommand command)
        {
            var newGroup = await Mediator.Send(command);

            if (newGroup == null)
                return -1;

            var newGroupRole = new CreateRoleCommand();
            newGroupRole.Description = "This is the owner of the group.";
            newGroupRole.GroupId= newGroup.Id;
            newGroupRole.Name = "Owner";

            var newCreatedRole = await Mediator.Send(newGroupRole);

            if (newCreatedRole == null)
                return -1;

            var newGroupRoleTwo = new CreateRoleCommand();
            newGroupRoleTwo.Description = "This is the standard member role.";
            newGroupRoleTwo.GroupId = newGroup.Id;
            newGroupRoleTwo.Name = "Member";

            await Mediator.Send(newGroupRoleTwo);

            var newMember = new AddGroupMemberCommand();
            newMember.GroupId = newGroup.Id;
            newMember.Token = token;

            return await Mediator.Send(newMember);
        }

        [HttpPut("[action]")]
        public async Task<ActionResult<GroupsDTO>> GetGroupsByToken(GetGroupsByTokenCommand command)
        {
            return await Mediator.Send(command);
        }
    }
}
