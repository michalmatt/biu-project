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

  // tslint:disable-next-line:typedef
  public addNewStudent(labelText: HTMLInputElement, value: HTMLInputElement, index: HTMLInputElement)
  {
    this.students.push({
      name: labelText.value,
      surname: value.value,
      indexId: index.valueAsNumber
    });
  }

  ngOnInit(): void {
  }

}
