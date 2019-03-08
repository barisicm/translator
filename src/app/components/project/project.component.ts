import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor() { }

  columnDefs = [
    { headerName: 'Key', field: 'key' },
    { headerName: 'Hrvatski', field: 'hr' },
    { headerName: 'Engleski', field: 'en'}
  ];

  rowData = [
    { key: 'helloWorld', hr: 'Pozdrav svijete', en: 'Hello World' },
    { key: 'car', hr: 'Automobil', en: 'Car' },
    { key: 'weapon', hr: 'Oružje', en: 'Weapon' }
  ];

  ngOnInit() {
  }

}
