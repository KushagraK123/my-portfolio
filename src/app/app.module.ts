import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { LoginComponent } from './auth/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AdminComponent } from './admin/admin.component';
import { SkillsAdminComponent } from './skills/skills-admin/skills-admin.component';
import { DeleteConfirmationDialogComponent } from './delete-confirmation-dialog/delete-confirmation-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EducationAdminComponent } from './education/education-admin/education-admin.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { BioAdminComponent } from './bio/bio-admin/bio-admin.component';
import { ContactUsComponent } from './bio/contact-us/contact-us.component';

import { AdminAchievementComponent } from './achievements/admin-achievement/admin-achievement.component';
import { ExperienceAdminComponent } from './experience/experience-admin/experience-admin.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { environment } from 'src/environments/environment';
import { CourseAdminComponent } from './course/course-admin/course-admin.component';
import { ProjectAdminComponent } from './project/project-admin/project-admin.component';
import { ExperienceHomepageComponent } from './experience/experience-homepage/experience-homepage.component';
import { EducationHomepageComponent } from './education-homepage/education-homepage.component';
import { ProjectHomepageComponent } from './project/project-homepage/project-homepage.component';
import { AchievementHomepageComponent } from './achievements/achievement-homepage/achievement-homepage.component';
import { CourseHomepageComponent } from './course/course-homepage/course-homepage.component';
import { SkillHomepageComponent } from './skills/skill-homepage/skill-homepage.component';
import { ProjectDetailComponent } from './project/project-detail/project-detail.component';
import { FooterComponent } from './footer/footer.component';
import { LoaderComponent } from './loader/loader.component';
import { LeadHomepageComponent } from './lead/lead-homepage/lead-homepage.component';
import { ErrorInterceptor } from './errors/error-interceptor';
import { LoaderWhiteComponent } from './loader-white/loader-white.component';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    AboutComponent,
    ExperienceComponent,
    LoginComponent,
    AdminComponent,
    SkillsAdminComponent,
    DeleteConfirmationDialogComponent,
    EducationAdminComponent,
    BioAdminComponent,
    AdminAchievementComponent,
    ExperienceAdminComponent,
    CourseAdminComponent,
    ProjectAdminComponent,
    ExperienceHomepageComponent,
    EducationHomepageComponent,
    ProjectHomepageComponent,
    AchievementHomepageComponent,
    CourseHomepageComponent,
    SkillHomepageComponent,
    ContactUsComponent,
    ProjectDetailComponent,
    FooterComponent,
    LoaderComponent,
    LeadHomepageComponent,
    LoaderWhiteComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud"),
    AngularFireStorageModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatBadgeModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
