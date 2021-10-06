using System;

namespace CS_480_Project.Application.Common.Interfaces
{
    public interface IEmailService
    {
        public void sendEmail(String subject, String plainTextContent, String htmlContent, String toName, String toEmail);
    }
}
