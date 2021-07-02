import { Injectable } from '@angular/core';
import {Student} from './shared/student-data.model';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  group: Student[] = [];

  addToGroup(student: Student) {
    this.group.push(student);
  }

  getGroup() {
    return this.group;
  }

  clearGroup() {
    this.group = [];
    return this.group;
  }

  constructor() { }
}
