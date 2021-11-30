import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { fromEvent, Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';
import {
  AccountsClient, GroupsClient, CreateGroupCommand, AuthorizationCheckCommand
} from '../../../web-api-client';

@Component({
  selector: 'resource-group-create',
  templateUrl: './resource-group-create.component.html',
  styleUrls: ['./resource-group-create.component.scss']
})

export class ResourceGroupCreateComponent implements OnInit {

  constructor(private _accountsClient: AccountsClient, private _router: Router, private _groupsClient: GroupsClient) { };

  @Output() createNew = new EventEmitter<any>();

  user_token = null;
  user_Uid = null;
  authCheckCommand = null;
  selectedCategory: any = null;
  groupName = null;
  groupDescription = null;
  password = null;
  categories: any[] = [{ name: 'Public', key: 0 }, { name: 'Private Invite Only', key: 1 }, { name: 'Private Password Protected', key: 2 }];

  ngOnInit() {
    this.selectedCategory = this.categories[0];
  }

  createNewGroup() {
    var retrievedObject = localStorage.getItem('userData');
    var user_Uid = JSON.parse(retrievedObject)['userUIN'];
    var user_token = JSON.parse(retrievedObject)['token'];

    var newGroup = new CreateGroupCommand({
      name: this.groupName,
      description: this.groupDescription,
      password: this.password,
      privacyType: this.selectedCategory.key,
      
    })

    var userInfo = new AuthorizationCheckCommand({
      userUid: user_Uid,
      token: user_token,
      isAdminArea: false
    })

    this._accountsClient.authorized(userInfo).subscribe(isAuthorized => {
      if (isAuthorized == 0)
        this._groupsClient.create(user_token, newGroup).subscribe(result => {
          this.createNewResouce();
        });
      else {
        this._router.navigateByUrl("");
        localStorage.removeItem('userData');
      }
    })
   
  }

  createNewResouce() {
    this.createNew.emit();
  }
}
