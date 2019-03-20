import { Component, OnInit } from '@angular/core';
import { UploadedFileModel } from 'src/app/models/uploadedFileModel/uploaded-file-model';

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
    if (localStorage.getItem('newProject') === 'true') {
      this.initNewProject();
    } else {
      this.initExistingProject();
    }
  }

  initNewProject(): void {
    // load configuration
    // get languages from config
    // import languages into table
  }

  initExistingProject(): void {
    // const filesList: UploadedFileModel =  as UploadedFileModel;
    console.log(JSON.parse('{"language":{"en":"English"},"wordsList":[{"hello":"Hello"},{"helloWorld":"Hello World"}]}'));
    // ignore configuration;
    // load languages files list from local storage
    // add languages to table header
    // iterate over files list
    // for each file, read all key value pairs
    // for each key value pair check if key exists
    // if key exists add value of that key to specific column
    // if key does not exist, create key and add value of that key to specific column
  }
}
