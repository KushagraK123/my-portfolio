
export interface SkillNetwork {
    _id: string, 
    name: string, 
    sequence: number,
    isActive: boolean,
   
}

    

export interface Skill {
    _id: string, 
    name: string, 
    sequence: number,
    isActive: string
}






export function skillToLocal(skill: SkillNetwork) {
    return {
        _id:skill._id,
        name: skill.name, 
        sequence: skill.sequence,
        isActive: getSkillStringValue(skill.isActive)
    }
}

export function skillToNetwork(skill: Skill): SkillNetwork {
    return {
        _id:skill._id,
        name: skill.name, 
        sequence: skill.sequence,
        isActive: skill.isActive == 'true'
    }
}

function getSkillStringValue(isActive: boolean): string {
    if(isActive) return "true";
    else return "false";
}
