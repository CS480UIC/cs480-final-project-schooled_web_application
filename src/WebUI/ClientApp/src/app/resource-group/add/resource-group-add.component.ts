import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { fromEvent, Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';
import {
  AccountsClient, GroupsClient, GetGroupsByTokenCommand, AuthorizationCheckCommand,
  GroupsDTO, GetAccountNameByTokenCommand, ClearAccountTokensByToken
} from '../../web-api-client';

import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'resource-group-add',
  templateUrl: './resource-group-add.component.html',
  styleUrls: ['./resource-group-add.component.scss']
})

export class ResourceGroupAddComponent implements OnInit {

  filmIcon = faWindowClose;
  currentTab = "create";
  @Output() closeWindow = new EventEmitter<boolean>();

  constructor(private _accountsClient: AccountsClient, private _router: Router, private _groupsClient: GroupsClient) { };

  user_token = null;
  user_Uid = null;
  authCheckCommand = null;
  
  ngOnInit() {

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
          }
        })
      }
    }
  };

  closeWindowEvent(value: boolean) {
    this.closeWindow.emit(value);
  }
}
