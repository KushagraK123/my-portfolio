import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Achievement } from "./achievement.model";

@Injectable({ providedIn: "root" })
export class AchievementService {

    
    private achievements: Achievement[] = [{
        _id: "1", 
        title: "Tata Consultancy Services, On the Spot Award",
        description: "Appreciation Certificate for successful development and release of Contingency System for processing pension payments",
        time: "21 Oct 2022", 
        sequence: 1,
        hasImage: true,
        imageUrl: "assets/acheivements/Appreciation_Certificate.pdf",
        isActive: "true"
    },{
        _id: "2", 
        title: "Tata Consultancy Services, On the Spot Award",
        description: "On the spot Award for successful release of document archiving system",
        time: "20 Apr 2022", 
        sequence: 2,
        imageUrl: "assets/acheivements/20apr2022.pdf",
        hasImage: true,
        isActive: "true"
    },{
        _id: "3", 
        title: "'Code is less’ programming competition",
        description: "Secured 2nd prize in ‘Code is less’ programming competition held by Pragyaa (A national level Technical Fiesta).",
        time: "20 February 2019", 
        sequence: 3,
        hasImage: true,
        imageUrl: "",
        isActive: "false"
    },
    {
        _id: "4", 
        title: "'Code is less’ programming competition",
        description: "Secured 2nd prize in ‘Code is less’ programming competition held by Pragyaa (A national level Technical Fiesta).",
        time: "27 February 2019", 
        sequence: 4,
        imageUrl: "",
        hasImage: false,
        isActive: "true"
    }, {
        _id: "5", 
        title: "‘C Brain’ programming competition",
        description: "Secured 3rd prize in ‘C Brain’ programming competition held by Pragyaa (A national level Technical Fiesta).",
        time: "17 March 2018", 
        sequence: 5,
        imageUrl: "",
        hasImage: false,
        isActive: "true"
    }]

    constructor(private httpClient: HttpClient) {
    }

     getAchievements():Achievement[] {
         return this.achievements;
    }     
}