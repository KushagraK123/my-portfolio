import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Experience } from '../experience.model';
import { ExperienceService } from '../experience.service';

@Component({
  selector: 'app-experience-homepage',
  templateUrl: './experience-homepage.component.html',
  styleUrls: ['./experience-homepage.component.scss']
})
export class ExperienceHomepageComponent implements OnInit {

  private experienceSubscription: Subscription = new Subscription();
  experiences: Experience[] = [];
  isLoading=true;



  constructor(private experienceService: ExperienceService) { }

  ngOnInit(): void {

    this.experienceService.getExperiences();
    this.experienceSubscription = this.experienceService.getExperienceUpdateListener().subscribe(
      (experiences: Experience[])=>{
        this.experiences = experiences;
        this.isLoading=false;
      }
    );
  }

  getBooleanFromString(value: string): Boolean {
    return value == "true";
  }

  getDesArray(description: string): string[] {
    let ans: string[] = [];
    ans = description.split('.');
    return ans;
  }

}
