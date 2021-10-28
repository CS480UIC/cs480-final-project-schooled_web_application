import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { fromEvent, Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';
import {
  AccountsClient, GroupsClient, GroupDTO, AuthorizationCheckCommand
} from '../../web-api-client';
import { MenuItem } from 'primeng/api';
import { faWindowClose, faPlusCircle, faChalkboard, faLayerGroup, faFileAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})

export class ResourceComponent implements OnInit {
  @Input() resource: string;
  selectedCategory = null;
  resourceName = '';
  categories: any[] = [{ name: 'Flash Card Deck', key: 0 }, { name: 'Quiz', key: 1 }, { name: 'Whiteboard', key: 2 }];

  constructor(private _accountsClient: AccountsClient, private _router: Router, private _groupsClient: GroupsClient) { };

  ngOnInit() {
    this.selectedCategory = 0;
    if (this.resource != 'new') {
      this.resourceName = this.resource;
    }

  }

}
