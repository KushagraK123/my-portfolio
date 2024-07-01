import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Project } from "./project.model";


@Injectable({ providedIn: "root" })
export class ProjectService {

    projects: Project[] = [{
        _id: "1", 
        title: "Open Source contribution in LibreOffice",
        description: "LibreOffice is a free open-source office productivity software suite, I made a contribution to it by fixing a bug in it.",
        mainImage: "assets/projects/libreoffice/title.png",
        projectLink: "https://kushagrak123.github.io/Pathfinding-Visualizer/",
        hasLink: "true",  
        ss1: "",
        ss2: "",
        ss3: "",
        ss4: "",
        ss5: "", 
        skills: "",
        sequence: 1,
        isActive: "true"
    },
        {
        _id: "2", 
        title: "Pathfinding Visualizer",
        description: "This website lets us visualise some famous pathfinding algorithms and lets us understand the algorithm better.",
        mainImage: "assets/projects/pathfinding/title.png",
        projectLink: "https://kushagrak123.github.io/Pathfinding-Visualizer/",
        hasLink: "true",  
        ss1: "",
        ss2: "",
        ss3: "",
        ss4: "",
        ss5: "", 
        skills: "",
        sequence: 2,
        isActive: "true"
    },   {
        _id: "3", 
        title: "Reminder Android Application",
        description: "It is a very easy to use Reminder app, which will never let you miss a event.",
        mainImage: "assets/projects/reminder/title.png",
        projectLink: "https://kushagrak123.github.io/Pathfinding-Visualizer/",
        hasLink: "false",  
        ss1: "assets/projects/reminder/ss1.png",
        ss2: "assets/projects/reminder/ss2.png",
        ss3: "assets/projects/reminder/ss3.png",
        ss4: "assets/projects/reminder/ss4.png",
        ss5: "", 
        skills: "Java, Android Studio, Gradle",
        sequence: 3,
        isActive: "true"
    },  {
        _id: "4", 
        title: "Bouncy Ball Android Game",
        description: "An endless arcade game where players need to drag their finger on the screen and jump on the tiles to bounce around in space and make sure you don't fall off the edge.",
        mainImage: "assets/projects/bouncyball/title.png",
        projectLink: "",
        hasLink: "false",  
        ss1: "assets/projects/bouncyball/ss1.jpg",
        ss2: "assets/projects/bouncyball/ss2.jpg",
        ss3: "assets/projects/bouncyball/ss3.jpg",
        ss4: "assets/projects/bouncyball/ss4.jpg",
        ss5: "", 
        skills: "C#, Unity 3D",
        sequence: 4,
        isActive: "true"
    },  {
        _id: "5", 
        title: "Currency Convertor Android Application",
        description: "Convert any currency with live exchange rates. Supports currencies for every country .",
        mainImage: "assets/projects/currencyconvertor/title.png",
        projectLink: "",
        hasLink: "false",  
        ss1: "assets/projects/currencyconvertor/ss1.jpg",
        ss2: "assets/projects/currencyconvertor/ss2.jpg",
        ss3: "",
        ss4: "",
        ss5: "", 
        skills: "",
        sequence: 5,
        isActive: "true"
    }
    ];
    
    constructor(private httpClient: HttpClient) {
    }

     getProjects(): Project[] {
        return this.projects
     }

    getProjectWithId(projectId: string) {
        let project = this.projects.find( it=> 
            it._id == projectId
        );
        return project;
    }  
}