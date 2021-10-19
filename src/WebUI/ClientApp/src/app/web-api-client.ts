/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.9.4.0 (NJsonSchema v10.3.1.0 (Newtonsoft.Json v12.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

export interface IAccountsClient {
    create(command: CreateAccountCommand): Observable<number>;
    login(command: CheckLoginInfoCommand): Observable<LoginTokenDto>;
    logout(command: ClearAccountTokensByToken): Observable<number>;
    authorized(command: AuthorizationCheckCommand): Observable<number>;
    getUsername(command: GetAccountNameByTokenCommand): Observable<string>;
}

@Injectable({
    providedIn: 'root'
})
export class AccountsClient implements IAccountsClient {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    create(command: CreateAccountCommand): Observable<number> {
        let url_ = this.baseUrl + "/api/Accounts";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(command);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processCreate(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processCreate(<any>response_);
                } catch (e) {
                    return <Observable<number>><any>_observableThrow(e);
                }
            } else
                return <Observable<number>><any>_observableThrow(response_);
        }));
    }

    protected processCreate(response: HttpResponseBase): Observable<number> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 !== undefined ? resultData200 : <any>null;
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<number>(<any>null);
    }

    login(command: CheckLoginInfoCommand): Observable<LoginTokenDto> {
        let url_ = this.baseUrl + "/api/Accounts/Login";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(command);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request("put", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processLogin(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processLogin(<any>response_);
                } catch (e) {
                    return <Observable<LoginTokenDto>><any>_observableThrow(e);
                }
            } else
                return <Observable<LoginTokenDto>><any>_observableThrow(response_);
        }));
    }

    protected processLogin(response: HttpResponseBase): Observable<LoginTokenDto> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = LoginTokenDto.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<LoginTokenDto>(<any>null);
    }

    logout(command: ClearAccountTokensByToken): Observable<number> {
        let url_ = this.baseUrl + "/api/Accounts/Logout";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(command);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request("put", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processLogout(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processLogout(<any>response_);
                } catch (e) {
                    return <Observable<number>><any>_observableThrow(e);
                }
            } else
                return <Observable<number>><any>_observableThrow(response_);
        }));
    }

    protected processLogout(response: HttpResponseBase): Observable<number> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 !== undefined ? resultData200 : <any>null;
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<number>(<any>null);
    }

    authorized(command: AuthorizationCheckCommand): Observable<number> {
        let url_ = this.baseUrl + "/api/Accounts/Authorized";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(command);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request("put", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processAuthorized(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processAuthorized(<any>response_);
                } catch (e) {
                    return <Observable<number>><any>_observableThrow(e);
                }
            } else
                return <Observable<number>><any>_observableThrow(response_);
        }));
    }

    protected processAuthorized(response: HttpResponseBase): Observable<number> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 !== undefined ? resultData200 : <any>null;
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<number>(<any>null);
    }

    getUsername(command: GetAccountNameByTokenCommand): Observable<string> {
        let url_ = this.baseUrl + "/api/Accounts/GetUsername";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(command);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request("put", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetUsername(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetUsername(<any>response_);
                } catch (e) {
                    return <Observable<string>><any>_observableThrow(e);
                }
            } else
                return <Observable<string>><any>_observableThrow(response_);
        }));
    }

    protected processGetUsername(response: HttpResponseBase): Observable<string> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 !== undefined ? resultData200 : <any>null;
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<string>(<any>null);
    }
}

export interface ITablesClient {
    createTable(command: CreateNewTableCommand): Observable<number>;
    getTableData(command: GetTableDataByNameQuery): Observable<ReturnTableDTO>;
    deleteTable(command: DeleteTableCommand): Observable<number>;
}

@Injectable({
    providedIn: 'root'
})
export class TablesClient implements ITablesClient {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    createTable(command: CreateNewTableCommand): Observable<number> {
        let url_ = this.baseUrl + "/api/Tables/CreateTable";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(command);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request("put", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processCreateTable(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processCreateTable(<any>response_);
                } catch (e) {
                    return <Observable<number>><any>_observableThrow(e);
                }
            } else
                return <Observable<number>><any>_observableThrow(response_);
        }));
    }

    protected processCreateTable(response: HttpResponseBase): Observable<number> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 !== undefined ? resultData200 : <any>null;
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<number>(<any>null);
    }

    getTableData(command: GetTableDataByNameQuery): Observable<ReturnTableDTO> {
        let url_ = this.baseUrl + "/api/Tables/GetTableData";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(command);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request("put", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetTableData(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetTableData(<any>response_);
                } catch (e) {
                    return <Observable<ReturnTableDTO>><any>_observableThrow(e);
                }
            } else
                return <Observable<ReturnTableDTO>><any>_observableThrow(response_);
        }));
    }

    protected processGetTableData(response: HttpResponseBase): Observable<ReturnTableDTO> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ReturnTableDTO.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<ReturnTableDTO>(<any>null);
    }

    deleteTable(command: DeleteTableCommand): Observable<number> {
        let url_ = this.baseUrl + "/api/Tables/DeleteTable";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(command);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request("put", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processDeleteTable(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processDeleteTable(<any>response_);
                } catch (e) {
                    return <Observable<number>><any>_observableThrow(e);
                }
            } else
                return <Observable<number>><any>_observableThrow(response_);
        }));
    }

    protected processDeleteTable(response: HttpResponseBase): Observable<number> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 !== undefined ? resultData200 : <any>null;
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<number>(<any>null);
    }
}

export class CreateAccountCommand implements ICreateAccountCommand {
    username?: string | undefined;
    password?: string | undefined;
    phoneNumber?: string | undefined;
    email?: string | undefined;
    token?: string | undefined;

    constructor(data?: ICreateAccountCommand) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.username = _data["username"];
            this.password = _data["password"];
            this.phoneNumber = _data["phoneNumber"];
            this.email = _data["email"];
            this.token = _data["token"];
        }
    }

    static fromJS(data: any): CreateAccountCommand {
        data = typeof data === 'object' ? data : {};
        let result = new CreateAccountCommand();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["username"] = this.username;
        data["password"] = this.password;
        data["phoneNumber"] = this.phoneNumber;
        data["email"] = this.email;
        data["token"] = this.token;
        return data; 
    }
}

export interface ICreateAccountCommand {
    username?: string | undefined;
    password?: string | undefined;
    phoneNumber?: string | undefined;
    email?: string | undefined;
    token?: string | undefined;
}

export class LoginTokenDto implements ILoginTokenDto {
    userUIN?: string | undefined;
    token?: string | undefined;

    constructor(data?: ILoginTokenDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.userUIN = _data["userUIN"];
            this.token = _data["token"];
        }
    }

    static fromJS(data: any): LoginTokenDto {
        data = typeof data === 'object' ? data : {};
        let result = new LoginTokenDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["userUIN"] = this.userUIN;
        data["token"] = this.token;
        return data; 
    }
}

export interface ILoginTokenDto {
    userUIN?: string | undefined;
    token?: string | undefined;
}

export class CheckLoginInfoCommand implements ICheckLoginInfoCommand {
    username?: string | undefined;
    password?: string | undefined;
    isAdminLogin?: boolean;

    constructor(data?: ICheckLoginInfoCommand) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.username = _data["username"];
            this.password = _data["password"];
            this.isAdminLogin = _data["isAdminLogin"];
        }
    }

    static fromJS(data: any): CheckLoginInfoCommand {
        data = typeof data === 'object' ? data : {};
        let result = new CheckLoginInfoCommand();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["username"] = this.username;
        data["password"] = this.password;
        data["isAdminLogin"] = this.isAdminLogin;
        return data; 
    }
}

export interface ICheckLoginInfoCommand {
    username?: string | undefined;
    password?: string | undefined;
    isAdminLogin?: boolean;
}

export class ClearAccountTokensByToken implements IClearAccountTokensByToken {
    token?: string | undefined;

    constructor(data?: IClearAccountTokensByToken) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.token = _data["token"];
        }
    }

    static fromJS(data: any): ClearAccountTokensByToken {
        data = typeof data === 'object' ? data : {};
        let result = new ClearAccountTokensByToken();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["token"] = this.token;
        return data; 
    }
}

export interface IClearAccountTokensByToken {
    token?: string | undefined;
}

export class AuthorizationCheckCommand implements IAuthorizationCheckCommand {
    userUid?: string | undefined;
    token?: string | undefined;
    isAdminArea?: boolean;

    constructor(data?: IAuthorizationCheckCommand) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.userUid = _data["userUid"];
            this.token = _data["token"];
            this.isAdminArea = _data["isAdminArea"];
        }
    }

    static fromJS(data: any): AuthorizationCheckCommand {
        data = typeof data === 'object' ? data : {};
        let result = new AuthorizationCheckCommand();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["userUid"] = this.userUid;
        data["token"] = this.token;
        data["isAdminArea"] = this.isAdminArea;
        return data; 
    }
}

export interface IAuthorizationCheckCommand {
    userUid?: string | undefined;
    token?: string | undefined;
    isAdminArea?: boolean;
}

export class GetAccountNameByTokenCommand implements IGetAccountNameByTokenCommand {
    userUid?: string | undefined;
    token?: string | undefined;

    constructor(data?: IGetAccountNameByTokenCommand) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.userUid = _data["userUid"];
            this.token = _data["token"];
        }
    }

    static fromJS(data: any): GetAccountNameByTokenCommand {
        data = typeof data === 'object' ? data : {};
        let result = new GetAccountNameByTokenCommand();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["userUid"] = this.userUid;
        data["token"] = this.token;
        return data; 
    }
}

export interface IGetAccountNameByTokenCommand {
    userUid?: string | undefined;
    token?: string | undefined;
}

export class CreateNewTableCommand implements ICreateNewTableCommand {
    name?: string | undefined;
    columns?: string[] | undefined;

    constructor(data?: ICreateNewTableCommand) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.name = _data["name"];
            if (Array.isArray(_data["columns"])) {
                this.columns = [] as any;
                for (let item of _data["columns"])
                    this.columns!.push(item);
            }
        }
    }

    static fromJS(data: any): CreateNewTableCommand {
        data = typeof data === 'object' ? data : {};
        let result = new CreateNewTableCommand();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        if (Array.isArray(this.columns)) {
            data["columns"] = [];
            for (let item of this.columns)
                data["columns"].push(item);
        }
        return data; 
    }
}

export interface ICreateNewTableCommand {
    name?: string | undefined;
    columns?: string[] | undefined;
}

export class ReturnTableDTO implements IReturnTableDTO {
    name?: string | undefined;
    entries?: EntryDTO[] | undefined;
    colHeaders?: string[] | undefined;
    colTypes?: string[] | undefined;

    constructor(data?: IReturnTableDTO) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.name = _data["name"];
            if (Array.isArray(_data["entries"])) {
                this.entries = [] as any;
                for (let item of _data["entries"])
                    this.entries!.push(EntryDTO.fromJS(item));
            }
            if (Array.isArray(_data["colHeaders"])) {
                this.colHeaders = [] as any;
                for (let item of _data["colHeaders"])
                    this.colHeaders!.push(item);
            }
            if (Array.isArray(_data["colTypes"])) {
                this.colTypes = [] as any;
                for (let item of _data["colTypes"])
                    this.colTypes!.push(item);
            }
        }
    }

    static fromJS(data: any): ReturnTableDTO {
        data = typeof data === 'object' ? data : {};
        let result = new ReturnTableDTO();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        if (Array.isArray(this.entries)) {
            data["entries"] = [];
            for (let item of this.entries)
                data["entries"].push(item.toJSON());
        }
        if (Array.isArray(this.colHeaders)) {
            data["colHeaders"] = [];
            for (let item of this.colHeaders)
                data["colHeaders"].push(item);
        }
        if (Array.isArray(this.colTypes)) {
            data["colTypes"] = [];
            for (let item of this.colTypes)
                data["colTypes"].push(item);
        }
        return data; 
    }
}

export interface IReturnTableDTO {
    name?: string | undefined;
    entries?: EntryDTO[] | undefined;
    colHeaders?: string[] | undefined;
    colTypes?: string[] | undefined;
}

export class EntryDTO implements IEntryDTO {
    cols?: string[] | undefined;

    constructor(data?: IEntryDTO) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            if (Array.isArray(_data["cols"])) {
                this.cols = [] as any;
                for (let item of _data["cols"])
                    this.cols!.push(item);
            }
        }
    }

    static fromJS(data: any): EntryDTO {
        data = typeof data === 'object' ? data : {};
        let result = new EntryDTO();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.cols)) {
            data["cols"] = [];
            for (let item of this.cols)
                data["cols"].push(item);
        }
        return data; 
    }
}

export interface IEntryDTO {
    cols?: string[] | undefined;
}

export class GetTableDataByNameQuery implements IGetTableDataByNameQuery {
    name?: string | undefined;
    numberOfRows?: number;

    constructor(data?: IGetTableDataByNameQuery) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.name = _data["name"];
            this.numberOfRows = _data["numberOfRows"];
        }
    }

    static fromJS(data: any): GetTableDataByNameQuery {
        data = typeof data === 'object' ? data : {};
        let result = new GetTableDataByNameQuery();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["numberOfRows"] = this.numberOfRows;
        return data; 
    }
}

export interface IGetTableDataByNameQuery {
    name?: string | undefined;
    numberOfRows?: number;
}

export class DeleteTableCommand implements IDeleteTableCommand {
    name?: string | undefined;

    constructor(data?: IDeleteTableCommand) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.name = _data["name"];
        }
    }

    static fromJS(data: any): DeleteTableCommand {
        data = typeof data === 'object' ? data : {};
        let result = new DeleteTableCommand();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        return data; 
    }
}

export interface IDeleteTableCommand {
    name?: string | undefined;
}

export class SwaggerException extends Error {
    message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isSwaggerException = true;

    static isSwaggerException(obj: any): obj is SwaggerException {
        return obj.isSwaggerException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    if (result !== null && result !== undefined)
        return _observableThrow(result);
    else
        return _observableThrow(new SwaggerException(message, status, response, headers, null));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        } else {
            let reader = new FileReader();
            reader.onload = event => {
                observer.next((<any>event.target).result);
                observer.complete();
            };
            reader.readAsText(blob);
        }
    });
}