import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  public groupId: number;
  public groupName: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.groupId = this.route.snapshot.params.groupId;
    this.groupName = this.route.snapshot.params.groupName;
  }

}
