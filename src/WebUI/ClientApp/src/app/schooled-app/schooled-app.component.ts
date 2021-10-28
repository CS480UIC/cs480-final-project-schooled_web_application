import { Component, OnInit } from '@angular/core';
import { fromEvent, Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';
import {
  AccountsClient, GroupsClient, GetGroupsByTokenCommand, AuthorizationCheckCommand,
  GroupsDTO, GetAccountNameByTokenCommand, ClearAccountTokensByToken, GroupDTO
} from '../web-api-client';

@Component({
  selector: 'schooled-app-home',
  templateUrl: './schooled-app.component.html',
  styleUrls: ['./schooled-app.component.scss']
})

export class SchooledApplication implements OnInit {

  constructor(private _accountsClient: AccountsClient, private _router: Router, private _groupsClient: GroupsClient) { };

  resizeObservable$: Observable<Event>;
  resizeSubscription$: Subscription;
  max_books = 0;
  page_number = 0;
  account_username = "";
  current_number_of_books = 10;
  user_token = null;
  user_Uid = null;
  authCheckCommand = null;
  resourceGroups = null;
  addDialog = false;
  currentResourceGroup: GroupDTO = null;

  ngOnInit() {
    this.max_books = Math.floor(((window.innerWidth) / 154.3)) * 3 - 1;
    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe(evt => {
      this.max_books = Math.floor(((window.innerWidth) / 154.3)) * 3 - 1;
      this.page_number = 0;
    })

    var retrievedObject = localStorage.getItem('userData');

    if (retrievedObject == null) {
      this._router.navigateByUrl("");
    }
    else {
      this.user_Uid = JSON.parse(retrievedObject)['userUIN'];
      this.user_token = JSON.parse(retrievedObject)['token'];

      if (this.user_Uid == undefined || this.user_token == undefined || this.user_Uid == null || this.user_token == null) {
        this._router.navigateByUrl("");
        localStorage.removeItem('userData');
      }
      else {
        this.authCheckCommand = new AuthorizationCheckCommand({
          userUid: this.user_Uid,
          token: this.user_token,
          isAdminArea: false
        })

        this._accountsClient.authorized(this.authCheckCommand).subscribe(result => {
          if (result != 0) {
            localStorage.removeItem('userData');
            this._router.navigateByUrl("");
          } else {
            var userInfo = new GetAccountNameByTokenCommand({
              userUid: this.user_Uid,
              token: this.user_token
            })
            this._accountsClient.getUsername(userInfo).subscribe(result => this.account_username = result);
            var tokenInfo = new GetGroupsByTokenCommand({
              userUid: this.user_Uid,
              token: this.user_token
            })
            this._groupsClient.getGroupsByToken(tokenInfo).subscribe(result => {
              this.resourceGroups = result;
              console.log(this.resourceGroups);
            });
          }
        })
      }
    }
  }

  public counter(start: number, end: number) {
    var indexArray = [];
    var newEnd = 0;

    if (((end) / this.max_books) - (this.page_number) >= 1)
      newEnd = this.max_books;
    else
      newEnd = end % this.max_books

    for (let i = start; i < newEnd + start; i++) {
      indexArray.push(i);
    }
    return indexArray;
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

  setcurrentResourceGroup(index) {
    this.currentResourceGroup = this.resourceGroups.resourceGroups[index];
  }
}
