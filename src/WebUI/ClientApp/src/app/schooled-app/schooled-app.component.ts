import { Component, OnInit } from '@angular/core';
import { fromEvent, Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AccountsClient, AuthorizationCheckCommand, GetAccountNameByTokenCommand, ClearAccountTokensByToken } from '../web-api-client';

@Component({
  selector: 'schooled-app-home',
  templateUrl: './schooled-app.component.html',
  styleUrls: ['./schooled-app.component.scss']
})

export class SchooledApplication implements OnInit {

  constructor(private _accountsClient: AccountsClient, private _router: Router) { };

  resizeObservable$: Observable<Event>;
  resizeSubscription$: Subscription;
  max_books = 0;
  page_number = 0;
  account_username = "";
  current_number_of_books = 10;

  ngOnInit() {
    this.max_books = Math.floor(((window.innerWidth) / 154.3)) * 3 - 1;
    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe(evt => {
      this.max_books = Math.floor(((window.innerWidth) / 154.3)) * 3 - 1;
    })

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
          isAdminArea: false
        })

        this._accountsClient.authorized(authCheck).subscribe(result => {
          if (result != 0) {
            localStorage.removeItem('userData');
            this._router.navigateByUrl("");
          } else {
            var userInfo = new GetAccountNameByTokenCommand({
              userUid: userUid,
              token: token
            })
            this._accountsClient.getUsername(userInfo).subscribe(result => this.account_username = result);
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

}
