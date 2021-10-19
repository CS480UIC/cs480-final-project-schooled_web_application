using CS_480_Project.Application.Common.Interfaces;
using MediatR;
using MySql.Data.MySqlClient;
using System;
using System.Data.Common;
using System.Security.Cryptography;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace CS_480_Project.Application.Account.Queries
{
    public class GetAccountNameByTokenCommand : IRequest<string>
    {
        public string UserUid { get; set; }
        public string Token { get; set; }
    }

    public class GetAccountNameByTokenCommandHandler : IRequestHandler<GetAccountNameByTokenCommand, string>
    {
        private readonly IDatabaseService _dataBase;

        public GetAccountNameByTokenCommandHandler(IDatabaseService dataBase)
        {
            _dataBase = dataBase;
        }

        public async Task<string> Handle(GetAccountNameByTokenCommand request, CancellationToken cancellationToken)
        {
            try
            {
                _dataBase.CreateConnection("localhost", "schooled_test", "danie_test", "applecandykiller", "");
                string sql = "SELECT user.user_id, user.user_username FROM user JOIN token WHERE token.token_token ='" + request.Token
                        + "' AND user.user_id = token.user_id;";
                MySqlCommand cmd = new MySqlCommand(sql, _dataBase.GetConnection());
                DbDataReader results = await _dataBase.ExecuteQueryStatement(cmd);

                if (results.HasRows)
                {
                    results.Read();
                    var userId = results.GetString(0);

                    if (ComputeSha256Hash(userId).CompareTo(request.UserUid) == 0)
                    {
                        var username = results.GetString(1);

                        _dataBase.CloseConnection();
                        // User was found and valid for the area they are trying to access
                        return username;
                    }

                    // Invalid userId & token combo invalid
                    _dataBase.CloseConnection();
                    return String.Empty;
                }

                _dataBase.CloseConnection();
                return String.Empty;
            }
            catch (Exception e)
            {
                // Error with code
                _dataBase.CloseConnection();
                return String.Empty;
            }

        }

        static string ComputeSha256Hash(string rawData)
        {
            // Create a SHA256   
            using (SHA256 sha256Hash = SHA256.Create())
            {
                // ComputeHash - returns byte array  
                byte[] bytes = sha256Hash.ComputeHash(Encoding.UTF8.GetBytes(rawData));

                // Convert byte array to a string   
                StringBuilder builder = new StringBuilder();
                for (int i = 0; i < bytes.Length; i++)
                {
                    builder.Append(bytes[i].ToString("x2"));
                }
                return builder.ToString();
            }
        }
    }
}
