using CS_480_Project.Application.Common.Mappings;
using CS_480_Project.Domain.Entities;

namespace CS_480_Project.Application.TodoLists.Queries.ExportTodos
{
    public class TodoItemRecord : IMapFrom<TodoItem>
    {
        public string Title { get; set; }

        public bool Done { get; set; }
    }
}
