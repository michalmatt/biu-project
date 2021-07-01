import { Component, OnInit } from '@angular/core';
import {Student} from '../shared/student-data.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  public students: Student[];

  constructor() {
    this.students = [
      new Student('Jan', 'Kowalski', 17123),
      new Student('Tomasz', 'Malinowski', 19123)
    ];
  }

  ngOnInit(): void {
  }

}
