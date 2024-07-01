import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Course } from "./course.model";


@Injectable({ providedIn: "root" })
export class CourseService {

    private courses: Course[] = [{
        _id: "1", 
        title: "Algoexpert",
        description: "Solved 100+ Data Structures and Algorithms problems. Gained deep knowledge of data structures like Stacks, Queues, Hash Tables, Heaps etc.",
        time: "", 
        image: "assets/courses/algoexpert.jpeg", 
        sequence: 1,
        certificate: "https://certificate.algoexpert.io/AlgoExpert%20Certificate%20AE-c9b12c80c9",
        isActive: "true"
    },{
        _id: "2", 
        title: "Hackerrank Problem Solving Advanced",
        description: "This covers topics like Data Structures such as Trees, Graph Traversal, using Dynamic Programming and Specialized Algorithms",
        time: "", 
        image: "assets/courses/hackerrank.jpeg", 
        sequence: 2,
        certificate: "https://www.hackerrank.com/certificates/802a24538a6d",
        isActive: "true"
    },{
        _id: "3", 
        title: "Udemy Machine Learning A-Z",
        description: "In this course I learnt building robust Machine Learning model using python and handling specific topics like Reinforcement Learning, NLP and Deep Learning",
        time: "", 
        image: "assets/courses/udemy.jpeg", 
        sequence: 3,
        certificate: "https://www.udemy.com/certificate/UC-9WD21G3C/",
        isActive: "true"
    },
]

    constructor(private httpClient: HttpClient) {
    }

     getCourses(): Course[] {
         return this.courses
    }      
}