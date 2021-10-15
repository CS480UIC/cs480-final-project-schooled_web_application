using CS_480_Project.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System.Threading;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using System.Data.Common;

namespace CS_480_Project.Application.Common.Interfaces
{
    public interface IDatabaseService
    {
        public void CreateConnection(string host, string database, string username, string password, string port);
        public MySqlConnection GetConnection();
        public void CloseConnection();
        public Task<DbDataReader> ExecuteQueryStatement(MySqlCommand queryCommand);
        public Task<int> ExecuteNonQueryStatement(MySqlCommand queryCommand);
    }
}
