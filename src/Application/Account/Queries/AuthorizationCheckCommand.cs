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
    public class AuthorizationCheckCommand : IRequest<int>
    {
        public string UserUid { get; set; }
        public string Token { get; set; }
        public Boolean IsAdminArea { get; set; }
    }

    public class AuthorizationCheckCommandHandler : IRequestHandler<AuthorizationCheckCommand, int>
    {
        private readonly IDatabaseService _dataBase;

        public AuthorizationCheckCommandHandler(IDatabaseService dataBase)
        {
            _dataBase = dataBase;
        }

        public async Task<int> Handle(AuthorizationCheckCommand request, CancellationToken cancellationToken)
        {
            int responseCode = -1;
            try
            {
                _dataBase.CreateConnection("localhost", "schooled_web_application", "danie_test", "applecandykiller", "");
                string sql;

                if (request.IsAdminArea)
                    sql = "SELECT user.user_id FROM user JOIN token WHERE token.token_token ='" + request.Token 
                        + "' AND user.user_id = token.user_id AND user.user_type = 1;";
                else
                    sql = "SELECT user_id FROM token WHERE token_token='" + request.Token + "';";

                MySqlCommand cmd = new MySqlCommand(sql, _dataBase.GetConnection());
                DbDataReader results = await _dataBase.ExecuteQueryStatement(cmd);

                if (results.HasRows)
                {
                    results.Read();
                    var userId = results.GetString(0);

                    if (ComputeSha256Hash(userId).CompareTo(request.UserUid) == 0)
                    {   
                        _dataBase.CloseConnection();
                        // User was found and valid for the area they are trying to access
                        return 0;
                    }

                    // Invalid userId & token combo invalid
                    _dataBase.CloseConnection();
                    return -2;
                }

                if (request.IsAdminArea)
                    // Invalid token for admin access
                    responseCode = -4;
                else
                    // Token does not exist
                    responseCode = -3;

                _dataBase.CloseConnection();
                return responseCode;
            }catch(Exception e)
            {
                // Error with code
                _dataBase.CloseConnection();
                return responseCode;
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
