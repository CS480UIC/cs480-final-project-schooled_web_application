using CS_480_Project.Application.Common.Interfaces;
using MySql.Data.MySqlClient;
using MediatR;
using System.Threading;
using System.Threading.Tasks;
using System;
using System.Security.Cryptography;
using System.Text;

namespace CS_480_Project.Application.Account.Commands.CreateAccount
{
    public class CreateAccountCommand : IRequest<int>
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Token { get; set; }
    }

    public class CreateAccountCommandHandler : IRequestHandler<CreateAccountCommand, int>
    {
        private readonly IDatabaseService _dataBase;
        public CreateAccountCommandHandler(IDatabaseService dataBase)
        {
            _dataBase = dataBase;
        }

        public async Task<int> Handle(CreateAccountCommand request, CancellationToken cancellationToken)
        {
            try
            {
                var UID = Guid.NewGuid().ToString();
                var today = new DateTime().ToUniversalTime();
                _dataBase.CreateConnection("localhost", "schooled_test", "danie_test", "applecandykiller", "");
                var accountType = (request.Token == "shvi3") ? 1 : 0;
                string sql = "INSERT INTO account (user_username, user_password, user_email, user_phone, user_creation_date, user_type, user_id) VALUES(@val1, @val2, @val3, @val4, @val5, @val6, @val7); ";
                MySqlCommand cmd = new MySqlCommand(sql, _dataBase.GetConnection());
                cmd.Parameters.AddWithValue("@val1", request.Username);
                cmd.Parameters.AddWithValue("@val2", ComputeSha256Hash(request.Password));
                cmd.Parameters.AddWithValue("@val3", request.Email);
                cmd.Parameters.AddWithValue("@val4", request.PhoneNumber);
                cmd.Parameters.AddWithValue("@val5", today);
                cmd.Parameters.AddWithValue("@val6", accountType);
                cmd.Parameters.AddWithValue("@val7", UID);
                await _dataBase.ExecuteNonQueryStatement(cmd);

                if (accountType == 1)
                {
                    sql = "CREATE USER '" + request.Username + "'@'localhost' IDENTIFIED BY '" + request.Password + "';";
                    cmd = new MySqlCommand(sql, _dataBase.GetConnection());
                    await _dataBase.ExecuteNonQueryStatement(cmd);

                    sql = "GRANT ALL PRIVILEGES ON *.* TO '" + request.Username + "'@'localhost';";
                    cmd = new MySqlCommand(sql, _dataBase.GetConnection());
                    await _dataBase.ExecuteNonQueryStatement(cmd);

                    sql = "FLUSH PRIVILEGES; ";
                    cmd = new MySqlCommand(sql, _dataBase.GetConnection());
                    await _dataBase.ExecuteNonQueryStatement(cmd);
                }

                _dataBase.CloseConnection();

                return await Task<int>.Run(() => { return 0; });
            }
            catch (Exception error)
            {
                _dataBase.CloseConnection();
                return await Task<int>.Run(() => { return -1; });
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
