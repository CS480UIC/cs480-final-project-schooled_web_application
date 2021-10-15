using CS_480_Project.Application.Common.Interfaces;
using CS_480_Project.Domain.Entities;
using CS_480_Project.Domain.Events;
using MediatR;
using MySql.Data.MySqlClient;
using System;
using System.Data.Common;
using System.Security.Cryptography;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace CS_480_Project.Application.Account.Queries
{
    public class AuthorizationCheckCommand : IRequest<int>
    {
        public string UserUid { get; set; }
        public string Token { get; set; }
    }

    public class AuthorizationCheckCommandHandler : IRequestHandler<AuthorizationCheckCommand, int>
    {
        private readonly IDatabaseService _dataBase;

        public AuthorizationCheckCommandHandler(IDatabaseService dataBase)
        {
            _dataBase = dataBase;
        }

        public async Task<int> Handle(AuthorizationCheckCommand request, CancellationToken cancellationToken)
        {
            return await Task<int>.Run(() => { return -1; });
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
