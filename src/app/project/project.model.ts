export interface ProjectNetwork {
    _id: string, 
    title: string,
    description: string,
    projectLink: string,
    hasLink: boolean,  
    sequence: number,
    isActive: boolean,
    mainImage: string,
    skills: string,
    ss1: string,
    ss2: string,
    ss3: string,
    ss4: string,
    ss5: string
} 

export interface Project {
    _id: string, 
    title: string,
    description: string,
    mainImage: string,
    projectLink: string,
    hasLink: string,  
    ss1: string,
    ss2: string,
    ss3: string,
    ss4: string,
    ss5: string, 
    skills: string,
    sequence: number,
    isActive: string
} 


export function ProjectToLocal(project: ProjectNetwork): Project {
    return {
        _id:project._id,
        title: project.title,
        description: project.description,
        mainImage: project.mainImage,
        projectLink: project.projectLink,
        hasLink: getIsActiveStringValue(project.hasLink),  
        ss1: project.ss1,
        ss2: project.ss2,
        ss3: project.ss3,
        ss4: project.ss4,
        ss5: project.ss5, 
        skills: project.skills,
        sequence: project.sequence,
        isActive: getIsActiveStringValue(project.isActive)
    }
}

export function ProjectToNetwork(project: Project): ProjectNetwork {
    return {
        _id:project._id,
        title: project.title,
        description: project.description,
        mainImage: project.mainImage,
        projectLink: project.projectLink,
        hasLink: project.hasLink == 'true',  
        ss1: project.ss1,
        ss2: project.ss2,
        ss3: project.ss3,
        ss4: project.ss4,
        ss5: project.ss5, 
        skills: project.skills,
        sequence: project.sequence,
        isActive: project.isActive == 'true'
    }
}

function getIsActiveStringValue(isActive: boolean): string {
    if(isActive) return "true";
    else return "false";
}
