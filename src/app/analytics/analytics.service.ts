import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Analytics } from "./analytics.model";

@Injectable({ providedIn: "root" })
export class AnalyticsService {

    BACKEND_URL = environment.apiUrl + "/analytics/";
    
    constructor(private httpClient: HttpClient) {
    }

     saveAnalytics(analytics: Analytics) {
         this.httpClient.post< Analytics[] >(this.BACKEND_URL, analytics)
         .subscribe((analyticsData)=> {
            console.log("Analytics Saved");
         });
    }
}