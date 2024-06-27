import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Bio, BioNetwork, BioToLocal, BioToNetwork } from "./bio.model";


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
        resume: "",
        aboutme: "Hello I am Kushagra", 
        hackerrank: "hackerrank.com",
        email: "kushagrakasliwal47@gmail.com"
    };
      
}