using CS_480_Project.Application.Common.Interfaces;
using MediatR;
using MySql.Data.MySqlClient;
using System;
using System.Data.Common;
using System.Security.Cryptography;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using CS_480_Project.Application.Group.DTOs;
using System.Collections.Generic;

namespace CS_480_Project.Application.Group.Queries
{
    public class GetGroupsByTokenCommand : IRequest<GroupsDTO>
    {
        public string UserUid { get; set; }
        public string Token { get; set; }
    }

    public class GetGroupsByTokenCommandHandler : IRequestHandler<GetGroupsByTokenCommand, GroupsDTO>
    {
        private readonly IDatabaseService _dataBase;

        public GetGroupsByTokenCommandHandler(IDatabaseService dataBase)
        {
            _dataBase = dataBase;
        }

        public async Task<GroupsDTO> Handle(GetGroupsByTokenCommand request, CancellationToken cancellationToken)
        {
            GroupsDTO resourceGroups = new GroupsDTO();

            try
            {
                _dataBase.CreateConnection("localhost", "schooled_web_application", "danie_test", "applecandykiller", "");
                string sql = "SELECT token.user_id, resource_group.resource_group_id, resource_group.resource_group_name, resource_group.resource_group_description" +
                    " FROM resource_group" +
                    " JOIN group_member JOIN token JOIN group_role" +
                    " WHERE token.token_token ='" + request.Token + "' AND token.user_id = group_member.user_id AND group_member.group_role_id = group_role.group_role_id" +
                    " AND resource_group.resource_group_id = group_role.resource_group_id;";
                MySqlCommand cmd = new MySqlCommand(sql, _dataBase.GetConnection());
                DbDataReader results = await _dataBase.ExecuteQueryStatement(cmd);

                resourceGroups = new GroupsDTO();
                if (results.HasRows)
                {
                    results.Read();
                    var userId = results.GetString(0);

                    if (ComputeSha256Hash(userId).CompareTo(request.UserUid) == 0)
                    {
                        resourceGroups.ResourceGroups = new List<GroupDTO>();
                        do
                        {
                            GroupDTO newGroup = new GroupDTO();
                            newGroup.Id = results.GetString(1);
                            newGroup.Name = results.GetString(2);
                            newGroup.Description = results.GetString(3);
                            resourceGroups.ResourceGroups.Add(newGroup);
                        } while (results.Read());

                        // Invalid userId & token combo invalid
                        _dataBase.CloseConnection();
                        return resourceGroups;
                    }

                    // Invalid userId & token combo invalid
                    _dataBase.CloseConnection();
                    return null;
                }

                _dataBase.CloseConnection();
                return resourceGroups;
            }
            catch (Exception e)
            {
                // Error with code
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
