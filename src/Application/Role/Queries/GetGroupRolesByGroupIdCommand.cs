using CS_480_Project.Application.Common.Interfaces;
using MediatR;
using MySql.Data.MySqlClient;
using System;
using System.Data.Common;
using System.Security.Cryptography;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using CS_480_Project.Application.Role.DTOs;
using System.Collections.Generic;

namespace CS_480_Project.Application.Role.Queries
{
    public class GetGroupRolesByGroupIdCommand : IRequest<GroupRolesDTO>
    {
        public string GroupId { get; set; }
    }

    public class GetGroupRolesByGroupIdCommandHandler : IRequestHandler<GetGroupRolesByGroupIdCommand, GroupRolesDTO>
    {
        private readonly IDatabaseService _dataBase;

        public GetGroupRolesByGroupIdCommandHandler(IDatabaseService dataBase)
        {
            _dataBase = dataBase;
        }

        public async Task<GroupRolesDTO> Handle(GetGroupRolesByGroupIdCommand request, CancellationToken cancellationToken)
        {
            GroupRolesDTO groupRoles = new GroupRolesDTO();

            try
            {
                _dataBase.CreateConnection("localhost", "schooled_web_application", "danie_test", "applecandykiller", "");
                string sql = "SELECT group_role_id, group_role_name, group_role_description" +
                    " FROM group_role WHERE resource_group_id ='" + request.GroupId + "';";
                MySqlCommand cmd = new MySqlCommand(sql, _dataBase.GetConnection());
                DbDataReader results = await _dataBase.ExecuteQueryStatement(cmd);

                groupRoles = new GroupRolesDTO();
                if (results.HasRows)
                {
                    results.Read();

                    groupRoles.GroupRoles = new List<GroupRoleDTO>();
                    do
                    {
                        GroupRoleDTO newGroup = new GroupRoleDTO();
                        newGroup.Id = results.GetString(0);
                        newGroup.Name = results.GetString(1);
                        newGroup.Description = results.GetString(2);
                        groupRoles.GroupRoles.Add(newGroup);
                    } while (results.Read());

                    // Invalid userId & token combo invalid
                    _dataBase.CloseConnection();
                    return groupRoles;
                }

                _dataBase.CloseConnection();
                return groupRoles;
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
