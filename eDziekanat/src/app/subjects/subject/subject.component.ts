import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  public subjectId: number;
  public subjectName: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subjectId = this.route.snapshot.params.subjectId;
    this.subjectName = this.route.snapshot.params.subjectName;
  }

}
