import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
}
