using CS_480_Project.Application.Common.Interfaces;
using CS_480_Project.Application.MySQLTable.DTOs;
using MediatR;
using MySql.Data.MySqlClient;
using System;
using System.Threading;
using System.Threading.Tasks;
using System.Data.Common;
using System.Collections.Generic;

namespace CS_480_Project.Application.MySQLTable.Queries
{
    public class GetTableDataByNameQuery : IRequest<ReturnTableDTO>
    {
        public string Name { get; set; }
        public int NumberOfRows { get; set; }
    }

    public class GetTableDataByNameQueryHandler : IRequestHandler<GetTableDataByNameQuery, ReturnTableDTO>
    {
        private readonly IDatabaseService _dataBase;

        public GetTableDataByNameQueryHandler(IDatabaseService dataBase)
        {
            _dataBase = dataBase;
        }

        public async Task<ReturnTableDTO> Handle(GetTableDataByNameQuery request, CancellationToken cancellationToken)
        {
            ReturnTableDTO currentTable = null;
            try
            {
                currentTable = new ReturnTableDTO();
                _dataBase.CreateConnection("localhost", "schooled_web_application", "danie_test", "applecandykiller", "");

                string sql = "SELECT * FROM " + request.Name + " LIMIT " + request.NumberOfRows + ";";
                MySqlCommand cmd = new MySqlCommand(sql, _dataBase.GetConnection());
                DbDataReader results = await _dataBase.ExecuteQueryStatement(cmd);
                currentTable.entries = new List<EntryDTO>();
                currentTable.colHeaders = new List<string>();
                currentTable.colTypes = new List<string>();
                if (results.HasRows)
                {
                    while (results.Read())
                    {
                        var tempList = new EntryDTO();
                        tempList.cols = new List<string>();
                        for (int entryIndex = 0; entryIndex < results.FieldCount; entryIndex++)
                        {
                            if (!currentTable.colHeaders.Contains(results.GetName(entryIndex)))
                            {
                                currentTable.colHeaders.Add(results.GetName(entryIndex));
                                currentTable.colTypes.Add(results.GetValue(entryIndex).GetType().ToString().Replace("System.", ""));
                            }
                            tempList.cols.Add(results.GetValue(entryIndex).ToString());
                        }
                        currentTable.entries.Add(tempList);
                    }
                }

                currentTable.name = request.Name;
                _dataBase.CloseConnection();
                return currentTable;
            }
            catch (Exception error)
            {
                _dataBase.CloseConnection();
                return currentTable;
            }
        }
    }
}
