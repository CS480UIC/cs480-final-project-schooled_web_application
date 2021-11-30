import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { fromEvent, Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';
import {
  AccountsClient, GroupsClient, GroupDTO, AuthorizationCheckCommand, UpdateGroupCommand, DeleteGroupCommand, RolesClient, GroupRolesDTO, GetGroupRolesByGroupIdCommand, GroupRoleDTO
} from '../web-api-client';
import { MenuItem } from 'primeng/api';
import { faWindowClose, faPlusCircle, faChalkboard, faLayerGroup, faFileAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'resource-group',
  templateUrl: './resource-group.component.html',
  styleUrls: ['./resource-group.component.scss']
})

export class ResourceGroupComponent implements OnInit {
  @Input() resourceGroup: GroupDTO;
  @Output() eventUpdate = new EventEmitter<any>();

  closeIcon = faWindowClose;
  addIcon = faPlusCircle;
  resourceTypes = [faChalkboard, faLayerGroup, faFileAlt];
  groupTab = 'resoureTab';
  editTab = 'generalTab';
  currentRole: GroupRoleDTO = null;
  openRoleEditArea: boolean = false;
  currentResource = null;
  isAdmin: boolean = false;
  selectedCategory: any = null;
  groupName = null;
  groupDescription = null;
  items: MenuItem[];
  groupRoles: GroupRolesDTO = null;
  categories: any[] = [{ name: 'Public', key: 0 }, { name: 'Private Invite Only', key: 1 }, { name: 'Private Password Protected', key: 2 }];

  constructor(private _accountsClient: AccountsClient, private _router: Router, private _groupsClient: GroupsClient, private _rolesClient: RolesClient) { };

  ngOnInit() {
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

        var getRolesCommand = new GetGroupRolesByGroupIdCommand({
          groupId: this.resourceGroup.id
        })

        this._rolesClient.getGroupsByGroupId(getRolesCommand).subscribe(result => {
          console.log(result);
          this.groupRoles = result;
        });
      }
    }
  }

  close() {
    this.eventUpdate.emit(null);
  }

  saveResourceGroup() {
    let updateCommand = new UpdateGroupCommand({
      name: this.groupName,
      description: this.groupDescription,
      id: this.resourceGroup.id,
      password: null,
      privacyType: this.selectedCategory.key
    });

    this._groupsClient.updateGroup(updateCommand).subscribe();

    this.eventUpdate.emit(null);
  }

  deleteResourceGroup() {
    let deleteCommand = new DeleteGroupCommand({
      id: this.resourceGroup.id
    });

    this._groupsClient.deleteGroup(deleteCommand).subscribe(result => this.eventUpdate.emit(null));
  }

  onCloseRoleEdit(event) {
    this.openRoleEditArea = !event;

    var getRolesCommand = new GetGroupRolesByGroupIdCommand({
      groupId: this.resourceGroup.id
    })
    this._rolesClient.getGroupsByGroupId(getRolesCommand).subscribe(result => {
      console.log(result);
      this.groupRoles = result;
    });
  }

  openRoleEdit(role) {
    this.currentRole = role;
    this.openRoleEditArea = true;
  }
}
