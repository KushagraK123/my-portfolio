import { Component, OnInit } from '@angular/core';
import { Bio } from '../bio/bio.model';
import { BioService } from '../bio/bio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private bioService: BioService) { }
  bio: Bio= {
    _id: "", 
    name: "",
    linkedin: "",
    github: "",
    resume: "",
    aboutme: "", 
    hackerrank: "",
    email: ""
  };

  isLoading = true;

  ngOnInit(): void {
    this.bio = this.bioService.getBio();
    this.isLoading = false
  }
}
