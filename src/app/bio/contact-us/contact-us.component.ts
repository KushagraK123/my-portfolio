import { Component, OnInit } from '@angular/core';
import { Bio } from '../bio.model';
import { BioService } from '../bio.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {


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

  copyEmail() {
    const el = document.createElement('textarea');
    el.value = this.bio.email;
    document.body.appendChild(el);  
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

     var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x!!.className = "show";

   // After 3 seconds, remove the show class from DIV
   setTimeout(function(){ x!!.className = x!!.className.replace("show", ""); }, 1000);

}


  constructor(private bioService: BioService) { }

  ngOnInit(): void {
    this.bio = this.bioService.getBio();
  }

}
