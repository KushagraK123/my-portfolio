import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Course, CourseNetwork, CourseToLocal, CourseToNetwork } from "./course.model";


@Injectable({ providedIn: "root" })
export class CourseService {

    BACKEND_URL = environment.apiUrl + "/courses/";


    //emits data
    private courseUpdated = new Subject<Course[]>();

    public getCourseUpdateListener() {
        return this.courseUpdated.asObservable();
    }

    constructor(private httpClient: HttpClient) {
    }

     getCourses() {
         this.httpClient.get< CourseNetwork[] >(this.BACKEND_URL).pipe(
             map((courseData)=> {
                 return courseData.map( (it)=> 
                    CourseToLocal(it)
                 ).sort (
                    function (a, b) {
                        return a.sequence - b.sequence;
                    }
                 );
             })
         )
         .subscribe((courseData)=> {
            this.courses = courseData;
            this.courseUpdated.next([...this.courses]);
         });
    }
    
    updateCourse(course: Course) {
        let url = this.BACKEND_URL + course._id;
        this.httpClient.put< CourseNetwork >(url, CourseToNetwork(course)).pipe(
            map((course)=> {
                return CourseToLocal(course);
            })
        )
        .subscribe((course)=> {
            let c = this.courses.find(it=>
               it._id == course._id
           ); 
           c = course;
           this.courseUpdated.next([...this.courses]);
        });
   }

   deleteCourse(courseId: String) {
       let requestUrl = this.BACKEND_URL + courseId;
    this.httpClient.delete<CourseNetwork>(requestUrl)
    .subscribe(()=> {
        this.courses = this.courses.filter( it=> 
            it._id != courseId
        );

       this.courseUpdated.next([...this.courses]);
    });
}

    courses: Course[] = [
    ];

     

      addCourse(course: Course) {    
          this.httpClient.post<{result:CourseNetwork, message: string}>(this.BACKEND_URL, CourseToNetwork(course)).subscribe(
              (responseData)=> {
                  this.courses.push(CourseToLocal(responseData.result));
                  this.courseUpdated.next([...this.courses]);
              }
            );
      }
      
}