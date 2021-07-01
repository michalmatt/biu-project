import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ContactItemComponent } from './contact/contact-item/contact-item.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { StudentsComponent } from './students/students.component';
import { StudentComponent } from './students/student/student.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { SubjectComponent } from './subjects/subject/subject.component';
import { GroupsComponent } from './groups/groups.component';
import { GroupComponent } from './groups/group/group.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ContactItemComponent,
    ContactFormComponent,
    StudentsComponent,
    StudentComponent,
    SubjectsComponent,
    SubjectComponent,
    GroupsComponent,
    GroupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
