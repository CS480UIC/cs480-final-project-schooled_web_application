using CS_480_Project.Application.Common.Interfaces;
using MediatR;
using MySql.Data.MySqlClient;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace CS_480_Project.Application.MySQLTable.Commands.CreateTable
{
    public class CreateNewTableCommand : IRequest<int>
    {
        public string Name { get; set; }
        public string[] Columns { get; set; }
    }

    public class CreateNewTableCommandHandler : IRequestHandler<CreateNewTableCommand, int>
    {
        private readonly IDatabaseService _dataBase;

        public CreateNewTableCommandHandler(IDatabaseService dataBase)
        {
            _dataBase = dataBase;
        }

        public async Task<int> Handle(CreateNewTableCommand request, CancellationToken cancellationToken)
        {
            try
            {
                _dataBase.CreateConnection("localhost", "schooled_test", "danie_test", "applecandykiller", "");

                string sql = "CREATE TABLE " + request.Name + " (";
                for (int colIndex = 0; colIndex < request.Columns.Length; colIndex++)
                {
                    sql += request.Columns[colIndex];
                    if(colIndex != request.Columns.Length - 1)
                    {
                        sql += ",";
                    }
                }
                sql += ");";
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
