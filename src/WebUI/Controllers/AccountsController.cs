using CS_480_Project.Application.Account.Commands.CreateAccount;
using CS_480_Project.Application.Account.Queries;
using CS_480_Project.Application.Tokens.Commands.ClearAccountTokens;
using CS_480_Project.Application.Tokens.Commands.CreateToken;
using CS_480_Project.Application.Tokens.DTOs;
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
        public async Task<ActionResult<LoginTokenDto>> Login(CheckLoginInfoCommand command)
        {
            UserTokenDTO loginToken = await Mediator.Send(command);
            ClearAccountTokensCommand clearTokens = new ClearAccountTokensCommand();
            CreateTokenCommand createNewToken = new CreateTokenCommand();

            if (loginToken == null)
                return null;

            clearTokens.UserId = loginToken.userId;
            await Mediator.Send(clearTokens);

            createNewToken.UID = loginToken.token;
            createNewToken.UserId = loginToken.userId;
            createNewToken.Type = 99;
            return await Mediator.Send(createNewToken);
        }

        [HttpPut("[action]")]
        public async Task<ActionResult<int>> Logout(ClearAccountTokensByToken command)
        {
            return await Mediator.Send(command);
        }

        [HttpPut("[action]")]
        public async Task<ActionResult<int>> Authorized(AuthorizationCheckCommand command)
        {
            return await Mediator.Send(command);
        }

        [HttpPut("[action]")]
        public async Task<ActionResult<string>> GetUsername(GetAccountNameByTokenCommand command)
        {
            return await Mediator.Send(command);
        }
    }
}
