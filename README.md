# Schooled
## DATABASE
* schooled_web_application

## Author
* Danie Johnston (Djohn50@uic.edu)

## Database description
User will register for the application which will ask for three fields username, password, email, and phone. Each user will have a unique Id that will be used to link user accounts to various items in the application. So, Users table will store (Id, Username, Password, Email, Phone, CreationDate) with both Id and Username being unique and Id, Username, Password, Email, and CreationDate will all be required with Phone being an optional item.

There will be a validation when users register for the website and accounts will not be activated till the said user has clicked on the link to their email upon registration of the website.
This will require another table for Tokens which will have attributes of (Token, UserId, Type, CreationDate) with Token being unique and Token, UserId, Type, and CreationDate all being required. This table will also be used for account recovery when users forget their password.

This application will require a table for Groups which will store (Id, Name, PrivacyType, Password, CreationDate) with Id being unique and Id, Name, PrivacyType, and CreationDate being required Password will be required only if the type is private with password. This will also mean there will be a table Invites which will store (Token, GroupId, CreationDate) with Token being unique and Token, GroupId and CreationDate all being required.

For the resources for the application, we will require a Resource table with (Id, Name, GroupId, CreationDate, and ResourceType) with Id being unique and Id, Name, GroupId, CreationDate, and ResourceType are all required. The ResourceType will be used to tell if it is a quiz, flash card deck, or whiteboard.

For the resource data we will need 3 more tables Whiteboards, Cards, and Questions.
Whiteboards will have (Id, ResourceId, Data, CreationDate) with Id and Data being unique and Id, ResourceId, Data, and CreationDate all required. Cards will have (Id, ResourceId, Question, Answer) with Id being unique and Id, ResourceId, Question, and Answer all being required. Questions will have (Id, ResourceId, Question, AnswerData) with Id being unique and Id, ResourceId, Question, and AnswerData being required. The AnswerData will be used to store JSON data on the answers and can be used to make different answer types.

There will also need to be a table for ResourcePermissions which will have (Id, ResourceId, PermissionId, Value) with Id and PermissionId being unique and Id, ResourceId, PermissionId, and Value all being required. This mean there will also being a Permissions table which holds all the different type of Permissions available with (Id, Name, Data) with all being unique and all being required.

This application will be created on a ASP.NET Core 5 using Angular 12 with PrimeNG for UI design with a database using MySQL. The Languages being used in this application will be C#, HTML, CSS, TypeScript.

This database is unique given that it allows for so much variety in the space of learning and will allow for features like going back and forward through all the whiteboard history on any whiteboard resource. This will also allow for expansion of features as further idea develop in this area since all the resource types are split from the Resource table and linked using its idea. The database also gives the options to add in more permissions options latter on given the design of the permissions tables.

## CRUD IMAGES

### Resource Group

![New Resource Group](/img/Create_Screen_Group.PNG)
![New Resource Group Code](/img/Create_Group_HTML.PNG)
![Resource Group Management](/img/Update_And_Delete_Screen_Group.PNG)
![Resource Group Management Code Part One](/img/Group_Management_HTML.PNG)
![Resource Group Management Code Part Two](/img/Group_Management_HTML_2.PNG)

### Group Role

![New Role ](/img/Create_Screen_Role.PNG)
![Role Management](/img/Update_And_Delete_Screen_Role.PNG)
![Role Management Code](/img/Role_Management_HTML.PNG)

### Resource

![New Resource ](/img/Create_Screen_Resource.PNG)
![Resource Management](/img/Update_And_Delete_Screen_Resource.PNG)
![Resource Management Code](/img/Resource_Management_HTML.PNG)

## Technologies

* ASP.NET Core 5
* [Entity Framework Core 5](https://docs.microsoft.com/en-us/ef/core/)
* [Angular 12](https://angular.io/)
* [MediatR](https://github.com/jbogard/MediatR)
* [AutoMapper](https://automapper.org/)
* [FluentValidation](https://fluentvalidation.net/)
* [NUnit](https://nunit.org/), [FluentAssertions](https://fluentassertions.com/), [Moq](https://github.com/moq) & [Respawn](https://github.com/jbogard/Respawn)
* [Docker](https://www.docker.com/)

## Getting Started

The easiest way to get started is to install the [NuGet package](https://www.nuget.org/packages/Clean.Architecture.Solution.Template) and run `dotnet new ca-sln`:

1. Install the latest [.NET 5 SDK](https://dotnet.microsoft.com/download/dotnet/5.0)
2. Install the latest [Node.js LTS](https://nodejs.org/en/)
3. Run `dotnet new --install Clean.Architecture.Solution.Template` to install the project template
4. Create a folder for your solution and cd into it (the template will use it as project name)
5. Run `dotnet new ca-sln` to create a new project
6. Navigate to `src/WebUI/ClientApp` and run `npm install`
7. Navigate to `src/WebUI/ClientApp` and run `npm start` to launch the front end (Angular)
8. Navigate to `src/WebUI` and run `dotnet run` to launch the back end (ASP.NET Core Web API)

Check out my [blog post](https://jasontaylor.dev/clean-architecture-getting-started/) for more information.

## Remove Docker

1. Navigate to `./` (Root Directory)
2. Remove files `docker-compose.yml`, `docker-compose.override.yml`, `.dockerignore`, and `docker-compose.dcproj`
3. Navigate to `src/WebUI`
4. Remove file `Dockerfile`
5. Navigate to `src/WebUI/ClientApp`
6. Remove files `Dockerfile` and `.dockerignore`
7. Navigate to `./` (Root Directory)
8. Remove code line:

```C#
   Project("{E53339B2-1760-4266-BCC7-CA923CBCF16C}") = "docker-compose", "docker-compose.dcproj", "{6BD2EC46-FA8F-44F3-AF33-903BBB347116}"
   EndProject
```

from file `Project_File_Name.sln`
## Connecting Project To Database
1. This will require a new implementation of a new service in the project.
2. That service will then be connected to the `Application` area of the project using a interface.
3. This will allow use this service on our API calls from our controllers that are talking to the front end.

## Adding New Database Item
1. Create New SQL file `New_Database_Change_15092021.sql`.
2. Store this new file in the sql file storage folder.
3. Once everyone pulls down the lastest we can update our local database based on changes.

## Connect To Local SQL Server

1. Download MySQL https://dev.mysql.com/downloads/installer/
2. Open MySQL 8.0 Command Line Client
3. connect to server `mysql -u username -p`
4. `password: ProjectPassword Here`
5. Find Database by locating project name

## Overview

### Domain

This will contain all entities, enums, exceptions, interfaces, types and logic specific to the domain layer.

### Application

This layer contains all application logic. It is dependent on the domain layer, but has no dependencies on any other layer or project. This layer defines interfaces that are implemented by outside layers. For example, if the application need to access a notification service, a new interface would be added to application and an implementation would be created within infrastructure.

### Infrastructure

This layer contains classes for accessing external resources such as file systems, web services, smtp, and so on. These classes should be based on interfaces defined within the application layer.

### WebUI

This layer is a single page application based on Angular 10 and ASP.NET Core 5. This layer depends on both the Application and Infrastructure layers, however, the dependency on Infrastructure is only to support dependency injection. Therefore, only *Startup.cs* should reference Infrastructure.

## Support

If you are having problems, please let us know by [raising a new issue](https://github.com/jasontaylordev/CleanArchitecture/issues/new/choose).
