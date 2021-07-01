import { Component, Input, OnInit } from '@angular/core';
import { ContactData } from '../../shared/conatct-data.model';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {
  @Input() public contactData: ContactData;

  constructor() { }

  ngOnInit(): void {
  }

}
