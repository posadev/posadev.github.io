export interface ISpeakerId {
    id: string
    name: string
}

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
    endsAt: string
    speakers: ISpeakerId[]
    categoryItems: number[]
}

export interface ISessionInfo extends ISession {
    category: string
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

export interface IRoom {
    id: number
    name: string
}

export interface IRoomData extends IRoom {
    sessions: ISession[]
}

export interface IConferenceData {
    sessions: ISession[];
    speakers: ISpeaker[];
    categories: [{
        items: ICategory[]
    }]
    rooms: IRoom[]
}
