import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Course } from '../course.model';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-homepage',
  templateUrl: './course-homepage.component.html',
  styleUrls: ['./course-homepage.component.scss']
})
export class CourseHomepageComponent implements OnInit {

  private courseSubscription: Subscription = new Subscription();
  allCourses: Course[] = [];
  courses: Course[] = [];
  showAll: boolean = false;
  max: number = 2;
  hideButtonActive = false;
  isLoading=true;

  constructor( private courseService: CourseService ) { }

  ngOnInit(): void {
    this.courseService.getCourses();
    this.courseSubscription = this.courseService.getCourseUpdateListener().subscribe(
      (courses: Course[])=>{
        this.allCourses = courses;
        this.allCourses = this.allCourses.filter(course=>
          course.isActive=="true"
        );
        this.courses = this.allCourses.slice(0,Math.min(this.max,this.allCourses.length));
        this.hideButtonActive = this.getActiveCoursesCount() > this.max;
        this.isLoading=false;
      }
    );
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
