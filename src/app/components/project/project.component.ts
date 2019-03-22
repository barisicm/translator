import { Component, OnInit } from '@angular/core';
import { UploadedFileModel } from 'src/app/models/uploadedFileModel/uploaded-file-model';
import { map } from 'rxjs/operators';

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
      { headerName: 'Key', field: 'key' }
    ];

    this.rowData = [
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
    const tempRowData = [];
    // load languages files list from local storage
    const filesList: UploadedFileModel[] = JSON.parse(localStorage.getItem('filesList')) as UploadedFileModel[];
    console.log(filesList[0].language.shortCode);

    // create an row object prototype
    const rowObj = { key: '' };
    filesList.forEach(file => {
      rowObj[file.language.shortCode] = '';
    });

    // add languages to table header
    filesList.forEach(file => {
      this.columnDefs.push({ headerName: file.language.languageName, field: file.language.shortCode});
    });

    filesList.forEach(file => {
      if (filesList.indexOf(file) === 0) {
        file.wordsList.forEach(word => {
          const rowObjInstance = Object.create(rowObj);
          rowObjInstance.key = word.key;
          rowObjInstance[file.language.shortCode] = word.value;
          tempRowData.push(rowObjInstance);
        });
      } else {
        // iterate over files list
        file.wordsList.forEach(word => {
          // for each file, read all key value pairs
          tempRowData.forEach(row => {
            // for each key value pair check if key exists
            if (row.key === word.key) {
              // if key exists add value of that key to specific column
              row[file.language.shortCode] = word.value;
            }
          });
        });
      }


    });

    // push row to table
    tempRowData.forEach(row => {
      this.rowData.push(row);
    });
  }
}
