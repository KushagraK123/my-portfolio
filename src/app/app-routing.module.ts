import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ProjectDetailComponent } from './project/project-detail/project-detail.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'project-detail/:id', component: ProjectDetailComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
