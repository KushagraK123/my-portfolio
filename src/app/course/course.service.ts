import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Course } from "./course.model";


@Injectable({ providedIn: "root" })
export class CourseService {

    private courses: Course[] = [{
        _id: "1", 
        title: "string",
        description: "Course 2",
        time: "TIme 1", 
        image: "string", 
        sequence: 1,
        isActive: "true"
    },{
        _id: "2", 
        title: "string2",
        description: "Course 3",
        time: "TIme 2", 
        image: "string", 
        sequence: 2,
        isActive: "true"
    } 
]

    constructor(private httpClient: HttpClient) {
    }

     getCourses(): Course[] {
         return this.courses
    }      
}