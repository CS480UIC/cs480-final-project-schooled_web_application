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
                string userId = null;

                if (request.IsAdminLogin)
                    _dataBase.CreateConnection("localhost", "schooled_test", request.Username, request.Password, "");
                else
                    _dataBase.CreateConnection("localhost", "schooled_test", "danie_test", "applecandykiller", "");

                string sql = "SELECT * FROM account WHERE user_username='" + request.Username + "' AND user_password='" + ComputeSha256Hash(request.Password) + "';";
                MySqlCommand cmd = new MySqlCommand(sql, _dataBase.GetConnection());
                DbDataReader results = await _dataBase.ExecuteQueryStatement(cmd);

                if (results.HasRows)
                {
                    var UID = Guid.NewGuid().ToString();
                    var today = new DateTime().ToUniversalTime();
                    userToken = new UserTokenDTO();

                    results.Read();
                    userId = results.GetString(0);

                    /*sql = "DELETE FROM token WHERE user_id='" + userId + "';";
                    cmd = new MySqlCommand(sql, _dataBase.GetConnection());
                    await _dataBase.ExecuteNonQueryStatement(cmd);

                    sql = "INSERT INTO token (token_token, user_id, token_type, token_creation_date) VALUES(@val1, @val2, @val3, @val4); ";
                    cmd = new MySqlCommand(sql, _dataBase.GetConnection());
                    cmd.Parameters.AddWithValue("@val1", UID);
                    cmd.Parameters.AddWithValue("@val2", userId);
                    cmd.Parameters.AddWithValue("@val3", 99);
                    cmd.Parameters.AddWithValue("@val4", today);
                    await _dataBase.ExecuteNonQueryStatement(cmd);*/

                    userToken.userUIN = ComputeSha256Hash(userId);
                    userToken.token = UID;
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
