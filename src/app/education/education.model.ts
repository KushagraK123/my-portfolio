export interface EducationNetwork {
    _id: string, 
    institute: string,
    description: string,
    course: string,
    icon: String,
    time: string, 
    grade: string
    sequence: number,
    isActive: boolean
} 

export interface Education {
    _id: string, 
    institute: string,
    icon: String,
    description: string,
    course: string,
    time: string, 
    grade: string
    sequence: number,
    isActive: string
} 


export function EducationToLocal(education: EducationNetwork): Education {
    return {
        _id:education._id,
        institute: education.institute,
        description: education.description,
        course: education.course,
        icon: education.icon,
        time: education.time, 
        grade: education.grade,
        sequence: education.sequence,
        isActive: getIsActiveStringValue(education.isActive)
    }
}

export function EducationToNetwork(education: Education): EducationNetwork {
    return {
        _id:education._id,
        institute: education.institute,
        description: education.description,
        course: education.course,
        time: education.time, 
        icon: education.icon,
        grade: education.grade,
        sequence: education.sequence,
        isActive: education.isActive == 'true'
    }
}

function getIsActiveStringValue(isActive: boolean): string {
    if(isActive) return "true";
    else return "false";
}
