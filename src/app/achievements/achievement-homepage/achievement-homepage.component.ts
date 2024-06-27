import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Achievement } from '../achievement.model';
import { AchievementService } from '../achievement.service';

@Component({
  selector: 'app-achievement-homepage',
  templateUrl: './achievement-homepage.component.html',
  styleUrls: ['./achievement-homepage.component.scss']
})
export class AchievementHomepageComponent implements OnInit {

  achievements: Achievement[] = [];
  isLoading=true;




  constructor( private achievementService: AchievementService ) {
    this.achievements = this.achievementService.getAchievements();
    this.isLoading = false
  }

  ngOnInit(): void {
  }

  getBooleanFromString(value: string): Boolean {
    return value == "true";
  }

}
