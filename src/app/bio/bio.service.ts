import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Bio } from "./bio.model";


@Injectable({ providedIn: "root" })
export class BioService {

    constructor(private httpClient: HttpClient) {
    }

     getBio(): Bio {
         return this.bio
    }

    bio: Bio = {
        _id: "", 
        name: "Kushagra Kasliwal",
        linkedin: "https://www.linkedin.com/in/kushagra-kasliwal-a5b188158/",
        github: "github.com",
        resume: "assets/KushagraResume.pdf",
        aboutme: "Experienced software engineer with 4.5 years in Java backend development, MicroServices, Angular & Android Development with Strong in data structures, algorithms, and scalable application design.", 
        hackerrank: "hackerrank.com",
        email: "kushagrakasliwal47@gmail.com"
    };
      
}