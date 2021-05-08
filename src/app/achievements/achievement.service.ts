import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Achievement, AchievementNetwork, AchievementToLocal, AchievementToNetwork } from "./achievement.model";

@Injectable({ providedIn: "root" })
export class AchievementService {
    //emits data
    private achievementUpdated = new Subject<Achievement[]>();

    public getAchievementUpdateListener() {
        return this.achievementUpdated.asObservable();
    }

    constructor(private httpClient: HttpClient) {
    }

     getAchievements() {
         this.httpClient.get< AchievementNetwork[] >("http://localhost:3000/api/achievements").pipe(
             map((achievementData)=> {
                 return achievementData.map( (it)=> 
                    AchievementToLocal(it)
                 ).sort (
                    function (a, b) {
                        return a.sequence - b.sequence;
                    }
                 );
             })
         )
         .subscribe((achievementData)=> {
            this.achievements = achievementData;
            this.achievementUpdated.next([...this.achievements]);
         });
    }
    
    updateAchievement(achievement: Achievement) {
        let url = "http://localhost:3000/api/achievements/"+achievement._id;
        this.httpClient.put< AchievementNetwork >(url, AchievementToNetwork(achievement)).pipe(
            map((achievement)=> {
                return AchievementToLocal(achievement);
            })
        )
        .subscribe((achievement)=> {
            let a = this.achievements.find(it=>
               it._id == achievement._id
           ); 
           a = achievement;
           this.achievementUpdated.next([...this.achievements]);
        });
   }

   deleteAchievement(achievementId: String) {
       let requestUrl = "http://localhost:3000/api/achievements/"+achievementId;
    this.httpClient.delete<AchievementNetwork>(requestUrl)
    .subscribe(()=> {
        this.achievements = this.achievements.filter( it=> 
            it._id != achievementId
        );

       this.achievementUpdated.next([...this.achievements]);
    });
}

    achievements: Achievement[] = [
    ];

     

      addAchievement(achievement: Achievement) {    
          this.httpClient.post<{result:AchievementNetwork, message: string}>("http://localhost:3000/api/achievements", AchievementToNetwork(achievement)).subscribe(
              (responseData)=> {
                  this.achievements.push(AchievementToLocal(responseData.result));
                  this.achievementUpdated.next([...this.achievements]);
              }
            );
      }
      
}