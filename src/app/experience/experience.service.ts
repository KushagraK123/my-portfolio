import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Experience } from "./experience.model";

@Injectable({ providedIn: "root" })
export class ExperienceService {


    experiences: Experience[] = [{
        _id: "2", 
        title: "Senior Software Engineer",
        description: "Developed Thumbnail Service in Java Spring to generate thumbnails for patient documents.Integrated Azure Service Bus with Patient Service for real-time Activity Events logging, improving patient-practitioner interaction tracking.Implemented code for processing XOrder files containing lab order data.Ensured code quality through reviews, testing, and adherence to best practices.Technologies used: Java Spring, Azure Service Bus, docker",
        time: "Sep 2023 - Aug 2024",
        company: "Straumann, Bengaluru, India",
        companyWebsite: "https://www.straumann.com/",
        sequence: 2,
        isActive: "true"
    },{
        _id: "3", 
        title: "Software Engineer-II",
        description: "Developed and maintained an observability tool, enhancing system visibility and performance monitoring.Designed and implemented the analytics component of the observability tool, enabling data-driven insights.Created an Ingestion Service to efficiently collect and process large volumes of data for real-time analysis.Developed a Query Service to enable users to interactively query and retrieve insights from the data.Utilized cutting-edge technologies including Spring Boot, WebFlux, Clickhouse database, Kafka Queue, and GraphQL",
        time: "Jan 2023 - Sep 2023",
        company: "Rakuten, Bengaluru, India",
        companyWebsite: "https://global.rakuten.com/corp/",
        sequence: 3,
        isActive: "true"
    },{
        _id: "4", 
        title: "System Engineer",
        description: "Led a team of 2 developers to build a Pension Distribution system for retirement customers using Java Spring Boot, Azure Function App, MSSQL Server DB, Azure DevOps.Achieved a significant performance boost by optimizing database queries, resulting in a threefold improvement in query efficiency.Reduced network payload by creating SQL functions, enhancing overall system responsiveness and efficiency.Successfully delivered the project on time, meeting all project milestones and ensuring timely pension distribution.Recognized and honored with the 'On the Spot' Award for the contributions to the project's success.Technologies used:- Java 8,  Spring Boot, MSSQL, Azure, Angular",
        time: "Aug 2020 - Jan 2023",
        company: "Tata Consultancy Services, Bengaluru, India",
        companyWebsite: "https://www.tcs.com",
        sequence: 4,
        isActive: "true"
    },{
        _id: "5", 
        title: "Android Developer Intern",
        description: "Added Groups Feature on community of Basis Android App.Added Community Polls feature.Added feature to add tags on Community Posts.Added Retirement and Career-Break calculators.Added functionality to like Stories and Comments on Community Posts.Added analytics on all the existing features to extract meaningful data from user activity.Quality analyzed Basis Android App and Web App.Technologies used:- MvRx Architecture by Airbnb (MVVM), Koin, Retrofit, Epoxy, Firebase, Kotlin",
        time: "Jan 2020 - Aug 2020",
        company: "Basis, Bengaluru, India",
        companyWebsite: "https://getbasis.co",
        sequence: 5,
        isActive: "true"
    }
    
    ];
  
    constructor(private httpClient: HttpClient) {
    }

     getExperiences(): Experience[] {
        return this.experiences;
    }  
}