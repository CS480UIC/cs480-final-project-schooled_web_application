using System;
using SendGrid;
using SendGrid.Helpers.Mail;
using System.Threading.Tasks;
using CS_480_Project.Application.Common.Interfaces;

namespace CS_480_Project.Infrastructure.Services
{
    public class SendGridSendEmails : IEmailService
    {
        private static string emailSubject;
        private static string emailPlainTextContent;
        private static string emailHtmlContent;
        private static string emailToEmail;
        private static string emailToName;

        public void sendEmail(String subject, String plainTextContent, String htmlContent, String toName, String toEmail)
        {
            emailSubject = subject;
            emailPlainTextContent = plainTextContent;
            emailHtmlContent = htmlContent;
            emailToEmail = toEmail;
            emailToName = toName;
            Execute().Wait();
        }
        
        static async Task Execute()
        {
            var apiKey = "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";
            //"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";//
            var client = new SendGridClient(apiKey);
            var from = new EmailAddress("djohn50@uic.edu", "Travel Test User");
            var subject = emailSubject;
            var to = new EmailAddress(emailToEmail, emailToName);
            var plainTextContent = emailPlainTextContent;
            var htmlContent = emailHtmlContent;
            var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent, htmlContent);
            var response = await client.SendEmailAsync(msg);
        }
    }
}
