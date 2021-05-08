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
  private skillSubscription: Subscription = new Subscription();
  isLoading=true;

  
  constructor( private skillService: SkillService ) { }

  ngOnInit(): void {
    this.skillService.getSkills();
    this.skillSubscription = this.skillService.getSkillsUpdateListener().subscribe(
      (skills: Skill[])=>{
        this.skills = skills;
        this.isLoading=false;
      }
    );
  }
  
  getBooleanFromString(value: string) {
    return value == "true";
  }

}
