import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { Bio } from '../bio.model';
import { BioService } from '../bio.service';

@Component({
  selector: 'app-bio-admin',
  templateUrl: './bio-admin.component.html',
  styleUrls: ['./bio-admin.component.scss']
})
export class BioAdminComponent implements OnInit, OnDestroy {
  
  bio: Bio= {
    _id: "", 
    name: "",
    linkedin: "",
    github: "",
    aboutme: "", 
    hackerrank: "",
    email: ""
};
bioForm: FormGroup;


  private bioSubscription: Subscription = new Subscription();

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar, private bioService: BioService, private formBuilder: FormBuilder) {
    this.bioForm = this.formBuilder.group({
      linkedin: ['', Validators.required],
      name: ['', Validators.required],
      aboutme: ['', Validators.required],
      github: ['', Validators.required],
      hackerrank: ['', Validators.required],
      email: ['', Validators.required],
    });
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
  
    let b: Bio = {
      _id: this.bio._id, 
      name: name,
      linkedin: linkedin,
      github: github,
      aboutme: aboutme, 
      hackerrank: hackerrank,
      email: email
    };
    console.log("Updating " + JSON.stringify(b));
    this.bioService.updateBio(b);
    this._snackBar.open("Saved item successfully", "Hide");
  }

  ngOnDestroy(): void {
   this.bioSubscription.unsubscribe();
  }

}
