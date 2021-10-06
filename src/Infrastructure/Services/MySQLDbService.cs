using System;
using CS_480_Project.Application.Common.Interfaces;
using MySql.Data.MySqlClient;
using System.Threading.Tasks;

namespace CS_480_Project.Infrastructure.Services
{
    public class MySQLDbService : IDatabaseService
    {
        string connetionString;
        MySqlConnection connection;
        public MySQLDbService()
        {
            connection = null;
            connetionString = null;
        }

        // This will work for opening a connection a MySQL Database
        public void CreateConnection(string host, string database, string username, string password, string port)
        {
            try
            {
                connetionString = "server=" + host + ";port=" + port + ";database=" + database + ";uid=" + username + ";pwd=" + password + ";SslMode=none;";
                connection = new MySqlConnection(connetionString);
                connection.Open();
                Console.WriteLine("Connection Opened!!!");
            }
            catch (Exception ex)
            {
                Console.WriteLine("Can not open connection ! ");
            }
        }

        // This will work to colose the current connection
        public void CloseConnection()
        {
            connection.Close();
        }

        // This will work as a basic query to get all or any columns from any table
        public MySqlDataReader ExecuteQueryStatement(MySqlCommand queryCommand)
        {
            queryCommand.Prepare();
            return queryCommand.ExecuteReader();
        }

        public void ExecuteNonQueryStatement(MySqlCommand queryCommand)
        {
            queryCommand.Prepare();
            queryCommand.ExecuteNonQuery();
        }
    }
}
