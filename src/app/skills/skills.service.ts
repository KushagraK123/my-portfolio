import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "../auth/auth.service";

import { Skill, SkillNetwork, skillToLocal, skillToNetwork } from "./skill.model";

@Injectable({ providedIn: "root" })
export class SkillService {

    private skills: Skill[] = [
        {
            _id: "1",
            "name": "Java", 
            "sequence": 1,
            "isActive":'true'
        },{
            _id: "3",
            "name": "MySQL", 
            "sequence": 2,
            "isActive":'true'
        },{
            _id: "2",
            "name": "Spring Boot", 
            "sequence": 2,
            "isActive":'true'
        },{
            _id: "4",
            "name": "Azure", 
            "sequence": 2,
            "isActive":'true'
        },{
            _id: "5",
            "name": "Design Patterns", 
            "sequence": 2,
            "isActive":'true'
        },{
            _id: "5",
            "name": "System Design", 
            "sequence": 2,
            "isActive":'true'
        },{
            _id: "6",
            "name": "Docker", 
            "sequence": 2,
            "isActive":'true'
        },{
            _id: "7",
            "name": "Android Development", 
            "sequence": 2,
            "isActive":'true'
        },{
            _id: "2",
            "name": "MySQL", 
            "sequence": 2,
            "isActive":'false'
        }
    ];
    

    constructor(private http: HttpClient, authService: AuthService) {
    }

     getSkills(): Skill[]{
        return this.skills
    }
    
}   