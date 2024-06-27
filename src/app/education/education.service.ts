import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Education } from "./education.model";


@Injectable({ providedIn: "root" })
export class EducationService {

    educations: Education[] = [
        {
            _id: "string", 
            institute: "IIT, Chicago",
            description: "desc1",
            course: "1123",
            time: "string-string", 
            grade: "3.75/4",
            sequence: 1,
            isActive: "true"
        }
    ];

    constructor(private httpClient: HttpClient) {
    }

     getEducations(): Education[] {
        return this.educations
     }
}