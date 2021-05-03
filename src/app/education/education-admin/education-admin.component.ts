import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { DeleteConfirmationDialogComponent } from 'src/app/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { Education } from '../education.model';
import { EducationService } from '../education.service';

@Component({
  selector: 'app-education-admin',
  templateUrl: './education-admin.component.html',
  styleUrls: ['./education-admin.component.scss']
})
export class EducationAdminComponent implements OnInit, OnDestroy {

  educations: Education[]=[];
  private educationSubscription: Subscription = new Subscription();

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar, private educationService: EducationService) {
   }

  ngOnInit(): void {
    this.educationService.getEducations();
    this.educationSubscription = this.educationService.getEducationUpdateListener().subscribe(
      (educations: Education[])=>{
        this.educations = educations;
      }
    );
  }


  updateEducation(form: NgForm, education: Education) {
    if(form.invalid ) return;
    let institute = form.controls['institute'].value;
    let course = form.controls['course'].value;
    let time = form.controls['time'].value;
    let grade = form.controls['grade'].value;
    let description = form.controls['description'].value;
    let isActive = form.controls['isActive'].value;
    let seq = Number.parseInt(form.controls['sequence'].value);
    
    let e: Education = {_id: education._id, institute: institute, course: course, description: description, 
    time: time, grade: grade ,sequence: seq, isActive: isActive};
    this.educationService.updateEducation(e);
    this._snackBar.open("Saved item successfully", "Hide");
  }
  addNewEducation(form: NgForm) {
    if(form.invalid) return;
    let institute = form.controls['institute'].value;
    let course = form.controls['course'].value;
    let time = form.controls['time'].value;
    let grade = form.controls['grade'].value;
    let description = form.controls['description'].value;
    let isActive = form.controls['isActive'].value;
    let seq = Number.parseInt(form.controls['sequence'].value);
    
    let e: Education = {_id: "", institute: institute, course: course, description: description, 
    time: time, grade: grade ,sequence: seq, isActive: isActive};
    this.educationService.addEducation(e);
    form.resetForm();

  }

  deleteEducation(id: String): void {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      width: '250px',
      data: id
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result)
      this.educationService.deleteEducation(id);
    });
  }

  ngOnDestroy(): void {
   this.educationSubscription.unsubscribe();
  }

}
