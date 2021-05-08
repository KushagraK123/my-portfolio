import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {


  ngOnInit(): void {
  }

  constructor(private route: ActivatedRoute, private projectService: ProjectService) { }

  projectId:string = this.route.snapshot.paramMap.get('id')!!;
  project = this.projectService.getProjectWithId(this.projectId)!!;

  checkSSAvailable(link: string) {
    return !(link=="");
  }

  getSkillsArray(skills: string): string[] {
    return skills.split(',');
  }

}
