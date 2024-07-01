import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Education } from "./education.model";


@Injectable({ providedIn: "root" })
export class EducationService {

    educations: Education[] = [
        {
            _id: "1", 
            institute: "Illinois Institute of Technology, Chicago",
            description: "",
            icon: "assets/univ/illinois_tech.png",
            course: "Computer Science (M.A.S.)",
            time: "Aug 2024 - May 2026", 
            grade: "-",
            sequence: 1,
            isActive: "true"
        }, {
            _id: "2", 
            institute: "Shri Guru Gobind Singhji Institute of Engineering and Technology, Nanded, India",
            description: "",
            icon: "assets/univ/sggs.png",
            course: "Bachelor of Technology, Information Technology",
            time: "AUG 2016 - OCT 2020", 
            grade: "7.86/10 CGPA",
            sequence: 2,
            isActive: "true"
        }
    ];

    constructor(private httpClient: HttpClient) {
    }

     getEducations(): Education[] {
        return this.educations
     }
}