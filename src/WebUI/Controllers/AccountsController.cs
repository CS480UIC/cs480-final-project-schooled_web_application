using CS_480_Project.Application.Account.Commands.CreateAccount;
using CS_480_Project.Application.Account.Queries;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace CS_480_Project.WebUI.Controllers
{
    public class AccountsController : ApiControllerBase
    {
        [HttpPost]
        public async Task<ActionResult<int>> Create(CreateAccountCommand command)
        {
            return await Mediator.Send(command);
        }

        [HttpPut("[action]")]
        public async Task<ActionResult<UserTokenDTO>> Login(CheckLoginInfoCommand command)
        {
            return await Mediator.Send(command);
        }

        [HttpPut("[action]")]
        public async Task<ActionResult<int>> Authorized(AuthorizationCheckCommand command)
        {
            return await Mediator.Send(command);
        }
        
    }
}
