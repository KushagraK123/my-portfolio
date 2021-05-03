export interface ExperienceNetwork {
    _id: string, 
    title: string,
    description: string,
    time: string,
    company: string,
    companyWebsite: string,
    sequence: number,
    isActive: boolean
} 

export interface Experience {
    _id: string, 
    title: string,
    description: string,
    time: string,
    company: string,
    companyWebsite: string,
    sequence: number,
    isActive: string
} 


export function ExperienceToLocal(experience: ExperienceNetwork): Experience {
    return {
        _id:experience._id,
        title: experience.title,
        description: experience.description,
        time: experience.time, 
        sequence: experience.sequence,
        companyWebsite: experience.companyWebsite,
        company: experience.company,
        isActive: getIsActiveStringValue(experience.isActive)
    }
}

export function ExperienceToNetwork(experience: Experience): ExperienceNetwork {
    return {
        _id:experience._id,
        title: experience.title,
        description: experience.description,
        time: experience.time, 
        sequence: experience.sequence,
        company: experience.company,
        companyWebsite: experience.companyWebsite,
        isActive: experience.isActive == 'true'
    }
}

function getIsActiveStringValue(isActive: boolean): string {
    if(isActive) return "true";
    else return "false";
}
