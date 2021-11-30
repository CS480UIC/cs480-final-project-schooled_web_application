using CS_480_Project.Application.Common.Interfaces;
using CS_480_Project.Application.Group.DTOs;
using MySql.Data.MySqlClient;
using MediatR;
using System.Threading;
using System.Threading.Tasks;
using System;
using System.Security.Cryptography;
using System.Text;

namespace CS_480_Project.Application.Group.Commands.DeleteGroup
{
    public class DeleteGroupCommand : IRequest<int>
    {
        public string Id { get; set; }
    }

    public class DeleteGroupCommandHandler : IRequestHandler<DeleteGroupCommand, int>
    {
        private readonly IDatabaseService _dataBase;
        public DeleteGroupCommandHandler(IDatabaseService dataBase)
        {
            _dataBase = dataBase;
        }

        public async Task<int> Handle(DeleteGroupCommand request, CancellationToken cancellationToken)
        {
            try
            {
                _dataBase.CreateConnection("localhost", "schooled_web_application", "danie_test", "applecandykiller", "");
                string sql = "DELETE FROM resource_group WHERE resource_group_id = '" + request.Id + "';";
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
