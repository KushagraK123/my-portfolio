import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  private projectSubscription: Subscription = new Subscription();
  projectId:string = this.route.snapshot.paramMap.get('id')!!;
  project = this.projectService.getProjectWithId(this.projectId)!!;
  isLoading=false;
  projects: Project[] = [];

  ngOnInit(): void {
  }

  constructor(private route: ActivatedRoute, private projectService: ProjectService) {  
    this.projectService.getProjects();
    if(this.project == null || this.project == undefined) {
      this.isLoading = true;
    }
    this.projectSubscription = this.projectService.getProjectUpdateListener().subscribe(
      (projects: Project[])=>{
        this.projects = projects;
        this.project = this.projects.find(it=>
          it._id == this.projectId
        )!!
        this.isLoading = false;
      }
    );

   }



  checkSSAvailable(link: string) {
    return !(link=="");
  }

  getSkillsArray(skills: string): string[] {
    return skills.split(',');
  }

}
