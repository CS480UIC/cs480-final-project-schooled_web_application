using CS_480_Project.Application.Common.Interfaces;
using CS_480_Project.Application.Group.DTOs;
using MySql.Data.MySqlClient;
using MediatR;
using System.Threading;
using System.Threading.Tasks;
using System;
using System.Security.Cryptography;
using System.Text;

namespace CS_480_Project.Application.Group.Commands.UpdateGroup
{
    public class UpdateGroupCommand : IRequest<int>
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public int PrivacyType { get; set; }
        public string Description { get; set; }
        public string Password { get; set; }
    }

    public class UpdateGroupCommandHandler : IRequestHandler<UpdateGroupCommand, int>
    {
        private readonly IDatabaseService _dataBase;
        public UpdateGroupCommandHandler(IDatabaseService dataBase)
        {
            _dataBase = dataBase;
        }

        public async Task<int> Handle(UpdateGroupCommand request, CancellationToken cancellationToken)
        {
            try
            {
                var password = request.Password == null || request.Password.CompareTo("") == 0 ? null : ComputeSha256Hash(request.Password);

                _dataBase.CreateConnection("localhost", "schooled_web_application", "danie_test", "applecandykiller", "");
                string sql = "UPDATE resource_group SET resource_group_name = '" + request.Name 
                    + "', resource_group_description = '" + request.Description + "', resource_group_privacy_type ='" + request.PrivacyType + "', "
                    + " resource_group_password='" + password + "' " + "WHERE resource_group_id = '" + request.Id + "';";
                MySqlCommand cmd = new MySqlCommand(sql, _dataBase.GetConnection());
                await _dataBase.ExecuteNonQueryStatement(cmd);

                _dataBase.CloseConnection();

                return 0;
            }
            catch (Exception error)
            {
                _dataBase.CloseConnection();
                return -1;
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
