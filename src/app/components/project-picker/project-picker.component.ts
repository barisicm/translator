import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfiguratorService } from 'src/app/services/configurator/configurator.service';
import { UploadEvent, UploadFile, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';


@Component({
  selector: 'app-project-picker',
  templateUrl: './project-picker.component.html',
  styleUrls: ['./project-picker.component.scss']
})
export class ProjectPickerComponent implements OnInit {

  public files: UploadFile[] = [];
  public filesList: any[];

  constructor(private configService: ConfiguratorService, private router: Router) {
  }

  ngOnInit() {
    this.filesList = [];
  }

  public dropped(event: UploadEvent) {

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
            this.filesList.push(removeNewlines);
            console.log(this.filesList);
          });
        });
      } else {
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public saveFilesListToLocalStorage(): void {
    let str = '';
    this.filesList.forEach(element => {
      // str = str + element + ',';
      str = str + element;
    });
    localStorage.setItem('filesList', JSON.stringify(str));
  }


  public initNewProject(): void {
    localStorage.setItem('newProject', 'true');
    this.router.navigate(['/', 'project']);
  }

  public initExistingProject(): void {
    this.saveFilesListToLocalStorage();
    localStorage.setItem('newProject', 'false');
    this.router.navigate(['/', 'project']);
  }
}
