using CS_480_Project.Application.Common.Interfaces;
using CS_480_Project.Application.Role.DTOs;
using MySql.Data.MySqlClient;
using MediatR;
using System.Threading;
using System.Threading.Tasks;
using System;
using System.Security.Cryptography;
using System.Text;

namespace CS_480_Project.Application.Role.Commands.UpdateRole
{
    public class UpdateRoleCommand : IRequest<int>
    {
        public string RoleId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
    }

    public class UpdateRoleCommandHandler : IRequestHandler<UpdateRoleCommand, int>
    {
        private readonly IDatabaseService _dataBase;
        public UpdateRoleCommandHandler(IDatabaseService dataBase)
        {
            _dataBase = dataBase;
        }

        public async Task<int> Handle(UpdateRoleCommand request, CancellationToken cancellationToken)
        {
            try
            {
                _dataBase.CreateConnection("localhost", "schooled_web_application", "danie_test", "applecandykiller", "");
                string sql = "UPDATE group_role SET group_role_name = '" + request.Name
                    + "', group_role_description = '" + request.Description + "' " + "WHERE group_role_id = '" + request.RoleId + "';";
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
    }
}
