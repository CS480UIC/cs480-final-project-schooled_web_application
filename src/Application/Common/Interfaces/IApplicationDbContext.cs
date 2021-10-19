using Microsoft.EntityFrameworkCore;
using System.Threading;
using System.Threading.Tasks;

namespace CS_480_Project.Application.Common.Interfaces
{
    public interface IApplicationDbContext
    {
        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
    }
}
