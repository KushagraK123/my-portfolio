import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Project, ProjectNetwork, ProjectToLocal, ProjectToNetwork } from "./project.model";


@Injectable({ providedIn: "root" })
export class ProjectService {

    BACKEND_URL = environment.apiUrl + "/projects/";

    //emits data
    private projectUpdated = new Subject<Project[]>();

    public getProjectUpdateListener() {
        return this.projectUpdated.asObservable();
    }

    constructor(private httpClient: HttpClient) {
    }

     getProjects() {
         this.httpClient.get< ProjectNetwork[] >(this.BACKEND_URL).pipe(
             map((projectData)=> {
                 return projectData.map( (it)=> 
                    ProjectToLocal(it)
                 ).sort (
                    function (a, b) {
                        return a.sequence - b.sequence;
                    }
                 );
             })
         )
         .subscribe((projectData)=> {
            this.projects = projectData;
            this.projectUpdated.next([...this.projects]);
         });
    }
    
    updateProject(project: Project) {
        let url = this.BACKEND_URL + project._id;
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
       let requestUrl = this.BACKEND_URL + projectId;
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

    getProjectWithId(projectId: string) {
        let project = this.projects.find( it=> 
            it._id == projectId
        );
        return project;
    }

     

      addProject(project: Project) {    
          this.httpClient.post<{result:ProjectNetwork, message: string}>(this.BACKEND_URL, ProjectToNetwork(project)).subscribe(
              (responseData)=> {
                  this.projects.push(ProjectToLocal(responseData.result));
                  this.projectUpdated.next([...this.projects]);
              }
            );
      }
      
}