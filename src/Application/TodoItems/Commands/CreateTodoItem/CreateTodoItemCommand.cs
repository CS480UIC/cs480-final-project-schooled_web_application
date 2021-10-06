using CS_480_Project.Application.Common.Interfaces;
using CS_480_Project.Domain.Entities;
using CS_480_Project.Domain.Events;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace CS_480_Project.Application.TodoItems.Commands.CreateTodoItem
{
    public class CreateTodoItemCommand : IRequest<int>
    {
        public int ListId { get; set; }

        public string Title { get; set; }
    }

    public class CreateTodoItemCommandHandler : IRequestHandler<CreateTodoItemCommand, int>
    {
        private readonly IApplicationDbContext _context;
        private readonly IDatabaseService _dataBase;

        public CreateTodoItemCommandHandler(IApplicationDbContext context, IDatabaseService dataBase)
        {
            _context = context;
            _dataBase = dataBase;
        }

        public async Task<int> Handle(CreateTodoItemCommand request, CancellationToken cancellationToken)
        {
            var entity = new TodoItem
            {
                ListId = request.ListId,
                Title = request.Title,
                Done = false
            };

            entity.DomainEvents.Add(new TodoItemCreatedEvent(entity));

            _context.TodoItems.Add(entity);

            await _context.SaveChangesAsync(cancellationToken);

            return entity.Id;
        }
    }
}
