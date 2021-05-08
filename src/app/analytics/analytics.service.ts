import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Analytics } from "./analytics.model";

@Injectable({ providedIn: "root" })
export class AnalyticsService {

    constructor(private httpClient: HttpClient) {
    }

     saveAnalytics(analytics: Analytics) {
         this.httpClient.post< Analytics[] >("http://localhost:3000/api/analytics", analytics)
         .subscribe((analyticsData)=> {
            console.log("Analytics Saved");
         });
    }
}