import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Education } from '../education/education.model';
import { EducationService } from '../education/education.service';

@Component({
  selector: 'app-education-homepage',
  templateUrl: './education-homepage.component.html',
  styleUrls: ['./education-homepage.component.scss']
})
export class EducationHomepageComponent implements OnInit {

  private educationSubscription: Subscription = new Subscription();
  educations: Education[] = [];
  isLoading=true;




  constructor( private educationService: EducationService ) { }

  ngOnInit(): void {
    this.educationService.getEducations();
    this.educationSubscription = this.educationService.getEducationUpdateListener().subscribe(
      (educations: Education[])=>{
        this.educations = educations;
        this.isLoading=false;
      }
    );
  }

  getBooleanFromString(value: string): Boolean {
    return value == "true";
  }

}
