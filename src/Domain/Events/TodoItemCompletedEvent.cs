using CS_480_Project.Domain.Common;
using CS_480_Project.Domain.Entities;

namespace CS_480_Project.Domain.Events
{
    public class TodoItemCompletedEvent : DomainEvent
    {
        public TodoItemCompletedEvent(TodoItem item)
        {
            Item = item;
        }

        public TodoItem Item { get; }
    }
}
