import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Experience } from "./experience.model";

@Injectable({ providedIn: "root" })
export class ExperienceService {


    experiences: Experience[] = [{
        _id: "1", 
        title: "YoYO",
        description: "yoyoyoyo",
        time: "1March2023",
        company: "STraumann",
        companyWebsite: "aaa.bbb.com",
        sequence: 1,
        isActive: "true"
    }
    ];
  
    constructor(private httpClient: HttpClient) {
    }

     getExperiences(): Experience[] {
        return this.experiences;
    }  
}