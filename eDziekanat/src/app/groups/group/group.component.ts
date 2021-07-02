import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GroupService} from '../../group.service';
import {Student} from '../../shared/student-data.model';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  public groupId: number;
  public groupName: string;
  public groupStudents: Student[];
  public student: Student;

  // tslint:disable-next-line:typedef
  addToGroup(student: Student) {
    this.groupService.addToGroup(student);
    this.groupStudents.push(student);
    window.alert('Student zostal dodany do grupy');
  }

  public createStudent(labelText: HTMLInputElement, value: HTMLInputElement, index: HTMLInputElement) {
    this.student = new Student(labelText.value, value.value, index.valueAsNumber);
    return this.student;
  }

  constructor(
    private route: ActivatedRoute,
    private groupService: GroupService,
  ) {
    this.groupStudents = [
      new Student('Terry', 'Black', 16323),
      new Student('John', 'White', 12823)
    ];
  }

  ngOnInit(): void {
    this.groupId = this.route.snapshot.params.groupId;
    this.groupName = this.route.snapshot.params.groupName;
  }

}
