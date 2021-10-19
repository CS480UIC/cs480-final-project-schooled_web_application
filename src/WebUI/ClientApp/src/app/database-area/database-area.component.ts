import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountsClient, AuthorizationCheckCommand, ClearAccountTokensByToken, TablesClient, CreateNewTableCommand, GetTableDataByNameQuery, DeleteTableCommand } from '../web-api-client';

@Component({
  selector: 'app-database-area',
  templateUrl: './database-area.component.html',
  styleUrls: ['./database-area.component.scss']
})

export class DatabaseAreaComponent implements OnInit{
  pageState: string;
  numCols = 1;
  cols = [];
  colNames = null;
  currentTableName = null;
  colTypes = null;
  currentData = null;
  searchReady = false;
  notImplemented = true;
  loading = true;

  constructor(private _accountsClient: AccountsClient, private _tablesClient: TablesClient, private _router: Router) { }
  
  ngOnInit() {
    this.loading = true;
    this.searchReady = false;
    this.pageState = "view";

    var retrievedObject = localStorage.getItem('userData');

    if (retrievedObject == null) {
      this._router.navigateByUrl("");
    }
    else {
      var userUid = JSON.parse(retrievedObject)['userUIN'];
      var token = JSON.parse(retrievedObject)['token'];

      if (userUid == undefined || token == undefined || userUid == null || token == null) {
        this._router.navigateByUrl("");
        localStorage.removeItem('userData');
      }
      else {
        var authCheck = new AuthorizationCheckCommand({
          userUid: userUid,
          token: token,
          isAdminArea: true
        })

        this._accountsClient.authorized(authCheck).subscribe(result => {
          if (result != 0) {
            localStorage.removeItem('userData');
            this._router.navigateByUrl("");
          }
          this.loading = false;
        })
      }
    }
  }

  public logout() {
    var retrievedObject = localStorage.getItem('userData');
    var token = JSON.parse(retrievedObject)['token'];
    var logout = new ClearAccountTokensByToken({
      token: token
    })
    this._accountsClient.logout(logout).subscribe(result => {
      if (result != -1) {
        localStorage.removeItem('userData');
        this._router.navigateByUrl("");
      }
    })
  }

  public counter(i: number) {
    return new Array(i);
  }

  public createTable(tableName) {
    var createTable = new CreateNewTableCommand({
      name: tableName,
      columns: this.cols
    });

    this._tablesClient.createTable(createTable).subscribe(result => console.log(result));
  }

  public removeCol() {
    this.cols.pop();
    this.numCols--;
  }

  public viewTable(tableName, itemNumber) {
    var getTable = new GetTableDataByNameQuery({
      name: tableName,
      numberOfRows: itemNumber
    });

    this._tablesClient.getTableData(getTable).subscribe(result => {
      console.log(result);
      this.colNames = result.colHeaders;
      this.currentTableName = result.name;
      this.colTypes = result.colTypes;
      this.currentData = result.entries;
      this.searchReady = this.colNames != null;
    });
  }

  public deleteTable(tableName) {
    var deleteTable = new DeleteTableCommand({
      name: tableName
    });

    this._tablesClient.deleteTable(deleteTable).subscribe(result => console.log(result));
  }
}
