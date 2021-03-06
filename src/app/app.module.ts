import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { ProjectComponent } from './components/project/project.component';
import { ProjectPickerComponent } from './components/project-picker/project-picker.component';
import { ConfigureComponent } from './components/configure/configure.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SingleControlComponent } from './components/single-control/single-control.component';
import { FileDropModule } from 'ngx-file-drop';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ProjectPickerComponent,
    ConfigureComponent,
    SingleControlComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    FileDropModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
