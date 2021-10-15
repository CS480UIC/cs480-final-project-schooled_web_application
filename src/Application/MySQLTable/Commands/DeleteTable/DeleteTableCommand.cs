using CS_480_Project.Application.Common.Interfaces;
using MediatR;
using MySql.Data.MySqlClient;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace CS_480_Project.Application.MySQLTable.Commands.DeleteTable
{
    public class DeleteTableCommand : IRequest<int>
    {
        public string Name { get; set; }
    }

    public class DeleteTableCommandHandler : IRequestHandler<DeleteTableCommand, int>
    {
        private readonly IDatabaseService _dataBase;

        public DeleteTableCommandHandler(IDatabaseService dataBase)
        {
            _dataBase = dataBase;
        }

        public async Task<int> Handle(DeleteTableCommand request, CancellationToken cancellationToken)
        {
            try
            {
                _dataBase.CreateConnection("localhost", "schooled_test", "danie_test", "applecandykiller", "");

                string sql = "DROP TABLE " + request.Name + ";";
                MySqlCommand cmd = new MySqlCommand(sql, _dataBase.GetConnection());
                await _dataBase.ExecuteNonQueryStatement(cmd);

                _dataBase.CloseConnection();
                return await Task<int>.Run(() => { return 1; });
            }
            catch (Exception error)
            {
                _dataBase.CloseConnection();
                return await Task<int>.Run(() => { return -1; });
            }
        }
    }
}
