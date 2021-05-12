import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Bio } from '../bio/bio.model';
import { BioService } from '../bio/bio.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

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
  
  currentYear = 2021;
  constructor(private bioService: BioService, private router: Router) { 
    this.currentYear = new Date().getFullYear();
  }

  

  ngOnInit(): void {
    this.bioService.getBio();
    this.bioSubscription = this.bioService.getBioUpdateListener().subscribe(
      (bio: Bio)=>{
        this.bio = bio;
      }
    );
  }

  smoothScroll = function(id: string) {
    var scrollContainer = document.getElementById(id)!!;
    scrollContainer.scrollIntoView({behavior:"smooth"});
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

}
