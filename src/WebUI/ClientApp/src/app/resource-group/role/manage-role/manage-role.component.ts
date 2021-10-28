import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { fromEvent, Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';
import {
  AccountsClient, GroupsClient, GroupDTO, AuthorizationCheckCommand
} from '../../../web-api-client';
import { MenuItem } from 'primeng/api';
import { faWindowClose, faPlusCircle, faChalkboard, faLayerGroup, faFileAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'manage-role',
  templateUrl: './manage-role.component.html',
  styleUrls: ['./manage-role.component.scss']
})

export class ManagRoleComponent implements OnInit {
  @Input() role: string;
  roleName = '';
  roleDescription = '';
  constructor(private _accountsClient: AccountsClient, private _router: Router, private _groupsClient: GroupsClient) { };

  ngOnInit() {
    if (this.role != 'new') {
      this.roleName = this.role;
      this.roleDescription = 'This is the ' + this.role + ' role.';
    }
  }

}
