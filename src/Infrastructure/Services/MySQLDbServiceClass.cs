using System;
using CS_480_Project.Application.Common.Interfaces;
using MySql.Data.MySqlClient;

namespace CS_480_Project.Infrastructure.Services
{
    public class MySQLDbServiceClass : IDatabaseService
    {
        string connetionString = null;
        MySqlConnection connection;
        public MySQLDbServiceClass()
        {
            string server = "ensembldb.ensembl.org";
            string port = "3306";
            string dataBase = "ensembl_production_73";
            string username = "anonymous";
            string password = "";
            connetionString = "server=" + server + ";port=" + port + ";database=" + dataBase + ";uid=" + username + ";pwd=" + password + ";SslMode=none;";
            connection = new MySqlConnection(connetionString);
            try
            {
                connection.Open();
                MySqlCommand testCommand = new MySqlCommand("select distinct(name),biotype_group from biotype where db_type like '%core%' and is_current=1 order by biotype_group,name;", connection);
                MySqlDataReader output = testCommand.ExecuteReader();
                Console.WriteLine("Connection Opened!!!");
                Console.WriteLine("name biotype_group");
                while (output.Read())
                {
                    Console.WriteLine(output.GetString(0) + " " + output.GetString(1));
                }
                connection.Close();
            }
            catch (Exception ex)
            {
                Console.WriteLine("Can not open connection ! ");
            }
        }
    }
}
