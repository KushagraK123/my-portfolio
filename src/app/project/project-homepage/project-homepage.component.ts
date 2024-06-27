import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';


@Component({
  selector: 'app-project-homepage',
  templateUrl: './project-homepage.component.html',
  styleUrls: ['./project-homepage.component.scss']
})
export class ProjectHomepageComponent implements OnInit {

  allProjects: Project[] = [];
  projects: Project[] = [];
  showAll: boolean = false
  max: number = 2
  isLoading=true;
  hideButtonActive = false;



  constructor( private projectService: ProjectService ) { }

  ngOnInit(): void {
    this.allProjects = this.projectService.getProjects();
     
    this.allProjects = this.allProjects.filter(project=>
      project.isActive=="true"
    );
    this.projects = this.allProjects.slice(0,Math.min(this.max,this.allProjects.length));
    this.hideButtonActive = this.getActiveProjectsCount() > this.max;
      this.isLoading = false;
  }
    

  toggleViewMore() {
    this.showAll = !this.showAll
    if(this.showAll) {
      this.projects = this.allProjects;
    }else {
      this.projects = this.allProjects.slice(0,Math.min(this.max,this.allProjects.length));
    }
  }

  getBooleanFromString(value: string): Boolean {
    return value == "true";
  }

  getActiveProjectsCount(): number {
    let c=0;
    for(let project of this.allProjects) {
      if(this.getBooleanFromString(project.isActive)) {
        c++;
      }
    }
    return c;
  }

}
