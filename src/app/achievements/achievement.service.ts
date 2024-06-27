import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Achievement, AchievementNetwork, AchievementToLocal, AchievementToNetwork } from "./achievement.model";

@Injectable({ providedIn: "root" })
export class AchievementService {

    
    private achievements: Achievement[] = [{
        _id: "1", 
        title: "string",
        description: "Course 2",
        time: "TIme 1", 
        sequence: 1,
        isActive: "true"
    },{
        _id: "2", 
        title: "string2",
        description: "Course 3",
        time: "TIme 2", 
        sequence: 2,
        isActive: "true"
    }]

    constructor(private httpClient: HttpClient) {
    }

     getAchievements():Achievement[] {
         return this.achievements;
    }     
}