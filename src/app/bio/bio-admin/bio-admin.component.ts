import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subscription } from 'rxjs';
import { Bio } from '../bio.model';
import { BioService } from '../bio.service';
import { map, finalize } from "rxjs/operators";

import { AngularFireStorage } from "@angular/fire/storage";


@Component({
  selector: 'app-bio-admin',
  templateUrl: './bio-admin.component.html',
  styleUrls: ['./bio-admin.component.scss']
})
export class BioAdminComponent implements OnInit, OnDestroy {

  loading=false;
  
  bio: Bio= {
    _id: "", 
    name: "",
    linkedin: "",
    github: "",
    resume: "",
    aboutme: "", 
    hackerrank: "",
    email: ""
};
bioForm: FormGroup;


  private bioSubscription: Subscription = new Subscription();

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar, private bioService: BioService, private formBuilder: FormBuilder, private storage: AngularFireStorage) {
    this.bioForm = this.formBuilder.group({
      linkedin: ['', Validators.required],
      name: ['', Validators.required],
      aboutme: ['', Validators.required],
      github: ['', Validators.required],
      hackerrank: ['', Validators.required],
      email: ['', Validators.required],
      resume: ['']
    });

    this.downloadURL = Observable.prototype;
    

  }

  ngOnInit(): void {
    this.bioService.getBio();
    this.bioSubscription = this.bioService.getBioUpdateListener().subscribe(
      (bio: Bio)=>{
        this.bio = bio;
        this.fillForm();
      }
    );
  }

  fillForm() {
    this.bioForm.patchValue(this.bio);
  }


  updateBio() {
    if(this.bioForm.invalid ) return;

    let name = this.bioForm.controls['name'].value;
    let linkedin = this.bioForm.controls['linkedin'].value;
    let github = this.bioForm.controls['github'].value;
    let aboutme = this.bioForm.controls['aboutme'].value; 
    let hackerrank = this.bioForm.controls['hackerrank'].value;
    let email = this.bioForm.controls['email'].value;
    let resume = (this.fb!="")? this.fb: this.bio.resume;  
  
    let b: Bio = {
      _id: this.bio._id, 
      name: name,
      linkedin: linkedin,
      github: github,
      resume: resume,
      aboutme: aboutme, 
      hackerrank: hackerrank,
      email: email
    };
    this.bioService.updateBio(b);
    this._snackBar.open("Saved item successfully", "Hide");
  }

  ngOnDestroy(): void {
   this.bioSubscription.unsubscribe();
  }


  downloadURL: Observable<string>;
  url=""
  checkUrl() {
    
  }

  //image upload
  fb: string = "";

  onFileSelected(event: any) {
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
            this.fb = url;
          }
          this.loading = false;
          console.log( " url  = "  + this.fb );
        });
      })
    ).subscribe(url => {

    });
  }

}
