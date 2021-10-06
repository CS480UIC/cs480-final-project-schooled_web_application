using CS_480_Project.Domain.Common;
using System.Threading.Tasks;

namespace CS_480_Project.Application.Common.Interfaces
{
    public interface IDomainEventService
    {
        Task Publish(DomainEvent domainEvent);
    }
}
