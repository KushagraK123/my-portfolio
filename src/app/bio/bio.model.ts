export interface BioNetwork {
    _id: string, 
    name: string,
    linkedin: string,
    github: string,
    aboutme: string, 
    resume: string, 
    hackerrank: string
    email: string
} 

export interface Bio {
    _id: string, 
    name: string,
    linkedin: string,
    github: string,
    aboutme: string,
    resume: string, 
    hackerrank: string
    email: string
} 


export function BioToLocal(bio: BioNetwork): Bio {
    return {
        _id: bio._id, 
        name: bio.name,
        linkedin: bio.linkedin,
        github: bio.github,
        aboutme: bio.aboutme, 
        resume: bio.resume, 
        hackerrank: bio.hackerrank,
        email: bio.email
    }
}

export function BioToNetwork(bio: Bio): BioNetwork {
    return {
        _id: bio._id, 
        name: bio.name,
        linkedin: bio.linkedin,
        github: bio.github,
        aboutme: bio.aboutme, 
        resume: bio.resume, 
        hackerrank: bio.hackerrank,
        email: bio.email
    }
}

