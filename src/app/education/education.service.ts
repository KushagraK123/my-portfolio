import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Education, EducationNetwork, EducationToLocal, EducationToNetwork } from "./education.model";


@Injectable({ providedIn: "root" })
export class EducationService {
    //emits data
    private educationUpdated = new Subject<Education[]>();

    public getEducationUpdateListener() {
        return this.educationUpdated.asObservable();
    }

    constructor(private httpClient: HttpClient) {
    }

     getEducations() {
         this.httpClient.get< EducationNetwork[] >("http://localhost:3000/api/educations").pipe(
             map((educationData)=> {
                 return educationData.map( (it)=> 
                    EducationToLocal(it)
                 ).sort(
                    function (a, b) {
                        return a.sequence - b.sequence;
                    }
                 );
             })
         )
         .subscribe((educationData)=> {
            this.educations = educationData;
            this.educationUpdated.next([...this.educations]);
         });
    }
    
    updateEducation(education: Education) {
        let url = "http://localhost:3000/api/educations/"+education._id;
        this.httpClient.put< EducationNetwork >(url, EducationToNetwork(education)).pipe(
            map((education)=> {
                return EducationToLocal(education);
            })
        )
        .subscribe((education)=> {
            let e = this.educations.find(it=>
               it._id == education._id
           ); 
           e = education;
           this.educationUpdated.next([...this.educations]);
        });
   }

   deleteEducation(educationId: String) {
       let requestUrl = "http://localhost:3000/api/educations/"+educationId;
    this.httpClient.delete<Education>(requestUrl)
    .subscribe(()=> {
        this.educations = this.educations.filter( it=> 
            it._id != educationId
        );

       this.educationUpdated.next([...this.educations]);
    });
}

    educations: Education[] = [
    ];

     

      addEducation(education: Education) {    
          this.httpClient.post<{result:EducationNetwork, message: string}>("http://localhost:3000/api/educations", EducationToNetwork(education)).subscribe(
              (responseData)=> {
                  this.educations.push(EducationToLocal(responseData.result));
                  this.educationUpdated.next([...this.educations]);
              }
            );
      }
      
}