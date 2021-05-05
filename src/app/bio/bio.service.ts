import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Bio, BioNetwork, BioToLocal, BioToNetwork } from "./bio.model";


@Injectable({ providedIn: "root" })
export class BioService {
    //emits data
    private bioUpdated = new Subject<Bio>();

    public getBioUpdateListener() {
        return this.bioUpdated.asObservable();
    }

    constructor(private httpClient: HttpClient) {
    }

     getBio() {
         this.httpClient.get< BioNetwork >("http://localhost:3000/api/bio").pipe(
             map((bioData)=> {
                 return BioToLocal(bioData);
             })
         )
         .subscribe((bio)=> {
            this.bio = bio;
            this.bioUpdated.next(this.bio);
         });
    }
    
    updateBio(bio: Bio) {
        let url = "http://localhost:3000/api/bio/"+bio._id;
        this.httpClient.put<{ message: string, bio: BioNetwork }>(url, BioToNetwork(bio)).pipe(
            map((result)=> {
                return BioToLocal(result.bio);
            })
        )
        .subscribe((bio)=> {
        this.bio = bio
           this.bioUpdated.next(this.bio);
        });
   }

   

    bio: Bio = {
        _id: "", 
        name: "",
        linkedin: "",
        github: "",
        resume: "",
        aboutme: "", 
        hackerrank: "",
        email: ""
    };
      
}