import { Component, OnInit } from '@angular/core';
import {Group} from '../shared/group-data.model';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  public groups: Group[];

  constructor() {
    this.groups = [
      new Group('Grupa A', 1),
      new Group('Grupa B', 2),
      new Group('Grupa C', 3),
      new Group('Grupa D', 4),
      new Group('Grupa E', 5),
      new Group('Grupa F', 6),
      new Group('Grupa G', 7)
    ];
  }

  ngOnInit(): void {
  }

}
