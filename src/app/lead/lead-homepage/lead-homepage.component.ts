import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Bio } from 'src/app/bio/bio.model';
import { BioService } from 'src/app/bio/bio.service';

@Component({
  selector: 'app-lead-homepage',
  templateUrl: './lead-homepage.component.html',
  styleUrls: ['./lead-homepage.component.scss']
})
export class LeadHomepageComponent implements OnInit {
  
  private bioSubscription: Subscription = new Subscription();

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
  constructor(private bioService: BioService) { }

  ngOnInit(): void {
    this.bioService.getBio();
    this.bioSubscription = this.bioService.getBioUpdateListener().subscribe(
      (bio: Bio)=>{
        this.bio = bio;
      }
    );
  }

}
