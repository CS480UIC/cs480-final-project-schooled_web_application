import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { fromEvent, Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';
import {
  AccountsClient, CreateRoleCommand, DeleteRoleByIdCommand, UpdateRoleCommand, GroupRoleDTO, RolesClient
} from '../../../web-api-client';
import { MenuItem } from 'primeng/api';
import { faWindowClose, faPlusCircle, faChalkboard, faLayerGroup, faFileAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'manage-role',
  templateUrl: './manage-role.component.html',
  styleUrls: ['./manage-role.component.scss']
})

export class ManagRoleComponent implements OnInit {
  @Input() role: GroupRoleDTO;
  @Input() groupId: string;
  @Output() onClose = new EventEmitter<boolean>();

  roleName = '';
  roleDescription = '';
  constructor(private _accountsClient: AccountsClient, private _router: Router, private _roleClient: RolesClient) { };

  ngOnInit() {
    if (this.role != null) {
      this.roleName = this.role.name;
      this.roleDescription = this.role.description;
    }
  }

  creatRole() {
    var createCommand = new CreateRoleCommand({
      name: this.roleName,
      description: this.roleDescription,
      groupId: this.groupId
    })
    this._roleClient.create(createCommand).subscribe(result => this.onClose.emit(true));
  }

  updateRole() {
    var updateCommand = new UpdateRoleCommand({
      roleId: this.role.id,
      description: this.roleDescription,
      name: this.roleName
    })
    this._roleClient.updateRole(updateCommand).subscribe(result => this.onClose.emit(true));
  }

  RemoveRole() {
    var removeCommand = new DeleteRoleByIdCommand({
      roleId: this.role.id
    })
    this._roleClient.deleteRole(removeCommand).subscribe(result => {
      console.log(result);
      this.onClose.emit(true);
    });
    
  }
}
