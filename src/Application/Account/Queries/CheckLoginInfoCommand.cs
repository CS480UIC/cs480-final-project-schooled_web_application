using CS_480_Project.Application.Common.Interfaces;
using MediatR;
using MySql.Data.MySqlClient;
using System;
using System.Data.Common;
using System.Threading;
using System.Threading.Tasks;
using System.Security.Cryptography;
using System.Text;

namespace CS_480_Project.Application.Account.Queries
{
    public class CheckLoginInfoCommand : IRequest<UserTokenDTO>
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public bool IsAdminLogin { get; set; }
    }

    public class CheckLoginInfoCommandHandler : IRequestHandler<CheckLoginInfoCommand, UserTokenDTO>
    {
        private readonly IDatabaseService _dataBase;

        public CheckLoginInfoCommandHandler(IDatabaseService dataBase)
        {
            _dataBase = dataBase;
        }

        public async Task<UserTokenDTO> Handle(CheckLoginInfoCommand request, CancellationToken cancellationToken)
        {
            UserTokenDTO userToken = null;
            try
            {

                if (request.IsAdminLogin)
                    _dataBase.CreateConnection("localhost", "schooled_test", request.Username, request.Password, "");
                else
                    _dataBase.CreateConnection("localhost", "schooled_test", "danie_test", "applecandykiller", "");

                string sql = "SELECT * FROM user WHERE user_username='" + request.Username + "' AND user_password='" + ComputeSha256Hash(request.Password) + "';";
                MySqlCommand cmd = new MySqlCommand(sql, _dataBase.GetConnection());
                DbDataReader results = await _dataBase.ExecuteQueryStatement(cmd);

                if (results.HasRows)
                {
                    var UID = Guid.NewGuid().ToString();
                    userToken = new UserTokenDTO();

                    results.Read();
                    userToken.token = UID;
                    userToken.userId = results.GetString(0);
                }
                _dataBase.CloseConnection();
                return userToken;
            }
            catch (Exception error)
            {
                _dataBase.CloseConnection();
                return userToken;
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
