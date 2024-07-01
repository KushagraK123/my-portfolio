import { Component, OnInit } from '@angular/core';
import { Experience } from '../experience.model';
import { ExperienceService } from '../experience.service';

@Component({
  selector: 'app-experience-homepage',
  templateUrl: './experience-homepage.component.html',
  styleUrls: ['./experience-homepage.component.scss']
})
export class ExperienceHomepageComponent implements OnInit {

  experiences: Experience[] = [];
  isLoading=true;



  constructor(private experienceService: ExperienceService) { }

  ngOnInit(): void {

    this.experiences = this.experienceService.getExperiences();
    this.isLoading=false;
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
