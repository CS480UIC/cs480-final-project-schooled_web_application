using CS_480_Project.Domain.Common;
using CS_480_Project.Domain.Entities;

namespace CS_480_Project.Domain.Events
{
    public class TodoItemCreatedEvent : DomainEvent
    {
        public TodoItemCreatedEvent(TodoItem item)
        {
            Item = item;
        }

        public TodoItem Item { get; }
    }
}
