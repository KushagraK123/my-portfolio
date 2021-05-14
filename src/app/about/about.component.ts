import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Bio } from '../bio/bio.model';
import { BioService } from '../bio/bio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  private bioSubscription: Subscription = new Subscription();
  constructor(private bioService: BioService) { }
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

  isLoading = true;

  ngOnInit(): void {
    this.bioService.getBio();
    this.bioSubscription = this.bioService.getBioUpdateListener().subscribe(
      (bio: Bio)=>{
        this.bio = bio;
        this.isLoading = false;
      }
    );
  }
}
