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

  projectId:string = this.route.snapshot.paramMap.get('id')!!;
  project = this.projectService.getProjectWithId(this.projectId)!!;
  isLoading=false;
  projects: Project[] = [];

  ngOnInit(): void {
  }

  constructor(private route: ActivatedRoute, private projectService: ProjectService) {  
    this.projects = this.projectService.getProjects();
    this.isLoading = false;
 
    this.project = this.projects.find(it=>
        it._id == this.projectId
    )!!
  }

  checkSSAvailable(link: string) {
    return !(link=="");
  }

  getSkillsArray(skills: string): string[] {
    return skills.split(',');
  }

}
