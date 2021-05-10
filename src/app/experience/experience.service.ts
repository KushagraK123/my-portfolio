import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Experience, ExperienceNetwork, ExperienceToLocal, ExperienceToNetwork } from "./experience.model";

@Injectable({ providedIn: "root" })
export class ExperienceService {

    BACKEND_URL = environment.apiUrl + "/experiences/";

    experiences: Experience[] = [
    ];

    //emits data
    private experienceUpdated = new Subject<Experience[]>();

    public getExperienceUpdateListener() {
        return this.experienceUpdated.asObservable();
    }

    constructor(private httpClient: HttpClient) {
    }

     getExperiences() {
         this.httpClient.get< ExperienceNetwork[] >(this.BACKEND_URL).pipe(
             map((experienceData)=> {
                 return experienceData.map( (it)=> 
                    ExperienceToLocal(it)
                 ).sort (
                    function (a, b) {
                        return a.sequence - b.sequence;
                    }
                 )
             })
         )
         .subscribe((experienceData)=> {
            this.experiences = experienceData;
            this.experienceUpdated.next([...this.experiences]);
         });
    }
    
    updateExperience(experience: Experience) {
        let url = this.BACKEND_URL + experience._id;
        this.httpClient.put< ExperienceNetwork >(url, ExperienceToNetwork(experience)).pipe(
            map((experience)=> {
                return ExperienceToLocal(experience);
            })
        )
        .subscribe((experience)=> {
            let e = this.experiences.find(it=>
               it._id == experience._id
           ); 
           e = experience;
           this.experienceUpdated.next([...this.experiences]);
        });
   }

   deleteExperience(experienceId: String) {
       let requestUrl = this.BACKEND_URL + experienceId;
    this.httpClient.delete<ExperienceNetwork>(requestUrl)
    .subscribe(()=> {
        this.experiences = this.experiences.filter( it=> 
            it._id != experienceId
        );
       this.experienceUpdated.next([...this.experiences]);
    });
}

      addExperience(experience: Experience) {    
          this.httpClient.post<{result:ExperienceNetwork, message: string}>(this.BACKEND_URL, ExperienceToNetwork(experience)).subscribe(
              (responseData)=> {
                  this.experiences.push(ExperienceToLocal(responseData.result));
                  this.experienceUpdated.next([...this.experiences]);
              }
            );
      }
      
}