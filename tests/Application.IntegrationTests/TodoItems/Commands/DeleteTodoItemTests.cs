using CS_480_Project.Application.Common.Exceptions;
using CS_480_Project.Application.TodoItems.Commands.CreateTodoItem;
using CS_480_Project.Application.TodoItems.Commands.DeleteTodoItem;
using CS_480_Project.Application.TodoLists.Commands.CreateTodoList;
using CS_480_Project.Domain.Entities;
using FluentAssertions;
using System.Threading.Tasks;
using NUnit.Framework;

namespace CS_480_Project.Application.IntegrationTests.TodoItems.Commands
{
    using static Testing;

    public class DeleteTodoItemTests : TestBase
    {
        [Test]
        public void ShouldRequireValidTodoItemId()
        {
            var command = new DeleteTodoItemCommand { Id = 99 };

            FluentActions.Invoking(() =>
                SendAsync(command)).Should().Throw<NotFoundException>();
        }

        [Test]
        public async Task ShouldDeleteTodoItem()
        {
            var listId = await SendAsync(new CreateTodoListCommand
            {
                Title = "New List"
            });

            var itemId = await SendAsync(new CreateTodoItemCommand
            {
                ListId = listId,
                Title = "New Item"
            });

            await SendAsync(new DeleteTodoItemCommand
            {
                Id = itemId
            });

            var item = await FindAsync<TodoItem>(itemId);

            item.Should().BeNull();
        }
    }
}
