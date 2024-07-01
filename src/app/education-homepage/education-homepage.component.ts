import { Component, OnInit } from '@angular/core';
import { Education } from '../education/education.model';
import { EducationService } from '../education/education.service';

@Component({
  selector: 'app-education-homepage',
  templateUrl: './education-homepage.component.html',
  styleUrls: ['./education-homepage.component.scss']
})
export class EducationHomepageComponent implements OnInit {

  educations: Education[] = [];
  isLoading=true;
  constructor( private educationService: EducationService ) { }

  ngOnInit(): void {
    this.educations = this.educationService.getEducations();
    this.isLoading = false;
  }

  getBooleanFromString(value: string): Boolean {
    return value == "true";
  }
}
