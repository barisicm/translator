import { Component, OnInit } from '@angular/core';
import { ConfiguratorService } from 'src/app/services/configurator/configurator.service';
import { UploadEvent, UploadFile, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';


@Component({
  selector: 'app-project-picker',
  templateUrl: './project-picker.component.html',
  styleUrls: ['./project-picker.component.scss']
})
export class ProjectPickerComponent implements OnInit {

  public files: UploadFile[] = [];

  constructor(private configService: ConfiguratorService) {
  }

  ngOnInit() {
  }

  public dropped(event: UploadEvent) {
    const filesList: any[] = [];
    this.files = event.files;
    for (const droppedFile of event.files) {

      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          const reader = new FileReader();
          reader.readAsText(file, 'UTF-8');
          reader.addEventListener('loadend', () => {
            const result = reader.result;
            const removeNewlines = result.toString().replace(/(\r\n|\n|\r)/gm, '');
            filesList.push(removeNewlines);

          });
        });
      } else {
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
    this.saveFilesListToLocalStorage(filesList);
  }

  public saveFilesListToLocalStorage(data): void {
    let str;
    data.forEach(element => {
      str = str + element + ',';
    });
    localStorage.setItem('filesList', str);
  }



  public initNewProject(): void {
    console.log('init NEw');
  }

  public initExistingProject(): void {
    console.log('init existing');
  }
}
