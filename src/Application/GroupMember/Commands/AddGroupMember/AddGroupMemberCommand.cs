using CS_480_Project.Application.Common.Interfaces;
using MySql.Data.MySqlClient;
using MediatR;
using System.Threading;
using System.Threading.Tasks;
using System;
using System.Security.Cryptography;
using System.Text;

namespace CS_480_Project.Application.GroupMember.Commands.AddGroupMember
{
    public class AddGroupMemberCommand : IRequest<int>
    {
        public string GroupId { get; set; }
        public string Token { get; set; }
    }

    public class AddGroupMemberCommandHandler : IRequestHandler<AddGroupMemberCommand, int>
    {
        private readonly IDatabaseService _dataBase;
        public AddGroupMemberCommandHandler(IDatabaseService dataBase)
        {
            _dataBase = dataBase;
        }

        public async Task<int> Handle(AddGroupMemberCommand request, CancellationToken cancellationToken)
        {
            try
            {
                var UID = Guid.NewGuid().ToString();

                _dataBase.CreateConnection("localhost", "schooled_web_application", "danie_test", "applecandykiller", "");
                string sql = "INSERT INTO group_member (group_member_id, group_role_id, user_id) " +
                    "VALUES(@val1, @val2, (SELECT user_id FROM token WHERE token.token_token ='" + request.Token + "));";
                MySqlCommand cmd = new MySqlCommand(sql, _dataBase.GetConnection());
                cmd.Parameters.AddWithValue("@val1", UID);
                cmd.Parameters.AddWithValue("@val2", request.GroupId);
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
