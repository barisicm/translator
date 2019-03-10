import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {



  private columnDefs;
  private rowData;
  private defaultColDef;

  constructor() {
    this.columnDefs = [
      { headerName: 'Key', field: 'key', sortable: true, filter: true },
      { headerName: 'Hrvatski', field: 'hr', sortable: true, filter: true },
      { headerName: 'Engleski', field: 'en', sortable: true, filter: true}
    ];

    this.rowData = [
      { key: 'helloWorld', hr: 'Pozdrav svijete', en: 'Hello World' },
      { key: 'car', hr: 'Automobil', en: 'Car' },
      { key: 'weapon', hr: 'Oružje', en: 'Weapon' }
    ];

    this.defaultColDef = {
      editable: true,
      resizable: true
    };
  }


  ngOnInit() {
  }
}
