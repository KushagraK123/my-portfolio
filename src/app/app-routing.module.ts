import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProjectDetailComponent } from './project/project-detail/project-detail.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: '', component: HomepageComponent },
  { path: 'project-detail/:id', component: ProjectDetailComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
