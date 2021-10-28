using CS_480_Project.Application.Common.Interfaces;
using MySql.Data.MySqlClient;
using MediatR;
using System.Threading;
using System.Threading.Tasks;
using System;

namespace CS_480_Project.Application.Tokens.Commands.ClearAccountTokens
{
    public class ClearAccountTokensCommand : IRequest<int>
    {
        public string UserId { get; set; }
    }

    public class ClearAccountTokensCommandHandler : IRequestHandler<ClearAccountTokensCommand, int>
    {
        private readonly IDatabaseService _dataBase;
        public ClearAccountTokensCommandHandler(IDatabaseService dataBase)
        {
            _dataBase = dataBase;
        }

        public async Task<int> Handle(ClearAccountTokensCommand request, CancellationToken cancellationToken)
        {
            try {
                _dataBase.CreateConnection("localhost", "schooled_web_application", "danie_test", "applecandykiller", "");
                string sql = "DELETE FROM token WHERE user_id='" + request.UserId + "' AND token_type=99;";
                MySqlCommand cmd = new MySqlCommand(sql, _dataBase.GetConnection());
                await _dataBase.ExecuteNonQueryStatement(cmd);
                return await Task<int>.Run(() => { return 0; });
            }
            catch (Exception error)
            {
                _dataBase.CloseConnection();
                return await Task<int>.Run(() => { return -1; });
            }
        }
    }
}
