import { Component, OnInit } from '@angular/core';
import { Course } from '../course.model';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-homepage',
  templateUrl: './course-homepage.component.html',
  styleUrls: ['./course-homepage.component.scss']
})
export class CourseHomepageComponent implements OnInit {

  allCourses: Course[] = [];
  courses: Course[] = [];
  showAll: boolean = false;
  max: number = 2;
  hideButtonActive = false;
  isLoading=false;

  constructor( private courseService: CourseService ) { }

  ngOnInit(): void {
    this.allCourses = this.courseService.getCourses();  
    this.allCourses = this.allCourses.filter(course=>
      course.isActive=="true"
    );
    this.courses = this.allCourses.slice(0,Math.min(this.max,this.allCourses.length));
    this.hideButtonActive = this.getActiveCoursesCount() > this.max;
    this.isLoading=false;
  }
    
  

  toggleViewMore() {
    this.showAll = !this.showAll
    if(this.showAll) {
      this.courses = this.allCourses;
    }else {
      this.courses = this.allCourses.slice(0,Math.min(this.max,this.allCourses.length));
    }
  }

  getBooleanFromString(value: string) {
    return value == "true";
  }

  getActiveCoursesCount(): number {
    let c=0;
    for(let course of this.allCourses) {
      if(this.getBooleanFromString(course.isActive)) {
        c++;
      }
    }
    return c;
  }
}
