"use strict";
/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.9.4.0 (NJsonSchema v10.3.1.0 (Newtonsoft.Json v12.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwaggerException = exports.WeatherForecast = exports.UpdateTodoListCommand = exports.CreateTodoListCommand = exports.TodoListDto = exports.PriorityLevelDto = exports.TodosVm = exports.PriorityLevel = exports.UpdateTodoItemDetailCommand = exports.UpdateTodoItemCommand = exports.CreateTodoItemCommand = exports.TodoItemDto = exports.PaginatedListOfTodoItemDto = exports.DeleteTableCommand = exports.GetTableDataByNameQuery = exports.EntryDTO = exports.ReturnTableDTO = exports.CreateNewTableCommand = exports.AuthorizationCheckCommand = exports.CheckLoginInfoCommand = exports.UserTokenDTO = exports.CreateAccountCommand = exports.API_BASE_URL = void 0;
var rxjs_1 = require("rxjs");
var core_1 = require("@angular/core");
exports.API_BASE_URL = new core_1.InjectionToken('API_BASE_URL');
var CreateAccountCommand = /** @class */ (function () {
    function CreateAccountCommand(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    CreateAccountCommand.prototype.init = function (_data) {
        if (_data) {
            this.username = _data["username"];
            this.password = _data["password"];
            this.phoneNumber = _data["phoneNumber"];
            this.email = _data["email"];
            this.token = _data["token"];
        }
    };
    CreateAccountCommand.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new CreateAccountCommand();
        result.init(data);
        return result;
    };
    CreateAccountCommand.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["username"] = this.username;
        data["password"] = this.password;
        data["phoneNumber"] = this.phoneNumber;
        data["email"] = this.email;
        data["token"] = this.token;
        return data;
    };
    return CreateAccountCommand;
}());
exports.CreateAccountCommand = CreateAccountCommand;
var UserTokenDTO = /** @class */ (function () {
    function UserTokenDTO(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    UserTokenDTO.prototype.init = function (_data) {
        if (_data) {
            this.userUIN = _data["userUIN"];
            this.token = _data["token"];
        }
    };
    UserTokenDTO.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new UserTokenDTO();
        result.init(data);
        return result;
    };
    UserTokenDTO.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["userUIN"] = this.userUIN;
        data["token"] = this.token;
        return data;
    };
    return UserTokenDTO;
}());
exports.UserTokenDTO = UserTokenDTO;
var CheckLoginInfoCommand = /** @class */ (function () {
    function CheckLoginInfoCommand(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    CheckLoginInfoCommand.prototype.init = function (_data) {
        if (_data) {
            this.username = _data["username"];
            this.password = _data["password"];
            this.isAdminLogin = _data["isAdminLogin"];
        }
    };
    CheckLoginInfoCommand.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new CheckLoginInfoCommand();
        result.init(data);
        return result;
    };
    CheckLoginInfoCommand.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["username"] = this.username;
        data["password"] = this.password;
        data["isAdminLogin"] = this.isAdminLogin;
        return data;
    };
    return CheckLoginInfoCommand;
}());
exports.CheckLoginInfoCommand = CheckLoginInfoCommand;
var AuthorizationCheckCommand = /** @class */ (function () {
    function AuthorizationCheckCommand(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    AuthorizationCheckCommand.prototype.init = function (_data) {
        if (_data) {
            this.userUid = _data["userUid"];
            this.token = _data["token"];
        }
    };
    AuthorizationCheckCommand.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new AuthorizationCheckCommand();
        result.init(data);
        return result;
    };
    AuthorizationCheckCommand.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["userUid"] = this.userUid;
        data["token"] = this.token;
        return data;
    };
    return AuthorizationCheckCommand;
}());
exports.AuthorizationCheckCommand = AuthorizationCheckCommand;
var CreateNewTableCommand = /** @class */ (function () {
    function CreateNewTableCommand(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    CreateNewTableCommand.prototype.init = function (_data) {
        if (_data) {
            this.name = _data["name"];
            if (Array.isArray(_data["columns"])) {
                this.columns = [];
                for (var _i = 0, _a = _data["columns"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.columns.push(item);
                }
            }
        }
    };
    CreateNewTableCommand.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new CreateNewTableCommand();
        result.init(data);
        return result;
    };
    CreateNewTableCommand.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        if (Array.isArray(this.columns)) {
            data["columns"] = [];
            for (var _i = 0, _a = this.columns; _i < _a.length; _i++) {
                var item = _a[_i];
                data["columns"].push(item);
            }
        }
        return data;
    };
    return CreateNewTableCommand;
}());
exports.CreateNewTableCommand = CreateNewTableCommand;
var ReturnTableDTO = /** @class */ (function () {
    function ReturnTableDTO(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    ReturnTableDTO.prototype.init = function (_data) {
        if (_data) {
            this.name = _data["name"];
            if (Array.isArray(_data["entries"])) {
                this.entries = [];
                for (var _i = 0, _a = _data["entries"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.entries.push(EntryDTO.fromJS(item));
                }
            }
            if (Array.isArray(_data["colHeaders"])) {
                this.colHeaders = [];
                for (var _b = 0, _c = _data["colHeaders"]; _b < _c.length; _b++) {
                    var item = _c[_b];
                    this.colHeaders.push(item);
                }
            }
            if (Array.isArray(_data["colTypes"])) {
                this.colTypes = [];
                for (var _d = 0, _e = _data["colTypes"]; _d < _e.length; _d++) {
                    var item = _e[_d];
                    this.colTypes.push(item);
                }
            }
        }
    };
    ReturnTableDTO.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new ReturnTableDTO();
        result.init(data);
        return result;
    };
    ReturnTableDTO.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        if (Array.isArray(this.entries)) {
            data["entries"] = [];
            for (var _i = 0, _a = this.entries; _i < _a.length; _i++) {
                var item = _a[_i];
                data["entries"].push(item.toJSON());
            }
        }
        if (Array.isArray(this.colHeaders)) {
            data["colHeaders"] = [];
            for (var _b = 0, _c = this.colHeaders; _b < _c.length; _b++) {
                var item = _c[_b];
                data["colHeaders"].push(item);
            }
        }
        if (Array.isArray(this.colTypes)) {
            data["colTypes"] = [];
            for (var _d = 0, _e = this.colTypes; _d < _e.length; _d++) {
                var item = _e[_d];
                data["colTypes"].push(item);
            }
        }
        return data;
    };
    return ReturnTableDTO;
}());
exports.ReturnTableDTO = ReturnTableDTO;
var EntryDTO = /** @class */ (function () {
    function EntryDTO(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    EntryDTO.prototype.init = function (_data) {
        if (_data) {
            if (Array.isArray(_data["cols"])) {
                this.cols = [];
                for (var _i = 0, _a = _data["cols"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.cols.push(item);
                }
            }
        }
    };
    EntryDTO.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new EntryDTO();
        result.init(data);
        return result;
    };
    EntryDTO.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.cols)) {
            data["cols"] = [];
            for (var _i = 0, _a = this.cols; _i < _a.length; _i++) {
                var item = _a[_i];
                data["cols"].push(item);
            }
        }
        return data;
    };
    return EntryDTO;
}());
exports.EntryDTO = EntryDTO;
var GetTableDataByNameQuery = /** @class */ (function () {
    function GetTableDataByNameQuery(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    GetTableDataByNameQuery.prototype.init = function (_data) {
        if (_data) {
            this.name = _data["name"];
            this.numberOfRows = _data["numberOfRows"];
        }
    };
    GetTableDataByNameQuery.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new GetTableDataByNameQuery();
        result.init(data);
        return result;
    };
    GetTableDataByNameQuery.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["numberOfRows"] = this.numberOfRows;
        return data;
    };
    return GetTableDataByNameQuery;
}());
exports.GetTableDataByNameQuery = GetTableDataByNameQuery;
var DeleteTableCommand = /** @class */ (function () {
    function DeleteTableCommand(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    DeleteTableCommand.prototype.init = function (_data) {
        if (_data) {
            this.name = _data["name"];
        }
    };
    DeleteTableCommand.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new DeleteTableCommand();
        result.init(data);
        return result;
    };
    DeleteTableCommand.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        return data;
    };
    return DeleteTableCommand;
}());
exports.DeleteTableCommand = DeleteTableCommand;
var PaginatedListOfTodoItemDto = /** @class */ (function () {
    function PaginatedListOfTodoItemDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    PaginatedListOfTodoItemDto.prototype.init = function (_data) {
        if (_data) {
            if (Array.isArray(_data["items"])) {
                this.items = [];
                for (var _i = 0, _a = _data["items"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.items.push(TodoItemDto.fromJS(item));
                }
            }
            this.pageIndex = _data["pageIndex"];
            this.totalPages = _data["totalPages"];
            this.totalCount = _data["totalCount"];
            this.hasPreviousPage = _data["hasPreviousPage"];
            this.hasNextPage = _data["hasNextPage"];
        }
    };
    PaginatedListOfTodoItemDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new PaginatedListOfTodoItemDto();
        result.init(data);
        return result;
    };
    PaginatedListOfTodoItemDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
                var item = _a[_i];
                data["items"].push(item.toJSON());
            }
        }
        data["pageIndex"] = this.pageIndex;
        data["totalPages"] = this.totalPages;
        data["totalCount"] = this.totalCount;
        data["hasPreviousPage"] = this.hasPreviousPage;
        data["hasNextPage"] = this.hasNextPage;
        return data;
    };
    return PaginatedListOfTodoItemDto;
}());
exports.PaginatedListOfTodoItemDto = PaginatedListOfTodoItemDto;
var TodoItemDto = /** @class */ (function () {
    function TodoItemDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    TodoItemDto.prototype.init = function (_data) {
        if (_data) {
            this.id = _data["id"];
            this.listId = _data["listId"];
            this.title = _data["title"];
            this.done = _data["done"];
            this.priority = _data["priority"];
            this.note = _data["note"];
        }
    };
    TodoItemDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new TodoItemDto();
        result.init(data);
        return result;
    };
    TodoItemDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["listId"] = this.listId;
        data["title"] = this.title;
        data["done"] = this.done;
        data["priority"] = this.priority;
        data["note"] = this.note;
        return data;
    };
    return TodoItemDto;
}());
exports.TodoItemDto = TodoItemDto;
var CreateTodoItemCommand = /** @class */ (function () {
    function CreateTodoItemCommand(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    CreateTodoItemCommand.prototype.init = function (_data) {
        if (_data) {
            this.listId = _data["listId"];
            this.title = _data["title"];
        }
    };
    CreateTodoItemCommand.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new CreateTodoItemCommand();
        result.init(data);
        return result;
    };
    CreateTodoItemCommand.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["listId"] = this.listId;
        data["title"] = this.title;
        return data;
    };
    return CreateTodoItemCommand;
}());
exports.CreateTodoItemCommand = CreateTodoItemCommand;
var UpdateTodoItemCommand = /** @class */ (function () {
    function UpdateTodoItemCommand(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    UpdateTodoItemCommand.prototype.init = function (_data) {
        if (_data) {
            this.id = _data["id"];
            this.title = _data["title"];
            this.done = _data["done"];
        }
    };
    UpdateTodoItemCommand.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new UpdateTodoItemCommand();
        result.init(data);
        return result;
    };
    UpdateTodoItemCommand.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["title"] = this.title;
        data["done"] = this.done;
        return data;
    };
    return UpdateTodoItemCommand;
}());
exports.UpdateTodoItemCommand = UpdateTodoItemCommand;
var UpdateTodoItemDetailCommand = /** @class */ (function () {
    function UpdateTodoItemDetailCommand(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    UpdateTodoItemDetailCommand.prototype.init = function (_data) {
        if (_data) {
            this.id = _data["id"];
            this.listId = _data["listId"];
            this.priority = _data["priority"];
            this.note = _data["note"];
        }
    };
    UpdateTodoItemDetailCommand.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new UpdateTodoItemDetailCommand();
        result.init(data);
        return result;
    };
    UpdateTodoItemDetailCommand.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["listId"] = this.listId;
        data["priority"] = this.priority;
        data["note"] = this.note;
        return data;
    };
    return UpdateTodoItemDetailCommand;
}());
exports.UpdateTodoItemDetailCommand = UpdateTodoItemDetailCommand;
var PriorityLevel;
(function (PriorityLevel) {
    PriorityLevel[PriorityLevel["None"] = 0] = "None";
    PriorityLevel[PriorityLevel["Low"] = 1] = "Low";
    PriorityLevel[PriorityLevel["Medium"] = 2] = "Medium";
    PriorityLevel[PriorityLevel["High"] = 3] = "High";
})(PriorityLevel = exports.PriorityLevel || (exports.PriorityLevel = {}));
var TodosVm = /** @class */ (function () {
    function TodosVm(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    TodosVm.prototype.init = function (_data) {
        if (_data) {
            if (Array.isArray(_data["priorityLevels"])) {
                this.priorityLevels = [];
                for (var _i = 0, _a = _data["priorityLevels"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.priorityLevels.push(PriorityLevelDto.fromJS(item));
                }
            }
            if (Array.isArray(_data["lists"])) {
                this.lists = [];
                for (var _b = 0, _c = _data["lists"]; _b < _c.length; _b++) {
                    var item = _c[_b];
                    this.lists.push(TodoListDto.fromJS(item));
                }
            }
        }
    };
    TodosVm.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new TodosVm();
        result.init(data);
        return result;
    };
    TodosVm.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.priorityLevels)) {
            data["priorityLevels"] = [];
            for (var _i = 0, _a = this.priorityLevels; _i < _a.length; _i++) {
                var item = _a[_i];
                data["priorityLevels"].push(item.toJSON());
            }
        }
        if (Array.isArray(this.lists)) {
            data["lists"] = [];
            for (var _b = 0, _c = this.lists; _b < _c.length; _b++) {
                var item = _c[_b];
                data["lists"].push(item.toJSON());
            }
        }
        return data;
    };
    return TodosVm;
}());
exports.TodosVm = TodosVm;
var PriorityLevelDto = /** @class */ (function () {
    function PriorityLevelDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    PriorityLevelDto.prototype.init = function (_data) {
        if (_data) {
            this.value = _data["value"];
            this.name = _data["name"];
        }
    };
    PriorityLevelDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new PriorityLevelDto();
        result.init(data);
        return result;
    };
    PriorityLevelDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["value"] = this.value;
        data["name"] = this.name;
        return data;
    };
    return PriorityLevelDto;
}());
exports.PriorityLevelDto = PriorityLevelDto;
var TodoListDto = /** @class */ (function () {
    function TodoListDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    TodoListDto.prototype.init = function (_data) {
        if (_data) {
            this.id = _data["id"];
            this.title = _data["title"];
            this.colour = _data["colour"];
            if (Array.isArray(_data["items"])) {
                this.items = [];
                for (var _i = 0, _a = _data["items"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.items.push(TodoItemDto.fromJS(item));
                }
            }
        }
    };
    TodoListDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new TodoListDto();
        result.init(data);
        return result;
    };
    TodoListDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["title"] = this.title;
        data["colour"] = this.colour;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
                var item = _a[_i];
                data["items"].push(item.toJSON());
            }
        }
        return data;
    };
    return TodoListDto;
}());
exports.TodoListDto = TodoListDto;
var CreateTodoListCommand = /** @class */ (function () {
    function CreateTodoListCommand(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    CreateTodoListCommand.prototype.init = function (_data) {
        if (_data) {
            this.title = _data["title"];
        }
    };
    CreateTodoListCommand.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new CreateTodoListCommand();
        result.init(data);
        return result;
    };
    CreateTodoListCommand.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["title"] = this.title;
        return data;
    };
    return CreateTodoListCommand;
}());
exports.CreateTodoListCommand = CreateTodoListCommand;
var UpdateTodoListCommand = /** @class */ (function () {
    function UpdateTodoListCommand(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    UpdateTodoListCommand.prototype.init = function (_data) {
        if (_data) {
            this.id = _data["id"];
            this.title = _data["title"];
        }
    };
    UpdateTodoListCommand.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new UpdateTodoListCommand();
        result.init(data);
        return result;
    };
    UpdateTodoListCommand.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["title"] = this.title;
        return data;
    };
    return UpdateTodoListCommand;
}());
exports.UpdateTodoListCommand = UpdateTodoListCommand;
var WeatherForecast = /** @class */ (function () {
    function WeatherForecast(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    WeatherForecast.prototype.init = function (_data) {
        if (_data) {
            this.date = _data["date"] ? new Date(_data["date"].toString()) : undefined;
            this.temperatureC = _data["temperatureC"];
            this.temperatureF = _data["temperatureF"];
            this.summary = _data["summary"];
        }
    };
    WeatherForecast.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new WeatherForecast();
        result.init(data);
        return result;
    };
    WeatherForecast.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["date"] = this.date ? this.date.toISOString() : undefined;
        data["temperatureC"] = this.temperatureC;
        data["temperatureF"] = this.temperatureF;
        data["summary"] = this.summary;
        return data;
    };
    return WeatherForecast;
}());
exports.WeatherForecast = WeatherForecast;
var SwaggerException = /** @class */ (function (_super) {
    __extends(SwaggerException, _super);
    function SwaggerException(message, status, response, headers, result) {
        var _this = _super.call(this) || this;
        _this.isSwaggerException = true;
        _this.message = message;
        _this.status = status;
        _this.response = response;
        _this.headers = headers;
        _this.result = result;
        return _this;
    }
    SwaggerException.isSwaggerException = function (obj) {
        return obj.isSwaggerException === true;
    };
    return SwaggerException;
}(Error));
exports.SwaggerException = SwaggerException;
function throwException(message, status, response, headers, result) {
    if (result !== null && result !== undefined)
        return rxjs_1.throwError(result);
    else
        return rxjs_1.throwError(new SwaggerException(message, status, response, headers, null));
}
function blobToText(blob) {
    return new rxjs_1.Observable(function (observer) {
        if (!blob) {
            observer.next("");
            observer.complete();
        }
        else {
            var reader = new FileReader();
            reader.onload = function (event) {
                observer.next(event.target.result);
                observer.complete();
            };
            reader.readAsText(blob);
        }
    });
}
//# sourceMappingURL=web-api-client.js.map