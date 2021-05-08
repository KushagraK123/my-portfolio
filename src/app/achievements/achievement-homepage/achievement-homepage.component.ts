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

  private achievementSubscription: Subscription = new Subscription();
  achievements: Achievement[] = [];
  isLoading=true;




  constructor( private achievementService: AchievementService ) {
    this.achievementService.getAchievements();
    this.achievementSubscription = this.achievementService.getAchievementUpdateListener().subscribe(
      (achievements: Achievement[])=>{
        this.achievements = achievements;
        this.isLoading = false;
      }
    );
  }

  ngOnInit(): void {
  }

  getBooleanFromString(value: string): Boolean {
    return value == "true";
  }

}
