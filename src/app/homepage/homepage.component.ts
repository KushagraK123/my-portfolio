import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../analytics/analytics.service';





@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private analyticsService: AnalyticsService) {
  }

  ngOnInit(): void {
    
  }

}
