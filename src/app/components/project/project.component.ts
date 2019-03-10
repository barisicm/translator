import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private rowData;
  private defaultColDef;

  private gridOptions;

  constructor() {
    this.columnDefs = [
      { headerName: 'Key', field: 'key' },
      { headerName: 'Hrvatski', field: 'hr' },
      { headerName: 'Engleski', field: 'en' }
    ];

    this.rowData = [
      { key: 'helloWorld', hr: 'Pozdrav svijete', en: 'Hello World' },
      { key: 'car', hr: 'Automobil', en: 'Car' },
      { key: 'weapon', hr: 'Oružje', en: 'Weapon' }
    ];

    this.defaultColDef = {
      editable: true,
      resizable: true,
      sortable: true,
      filter: true
    };

    this.gridOptions = {
      columnDefs: this.columnDefs,
      rowData: this.rowData,
      onCellEditingStopped: (event) => {
        console.log(event);
      },
      defaultColDef: this.defaultColDef
    };
  }

  callbackFunction() {
    console.log('function activated');
  }

  ngOnInit() {
  }
}
