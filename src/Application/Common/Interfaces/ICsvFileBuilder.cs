using CS_480_Project.Application.TodoLists.Queries.ExportTodos;
using System.Collections.Generic;

namespace CS_480_Project.Application.Common.Interfaces
{
    public interface ICsvFileBuilder
    {
        byte[] BuildTodoItemsFile(IEnumerable<TodoItemRecord> records);
    }
}
