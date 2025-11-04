export interface ISpeaker {
    id: string
    firstName: string
    lastName: string
    fullName: string
    bio: string
    tagLine: string
    profilePicture: string
    sessions: ISession
    isTopSpeaker: boolean
    links: ILink[]
    category: string
}

export interface ISession {
    id: number
    title: string
    description: string
    startAt: string
    endAt: string
    speakers: string[]
    categoryItems: number[]
}

export interface ILink {
    title: string
    url: string
    linkType: string
}

export enum LinkType {
    Twitter = "Twitter",
    LinkedIn = "LinkedIn",
    GitHub = "GitHub",
    Instagram = "Instagram",
    Facebook = "Facebook",
    TikTok = "TikTok"
}

export interface ICategory {
    id: number
    name: string
}

export interface IConferenceData {
    sessions: ISession[];
    speakers: ISpeaker[];
    categories: [{
        items: ICategory[]
    }]
}
export interface fetchResponse extends IConferenceData{
    blob: Blob
}