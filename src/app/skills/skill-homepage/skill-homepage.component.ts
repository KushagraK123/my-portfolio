import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Skill } from '../skill.model';
import { SkillService } from '../skills.service';

@Component({
  selector: 'app-skill-homepage',
  templateUrl: './skill-homepage.component.html',
  styleUrls: ['./skill-homepage.component.scss']
})
export class SkillHomepageComponent implements OnInit {
  
  skills: Skill[] = [];
  isLoading=false;

  
  constructor( private skillService: SkillService ) { }

  ngOnInit(): void {
    this.skills = this.skillService.getSkills();
  }
  
  getBooleanFromString(value: string) {
    return value == "true";
  }

}
