using CS_480_Project.Application.Common.Interfaces;
using CS_480_Project.Application.Tokens.DTOs;
using System.Security.Cryptography;
using System.Text;
using MySql.Data.MySqlClient;
using MediatR;
using System.Threading;
using System.Threading.Tasks;
using System;

namespace CS_480_Project.Application.Tokens.Commands.CreateToken
{
    public class CreateTokenCommand : IRequest<LoginTokenDto>
    {
        public string UserId { get; set; }
        public int Type { get; set; }
        public string UID { get; set; }
    }

    public class CreateTokenCommandHandler : IRequestHandler<CreateTokenCommand, LoginTokenDto>
    {
        private readonly IDatabaseService _dataBase;
        public CreateTokenCommandHandler(IDatabaseService dataBase)
        {
            _dataBase = dataBase;
        }

        public async Task<LoginTokenDto> Handle(CreateTokenCommand request, CancellationToken cancellationToken)
        {
            LoginTokenDto loginToken = null;
            try
            {
                string token = ComputeSha256Hash(request.UID);
                loginToken = new LoginTokenDto();
                loginToken.token = token;
                loginToken.userUIN = ComputeSha256Hash(request.UserId);
                _dataBase.CreateConnection("localhost", "schooled_test", "danie_test", "applecandykiller", "");
                string sql = "INSERT INTO token (token_token, user_id, token_type, token_creation_date) VALUES(@val1, @val2, @val3, @val4); ";
                MySqlCommand cmd = new MySqlCommand(sql, _dataBase.GetConnection());
                cmd.Parameters.AddWithValue("@val1", token);
                cmd.Parameters.AddWithValue("@val2", request.UserId);
                cmd.Parameters.AddWithValue("@val3", request.Type);
                cmd.Parameters.AddWithValue("@val4", new DateTime());
                await _dataBase.ExecuteNonQueryStatement(cmd);
                return loginToken;
            }
            catch (Exception error)
            {
                _dataBase.CloseConnection();
                return loginToken;
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
