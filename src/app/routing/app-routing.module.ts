import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from '../components/project/project.component';
import { ConfigureComponent } from '../components/configure/configure.component';
import { ProjectPickerComponent } from '../components/project-picker/project-picker.component';
import { AppInitGuard } from '../appInitGuard/app.initguard';

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent
    // canActivate: [AppInitGuard]
  },
  {
    path: 'configure',
    component: ConfigureComponent
  },
  {
    path: 'projectPicker',
    component: ProjectPickerComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
