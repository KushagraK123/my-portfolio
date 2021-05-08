import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { DeleteConfirmationDialogComponent } from 'src/app/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-admin',
  templateUrl: './project-admin.component.html',
  styleUrls: ['./project-admin.component.scss']
})
export class ProjectAdminComponent implements OnInit, OnDestroy {

  loading = false;
  downloadURL: Observable<string>;
  projects: Project[]=[];

  private projectSubscription: Subscription = new Subscription();

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar, private projectService: ProjectService, private storage: AngularFireStorage) {
    this.downloadURL = Observable.prototype;
   }

  ngOnInit(): void {
    this.projectService.getProjects();
    this.projectSubscription = this.projectService.getProjectUpdateListener().subscribe(
      (projects: Project[])=>{
        this.projects = projects;
      }
    );
  }


  updateProject(form: NgForm, project: Project) {
    if(form.invalid ) return;
    let title = form.controls['title'].value;
    let description = form.controls['description'].value;
    let projectLink = form.controls['projectLink'].value;
    let haskLink = form.controls['hasLink'].value;
    let seq = Number.parseInt(form.controls['sequence'].value);
    let isActive = form.controls['isActive'].value;
    let skills = form.controls['skills'].value;


    let mainImage = form.controls['newMainImage'].value == "" ? form.controls['mainImage'].value : form.controls['newMainImage'].value;
    let ss1 = form.controls['newss1'].value == "" ? form.controls['ss1'].value : form.controls['newss1'].value;
    let ss2 = form.controls['newss2'].value == "" ? form.controls['ss2'].value : form.controls['newss2'].value;
    let ss3 = form.controls['newss3'].value == "" ? form.controls['ss3'].value : form.controls['newss3'].value;
    let ss4 = form.controls['newss4'].value == "" ? form.controls['ss4'].value : form.controls['newss4'].value;
    let ss5 = form.controls['newss5'].value == "" ? form.controls['ss5'].value : form.controls['newss5'].value;



    let p: Project = {_id: project._id, title: title, skills: skills, description: description, projectLink: projectLink, 
    hasLink: haskLink, sequence: seq, isActive: isActive, mainImage: mainImage, ss1: ss1, ss2: ss2, ss3: ss3,
    ss4: ss4, ss5: ss5};
    this.projectService.updateProject(p);
    this._snackBar.open("Saved item successfully", "Hide");
  }

  addNewProject(form: NgForm) {
    if(form.invalid) return;

    let title = form.controls['title'].value;
    let description = form.controls['description'].value;
    let projectLink = form.controls['projectLink'].value;
    let haskLink = form.controls['hasLink'].value;
    let seq = Number.parseInt(form.controls['sequence'].value);
    let isActive = form.controls['isActive'].value;
    let skills = form.controls['skills'].value;

    let mainImage = form.controls['newMainImage'].value;
    let ss1 = form.controls['newss1'].value;
    let ss2 = form.controls['newss2'].value;
    let ss3 = form.controls['newss3'].value;
    let ss4 = form.controls['newss4'].value;
    let ss5 = form.controls['newss5'].value;


    let p: Project = {_id: "", title: title, skills: skills, description: description, projectLink: projectLink, 
    hasLink: haskLink, sequence: seq, isActive: isActive, mainImage: mainImage, ss1: ss1, ss2: ss2, ss3: ss3,
    ss4: ss4, ss5: ss5};
    
    this.projectService.addProject(p);
    form.resetForm();

  }

  deleteProject(id: String): void {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      width: '250px',
      data: id
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result)
      this.projectService.deleteProject(id);
    });
  }

  ngOnDestroy(): void {
   this.projectSubscription.unsubscribe();
  }


  onFileSelected(event: any, imageNumber: number, form: NgForm) {


    this.loading = true;
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `files/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`files/${n}`, file);

    task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = fileRef.getDownloadURL();
        this.downloadURL.subscribe(url => {
          if (url) {
            switch(imageNumber) {
              case 0:
                form.controls['newMainImage'].setValue(url);
                break;
                
              case 1:
                form.controls['newss1'].setValue(url);
                break;

              case 2:
                form.controls['newss2'].setValue(url);
                break;

              case 3:
                form.controls['newss3'].setValue(url);
                break;

              case 4:
                form.controls['newss4'].setValue(url);
                break;

              case 5:
                form.controls['newss5'].setValue(url);
                break;

                
            }
          }
          this.loading = false;
        });
      })
    ).subscribe(url => {

    });

  }

}
