export interface AchievementNetwork {
    _id: string, 
    title: string,
    description: string,
    time: string,
    imageUrl: String,
    hasImage: boolean,
    sequence: number,
    icon: String,
    isActive: boolean
} 

export interface Achievement {
    _id: string, 
    title: string,
    description: string,
    time: string,
    icon: String,
    hasImage: boolean,
    imageUrl: String,
    sequence: number,
    isActive: string
} 


export function AchievementToLocal(achievement: AchievementNetwork): Achievement {
    return {
        _id:achievement._id,
        title: achievement.title,
        imageUrl: achievement.imageUrl,
        hasImage: achievement.hasImage,
        description: achievement.description,
        icon: achievement.icon,
        time: achievement.time, 
        sequence: achievement.sequence,
        isActive: getIsActiveStringValue(achievement.isActive)
    }
}

export function AchievementToNetwork(achievement: Achievement): AchievementNetwork {
    return {
        _id:achievement._id,
        title: achievement.title,
        imageUrl: achievement.imageUrl,
        description: achievement.description,
        time: achievement.time, 
        icon: achievement.icon,
        hasImage: achievement.hasImage,
        sequence: achievement.sequence,
        isActive: achievement.isActive == 'true'
    }
}

function getIsActiveStringValue(isActive: boolean): string {
    if(isActive) return "true";
    else return "false";
}
