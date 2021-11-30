using CS_480_Project.Application.Common.Interfaces;
using MySql.Data.MySqlClient;
using MediatR;
using System.Threading;
using System.Threading.Tasks;
using System;
using System.Security.Cryptography;
using System.Text;

namespace CS_480_Project.Application.GroupMember.Commands.DeleteGroupMember
{
    public class DeleteGroupMemberCommand : IRequest<int>
    {
        public string Id { get; set; }
    }

    public class DeleteGroupMemberCommandHandler : IRequestHandler<DeleteGroupMemberCommand, int>
    {
        private readonly IDatabaseService _dataBase;
        public DeleteGroupMemberCommandHandler(IDatabaseService dataBase)
        {
            _dataBase = dataBase;
        }

        public async Task<int> Handle(DeleteGroupMemberCommand request, CancellationToken cancellationToken)
        {
            try
            {
                _dataBase.CreateConnection("localhost", "schooled_web_application", "danie_test", "applecandykiller", "");
                string sql = " DELETE FROM group_member as member WHERE group_role_id = " +
                    "(SELECT role.group_role_id FROM group_role as role WHERE role.group_role_id = member.group_role_id AND role.resource_group_id  = '" + request.Id + "');";
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
