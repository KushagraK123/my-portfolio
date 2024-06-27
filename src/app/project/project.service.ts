import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Project } from "./project.model";


@Injectable({ providedIn: "root" })
export class ProjectService {

    projects: Project[] = [{
        _id: "string", 
        title: "project 1",
        description: "desc 1",
        mainImage: "yoyoyoyoyo",
        projectLink: "abc.123.com",
        hasLink: "true",  
        ss1: "string",
        ss2: "string",
        ss3: "string",
        ss4: "string",
        ss5: "string", 
        skills: "1,2,3,4",
        sequence: 1,
        isActive: "true"
    }
    ];
    
    constructor(private httpClient: HttpClient) {
    }

     getProjects(): Project[] {
        return this.projects
     }

    getProjectWithId(projectId: string) {
        let project = this.projects.find( it=> 
            it._id == projectId
        );
        return project;
    }  
}