import { sequence } from "@angular/animations";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { AuthService } from "../auth/auth.service";

import { Skill, SkillNetwork, skillToLocal, skillToNetwork } from "./skill.model";

@Injectable({ providedIn: "root" })
export class SkillService {

    BACKEND_URL = environment.apiUrl + "/skills/";

    //emits data
    private skillsUpdated = new Subject<Skill[]>();

    //
    public getSkillsUpdateListener() {
        return this.skillsUpdated.asObservable();
    }

    constructor(private httpClient: HttpClient, authService: AuthService) {
    }

     getSkills() {
         this.httpClient.get< SkillNetwork[] >(this.BACKEND_URL).pipe(
             map((skillsData)=> {
                 console.log(skillsData);
                return skillsData.map((it)=>
                    skillToLocal(it)
                ).sort (
                    function (a, b) {
                        return a.sequence - b.sequence;
                    }
                 );
             })
         )
         .subscribe((skillData)=> {
            console.log(skillData);
            this.skills = skillData;
            this.skillsUpdated.next([...this.skills]);
         });
    }
    
    updateSkill(skill: Skill) {
        let url = this.BACKEND_URL + skill._id;
        this.httpClient.put< {message: String , skill: SkillNetwork} >(url, skill).pipe(
            map((skillData)=> {
                return skillData.skill;
            })
        )
        .subscribe((skill)=> {
            let s = this.skills.find(it=>
               it._id == skill._id
           ); 
           s = skillToLocal(skill);
           this.skillsUpdated.next([...this.skills]);
        });
   }

   deleteSkill(skillId: String) {
    let requestUrl = this.BACKEND_URL + skillId;
    this.httpClient.delete<Skill>(requestUrl)
    .subscribe(()=> {
        this.skills = this.skills.filter( it=> 
            it._id != skillId
        );

       this.skillsUpdated.next([...this.skills]);
    });
}

    skills: Skill[] = [
    ];

     

      addSkill(skill: Skill) {
          this.httpClient.post< {message: String, result: SkillNetwork} >(this.BACKEND_URL, skillToNetwork(skill))
          .subscribe(
              (responseData)=> {
                  let skill = skillToLocal( responseData.result);
                  this.skills.push(skill);
                  this.skillsUpdated.next([...this.skills]);
              }
            );
      }
      
}