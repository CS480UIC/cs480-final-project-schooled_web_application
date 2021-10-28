import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { fromEvent, Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';
import {
  AccountsClient, GroupsClient, GroupDTO, AuthorizationCheckCommand
} from '../web-api-client';
import { MenuItem } from 'primeng/api';
import { faWindowClose, faPlusCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'resource-group',
  templateUrl: './resource-group.component.html',
  styleUrls: ['./resource-group.component.scss']
})

export class ResourceGroupComponent implements OnInit {
  @Input() resourceGroup: GroupDTO;
  @Output() eventUpdate = new EventEmitter<GroupDTO>();

  closeIcon = faWindowClose;
  addIcon = faPlusCircle;
  groupTab = 'resoureTab';
  isAdmin: boolean = false;
  selectedCategory: any = null;
  groupName = null;
  groupDescription = null;
  items: MenuItem[];
  categories: any[] = [{ name: 'Public', key: 0 }, { name: 'Private Invite Only', key: 1 }, { name: 'Private Password Protected', key: 2 }];

  constructor(private _accountsClient: AccountsClient, private _router: Router, private _groupsClient: GroupsClient) { };

  ngOnInit() {
    this.items = [
      {
        label: 'Members', icon: 'pi pi-refresh', command: () => {
          console.log('Members');
        }
      },
      { separator: true },
      {
        label: 'Permission', icon: 'pi pi-times', command: () => {
          console.log('Permission');
        }
      }
    ];
    this.selectedCategory = this.categories[0];
    this.groupName = this.resourceGroup.name;
    this.groupDescription = this.resourceGroup.description;

    console.log(this.resourceGroup);
    var retrievedObject = localStorage.getItem('userData');

    if (retrievedObject == null) {
      this._router.navigateByUrl("");
    }
    else {
      var user_Uid = JSON.parse(retrievedObject)['userUIN'];
      var user_token = JSON.parse(retrievedObject)['token'];

      if (user_Uid == undefined || user_token == undefined || user_Uid == null || user_token == null) {
        this._router.navigateByUrl("");
        localStorage.removeItem('userData');
      }
      else {
        var authCheckCommand = new AuthorizationCheckCommand({
          userUid: user_Uid,
          token: user_token,
          isAdminArea: true
        });

        this._accountsClient.authorized(authCheckCommand).subscribe(result => {
          if (result == 0) {
            this.isAdmin = true;
          }
        })
      }
    }
  }

  close() {
    this.eventUpdate.emit(null);
  }
}
