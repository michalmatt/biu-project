import { Component, OnInit } from '@angular/core';
import { ContactData } from '../shared/conatct-data.model';

// tslint:disable-next-line:class-name
class contactData {
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contactData: contactData[];

  constructor() {
    this.contactData = [
      new ContactData('E-mail:', 'eDziekanat@biu-project.com'),
      new ContactData( 'Telefon:', '123-456-789')
    ];
  }

  ngOnInit(): void {
  }

}
