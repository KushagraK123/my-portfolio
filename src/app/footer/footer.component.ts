import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentYear = 2021;
  name = "Kushagra Kasliwal";
  constructor() { 
    this.currentYear = new Date().getFullYear();
  }

  


  ngOnInit(): void {
  }

}
