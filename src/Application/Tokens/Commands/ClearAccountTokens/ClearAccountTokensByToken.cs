using CS_480_Project.Application.Common.Interfaces;
using MySql.Data.MySqlClient;
using MediatR;
using System.Threading;
using System.Threading.Tasks;
using System;

namespace CS_480_Project.Application.Tokens.Commands.ClearAccountTokens
{
    public class ClearAccountTokensByToken : IRequest<int>
    {
        public string Token { get; set; }
    }

    public class ClearAccountTokensByTokenHandler : IRequestHandler<ClearAccountTokensByToken, int>
    {
        private readonly IDatabaseService _dataBase;
        public ClearAccountTokensByTokenHandler(IDatabaseService dataBase)
        {
            _dataBase = dataBase;
        }

        public async Task<int> Handle(ClearAccountTokensByToken request, CancellationToken cancellationToken)
        {
            try
            {
                _dataBase.CreateConnection("localhost", "schooled_test", "danie_test", "applecandykiller", "");
                string sql = "DELETE FROM token WHERE token_token='" + request.Token + "';";
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
