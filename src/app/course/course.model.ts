export interface CourseNetwork {
    _id: string, 
    title: string,
    description: string,
    time: string, 
    imagePath: string, 
    sequence: number,
    isActive: boolean
} 

export interface Course {
    _id: string, 
    title: string,
    description: string,
    time: string, 
    image: string, 
    sequence: number,
    isActive: string
} 


export function CourseToLocal(course: CourseNetwork): Course {
    return {
        _id:course._id,
        title: course.title,
        description: course.description,
        time: course.time, 
        image: course.imagePath,
        sequence: course.sequence,
        isActive: getIsActiveStringValue(course.isActive)
    }
}

export function CourseToNetwork(course: Course): CourseNetwork {
    return {
        _id:course._id,
        title: course.title,
        description: course.description,
        time: course.time, 
        imagePath: course.image,
        sequence: course.sequence,
        isActive: course.isActive == 'true'
    }
}

function getIsActiveStringValue(isActive: boolean): string {
    if(isActive) return "true";
    else return "false";
}
