import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { ProjectComponent } from './components/project/project.component';
import { ProjectPickerComponent } from './components/project-picker/project-picker.component';
import { ConfigureComponent } from './components/configure/configure.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SingleControlComponent } from './components/single-control/single-control.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ProjectPickerComponent,
    ConfigureComponent,
    NavbarComponent,
    SingleControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  exports: [
    NavbarComponent
  ],
  providers: [NavbarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
