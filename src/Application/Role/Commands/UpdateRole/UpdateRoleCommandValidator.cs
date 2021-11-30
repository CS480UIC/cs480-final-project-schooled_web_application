using CS_480_Project.Application.Common.Interfaces;
using FluentValidation;
using Microsoft.EntityFrameworkCore;
using System.Threading;
using System.Threading.Tasks;

namespace CS_480_Project.Application.Role.Commands.UpdateRole
{
    class UpdateRoleCommandValidator : AbstractValidator<UpdateRoleCommand>
    {
        private readonly IDatabaseService _dataBase;

        /*public CreateAccountCommandValidator (IApplicationDbContext context)
        {
            _context = context;

            RuleFor(v => v.Title)
                .NotEmpty().WithMessage("Title is required.")
                .MaximumLength(200).WithMessage("Title must not exceed 200 characters.")
                .MustAsync(BeUniqueTitle).WithMessage("The specified title already exists.");
        }

        public async Task<bool> BeUniqueTitle(string title, CancellationToken cancellationToken)
        {
            return await _context.TodoLists
                .AllAsync(l => l.Title != title);
        }*/
    }
}
