import { Component, OnInit } from '@angular/core';
import { About} from '../models/about.model'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  about:About = {about: "Heloooxxxxoo"};

}
