import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Education, EducationNetwork, EducationToLocal, EducationToNetwork } from "./education.model";


@Injectable({ providedIn: "root" })
export class EducationService {
    BACKEND_URL = environment.apiUrl + "/educations/";

    //emits data
    private educationUpdated = new Subject<Education[]>();

    public getEducationUpdateListener() {
        return this.educationUpdated.asObservable();
    }

    constructor(private httpClient: HttpClient) {
    }

     getEducations() {
         this.httpClient.get< EducationNetwork[] >(this.BACKEND_URL).pipe(
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
        let url = this.BACKEND_URL + education._id;
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
       let requestUrl = this.BACKEND_URL + educationId;
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
          this.httpClient.post<{result:EducationNetwork, message: string}>(this.BACKEND_URL, EducationToNetwork(education)).subscribe(
              (responseData)=> {
                  this.educations.push(EducationToLocal(responseData.result));
                  this.educationUpdated.next([...this.educations]);
              }
            );
      }
      
}