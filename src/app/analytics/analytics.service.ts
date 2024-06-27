import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Analytics } from "./analytics.model";

@Injectable({ providedIn: "root" })
export class AnalyticsService {

    
    constructor(private httpClient: HttpClient) {
    }
}