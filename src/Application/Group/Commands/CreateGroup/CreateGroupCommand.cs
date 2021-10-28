using CS_480_Project.Application.Common.Interfaces;
using CS_480_Project.Application.Group.DTOs;
using MySql.Data.MySqlClient;
using MediatR;
using System.Threading;
using System.Threading.Tasks;
using System;
using System.Security.Cryptography;
using System.Text;

namespace CS_480_Project.Application.Group.Commands.CreateGroup
{
    public class CreateGroupCommand : IRequest<GroupDTO>
    {
        public string Name { get; set; }
        public int PrivacyType { get; set; }
        public string Description { get; set; }
        public string Password { get; set; }
    }

    public class CreateGroupCommandHandler : IRequestHandler<CreateGroupCommand, GroupDTO>
    {
        private readonly IDatabaseService _dataBase;
        public CreateGroupCommandHandler(IDatabaseService dataBase)
        {
            _dataBase = dataBase;
        }

        public async Task<GroupDTO> Handle(CreateGroupCommand request, CancellationToken cancellationToken)
        {
            try
            {
                var UID = Guid.NewGuid().ToString();
                var today = new DateTime().ToUniversalTime();
                var password = request.Password == null || request.Password.CompareTo("") == 0 ? null : ComputeSha256Hash(request.Password);

                _dataBase.CreateConnection("localhost", "schooled_web_application", "danie_test", "applecandykiller", "");
                string sql = "INSERT INTO resource_group (resource_group_id, resource_group_name, resource_group_privacy_type, resource_group_password" +
                    ", resource_group_creation_date, resource_group_description) VALUES(@val1, @val2, @val3, @val4, @val5, @val6); ";
                MySqlCommand cmd = new MySqlCommand(sql, _dataBase.GetConnection());
                cmd.Parameters.AddWithValue("@val1", UID);
                cmd.Parameters.AddWithValue("@val2", request.Name);
                cmd.Parameters.AddWithValue("@val3", request.PrivacyType);
                cmd.Parameters.AddWithValue("@val4", password);
                cmd.Parameters.AddWithValue("@val5", today);
                cmd.Parameters.AddWithValue("@val6", request.Description);
                await _dataBase.ExecuteNonQueryStatement(cmd);

                _dataBase.CloseConnection();

                var newGroup = new GroupDTO();

                newGroup.Id = UID;
                newGroup.Name = request.Name;
                newGroup.Description = request.Description;

                return newGroup;
            }
            catch (Exception error)
            {
                _dataBase.CloseConnection();
                return null;
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
