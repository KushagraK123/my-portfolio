import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Project, ProjectNetwork, ProjectToLocal, ProjectToNetwork } from "./project.model";


@Injectable({ providedIn: "root" })
export class ProjectService {
    //emits data
    private projectUpdated = new Subject<Project[]>();

    public getProjectUpdateListener() {
        return this.projectUpdated.asObservable();
    }

    constructor(private httpClient: HttpClient) {
    }

     getProjects() {
         this.httpClient.get< ProjectNetwork[] >("http://localhost:3000/api/projects").pipe(
             map((projectData)=> {
                 return projectData.map( (it)=> 
                    ProjectToLocal(it)
                 );
             })
         )
         .subscribe((projectData)=> {
            this.projects = projectData;
            this.projectUpdated.next([...this.projects]);
         });
    }
    
    updateProject(project: Project) {
        let url = "http://localhost:3000/api/projects/" + project._id;
        this.httpClient.put< ProjectNetwork >(url, ProjectToNetwork(project)).pipe(
            map((project)=> {
                return ProjectToLocal(project);
            })
        )
        .subscribe((project)=> {
            let c = this.projects.find(it=>
               it._id == project._id
           ); 
           c = project;
           this.projectUpdated.next([...this.projects]);
        });
   }

   deleteProject(projectId: String) {
       let requestUrl = "http://localhost:3000/api/projects/"+projectId;
    this.httpClient.delete<ProjectNetwork>(requestUrl)
    .subscribe(()=> {
        this.projects = this.projects.filter( it=> 
            it._id != projectId
        );

       this.projectUpdated.next([...this.projects]);
    });
}

    projects: Project[] = [
    ];

     

      addProject(project: Project) {    
          this.httpClient.post<{result:ProjectNetwork, message: string}>("http://localhost:3000/api/projects", ProjectToNetwork(project)).subscribe(
              (responseData)=> {
                  this.projects.push(ProjectToLocal(responseData.result));
                  this.projectUpdated.next([...this.projects]);
              }
            );
      }
      
}