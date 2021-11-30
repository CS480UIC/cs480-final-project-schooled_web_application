using CS_480_Project.Application.Common.Interfaces;
using CS_480_Project.Application.Role.DTOs;
using MySql.Data.MySqlClient;
using MediatR;
using System.Threading;
using System.Threading.Tasks;
using System;
using System.Security.Cryptography;
using System.Text;

namespace CS_480_Project.Application.Role.Commands.CreateRole
{
    public class CreateRoleCommand : IRequest<GroupRoleDTO>
    {
        public string GroupId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
    }

    public class CreateRoleCommandHandler : IRequestHandler<CreateRoleCommand, GroupRoleDTO>
    {
        private readonly IDatabaseService _dataBase;
        public CreateRoleCommandHandler(IDatabaseService dataBase)
        {
            _dataBase = dataBase;
        }

        public async Task<GroupRoleDTO> Handle(CreateRoleCommand request, CancellationToken cancellationToken)
        {
            try
            {
                var UID = Guid.NewGuid().ToString();

                _dataBase.CreateConnection("localhost", "schooled_web_application", "danie_test", "applecandykiller", "");
                string sql = "INSERT INTO group_role (group_role_id, resource_group_id, group_role_name, group_role_description) VALUES(@val1, @val2, @val3, @val4); ";
                MySqlCommand cmd = new MySqlCommand(sql, _dataBase.GetConnection());
                cmd.Parameters.AddWithValue("@val1", UID);
                cmd.Parameters.AddWithValue("@val2", request.GroupId);
                cmd.Parameters.AddWithValue("@val3", request.Name);
                cmd.Parameters.AddWithValue("@val4", request.Description);
                await _dataBase.ExecuteNonQueryStatement(cmd);

                _dataBase.CloseConnection();

                var newGroupRole = new GroupRoleDTO();

                newGroupRole.Id = UID;
                newGroupRole.Name = request.Name;
                newGroupRole.Description = request.Description;

                return newGroupRole;
            }
            catch (Exception error)
            {
                _dataBase.CloseConnection();
                return null;
            }
            
        }
    }
}
