import { Component, OnInit } from '@angular/core';
import {Subject} from '../shared/subject-data.model';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  public subjects: Subject[];

  constructor() {
    this.subjects = [
      new Subject('Bogaty interfejs uzytkownika w aplikacjach webowych', 'BIU'),
      new Subject('Python', 'PTN'),
      new Subject('Systemy wbudowane', 'SWB'),
      new Subject('Statystyczna analiza danych 1', 'SAD1'),
      new Subject('Zarzadzanie projektem informatycznym', 'ZPR')
    ];
  }

  ngOnInit(): void {
  }

}
