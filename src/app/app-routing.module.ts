import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }      from './home/home.component';
import { ProjectsComponent }      from './projects/projects.component';
import { ExperimentsComponent }      from './experiments/experiments.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'Projects', redirectTo: '/projects', pathMatch: 'full' },
  { path: 'experiments', component: ExperimentsComponent },
  { path: 'Experiments', redirectTo: '/projects', pathMatch: 'full' }

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
