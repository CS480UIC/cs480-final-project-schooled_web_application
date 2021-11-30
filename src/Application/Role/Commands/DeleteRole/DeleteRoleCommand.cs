using CS_480_Project.Application.Common.Interfaces;
using CS_480_Project.Application.Role.DTOs;
using MySql.Data.MySqlClient;
using MediatR;
using System.Threading;
using System.Threading.Tasks;
using System;
using System.Security.Cryptography;
using System.Text;

namespace CS_480_Project.Application.Role.Commands.DeleteRole
{
    public class DeleteRoleCommand : IRequest<int>
    {
        public string Id { get; set; }
    }

    public class DeleteRoleCommandHandler : IRequestHandler<DeleteRoleCommand, int>
    {
        private readonly IDatabaseService _dataBase;
        public DeleteRoleCommandHandler(IDatabaseService dataBase)
        {
            _dataBase = dataBase;
        }

        public async Task<int> Handle(DeleteRoleCommand request, CancellationToken cancellationToken)
        {
            try
            {
                _dataBase.CreateConnection("localhost", "schooled_web_application", "danie_test", "applecandykiller", "");
                string sql = "DELETE FROM group_role WHERE resource_group_id = '" + request.Id + "'";
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
