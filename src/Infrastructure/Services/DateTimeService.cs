using CS_480_Project.Application.Common.Interfaces;
using System;

namespace CS_480_Project.Infrastructure.Services
{
    public class DateTimeService : IDateTime
    {
        public DateTime Now => DateTime.Now;
    }
}
