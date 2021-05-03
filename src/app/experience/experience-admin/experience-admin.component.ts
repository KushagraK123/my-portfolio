import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { DeleteConfirmationDialogComponent } from 'src/app/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { Experience } from '../experience.model';
import { ExperienceService } from '../experience.service';


@Component({
  selector: 'app-experience-admin',
  templateUrl: './experience-admin.component.html',
  styleUrls: ['./experience-admin.component.scss']
})
export class ExperienceAdminComponent implements OnInit, OnDestroy {

  experiences: Experience[]=[]; 
  private experienceSubscription: Subscription = new Subscription();

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar, private experienceService: ExperienceService) {
   }

  ngOnInit(): void {
    this.experienceService.getExperiences();
    this.experienceSubscription = this.experienceService.getExperienceUpdateListener().subscribe(
      (experiences: Experience[])=>{
        this.experiences = experiences;
      }
    );
  }


  updateExperience(form: NgForm, experience: Experience) {
    if(form.invalid ) return;
    let title = form.controls['title'].value;
    let time = form.controls['time'].value;
    let description = form.controls['description'].value;
    let company = form.controls['company'].value;
    let companyWebsite = form.controls['companyWebsite'].value;
    let isActive = form.controls['isActive'].value;
    let seq = Number.parseInt(form.controls['sequence'].value);
    
    let e: Experience = {_id: experience._id, title: title, company: company, companyWebsite: companyWebsite, 
      description: description, time: time, sequence: seq, isActive: isActive};
   
    this.experienceService.updateExperience(e);
    this._snackBar.open("Saved item successfully", "Hide");
  }
  addNewExperience(form: NgForm) {
    if(form.invalid) return;
    let title = form.controls['title'].value;
    let time = form.controls['time'].value;
    let description = form.controls['description'].value;
    let company = form.controls['company'].value;
    let companyWebsite = form.controls['companyWebsite'].value;
    let isActive = form.controls['isActive'].value;
    let seq = Number.parseInt(form.controls['sequence'].value);
    
    let e: Experience = {_id: "", title: title, company: company, companyWebsite: companyWebsite, 
      description: description, time: time, sequence: seq, isActive: isActive};
    
    this.experienceService.addExperience(e);
    form.resetForm();

  }

  deleteExperience(id: String): void {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      width: '250px',
      data: id
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result)
      this.experienceService.deleteExperience(id);
    });
  }

  ngOnDestroy(): void {
   this.experienceSubscription.unsubscribe();
  }

}
