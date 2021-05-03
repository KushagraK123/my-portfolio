export interface AchievementNetwork {
    _id: string, 
    title: string,
    description: string,
    time: string,
    sequence: number,
    isActive: boolean
} 

export interface Achievement {
    _id: string, 
    title: string,
    description: string,
    time: string,
    sequence: number,
    isActive: string
} 


export function AchievementToLocal(achievement: AchievementNetwork): Achievement {
    return {
        _id:achievement._id,
        title: achievement.title,
        description: achievement.description,
        time: achievement.time, 
        sequence: achievement.sequence,
        isActive: getIsActiveStringValue(achievement.isActive)
    }
}

export function AchievementToNetwork(achievement: Achievement): AchievementNetwork {
    return {
        _id:achievement._id,
        title: achievement.title,
        description: achievement.description,
        time: achievement.time, 
        sequence: achievement.sequence,
        isActive: achievement.isActive == 'true'
    }
}

function getIsActiveStringValue(isActive: boolean): string {
    if(isActive) return "true";
    else return "false";
}
