import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subscription } from 'rxjs';
import { DeleteConfirmationDialogComponent } from 'src/app/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { Course } from '../course.model';
import { CourseService } from '../course.service';
import { finalize } from "rxjs/operators";


@Component({
  selector: 'app-course-admin',
  templateUrl: './course-admin.component.html',
  styleUrls: ['./course-admin.component.scss']
})
export class CourseAdminComponent implements OnInit, OnDestroy {

  loading = false;
  downloadURL: Observable<string>;
  courses: Course[]=[];

  private courseSubscription: Subscription = new Subscription();

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar, private courseService: CourseService, private storage: AngularFireStorage) {
    this.downloadURL = Observable.prototype;
   }

  ngOnInit(): void {
    this.courseService.getCourses();
    this.courseSubscription = this.courseService.getCourseUpdateListener().subscribe(
      (courses: Course[])=>{
        this.courses = courses;
      }
    );
  }


  updateCourse(form: NgForm, course: Course) {
    if(form.invalid ) return;
    let title = form.controls['title'].value;
    let time = form.controls['time'].value;
    let description = form.controls['description'].value;
    let isActive = form.controls['isActive'].value;
    let imageUrl = form.controls['newImage'].value == "" ? form.controls['image'].value : form.controls['newImage'].value;
    let seq = Number.parseInt(form.controls['sequence'].value);
    
    let c: Course = {_id: course._id, title: title, image: imageUrl, description: description, 
    time: time, sequence: seq, isActive: isActive};
    this.courseService.updateCourse(c);
    this._snackBar.open("Saved item successfully", "Hide");
  }

  addNewCourse(form: NgForm) {
    if(form.invalid) return;
    let title = form.controls['title'].value;
    let time = form.controls['time'].value;
    let description = form.controls['description'].value;
    let isActive = form.controls['isActive'].value;
    let imageUrl = form.controls['newImage'].value;
    let seq = Number.parseInt(form.controls['sequence'].value);
    
    let c: Course = {_id: "", title: title, description: description, 
    time: time, image: imageUrl ,sequence: seq, isActive: isActive};
    this.courseService.addCourse(c);
    form.resetForm();

  }

  deleteCourse(id: String): void {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      width: '250px',
      data: id
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result)
      this.courseService.deleteCourse(id);
    });
  }

  ngOnDestroy(): void {
   this.courseSubscription.unsubscribe();
  }


  onFileSelected(event: any, imageNumber: number, form: NgForm) {
    console.log("Image Number " + imageNumber);


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
            form.controls['newImage'].setValue(url);
          }
          this.loading = false;
        });
      })
    ).subscribe(url => {

    });

  }

}
