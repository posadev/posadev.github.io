import {ISession, ISessionData, ISessionInfo} from "@/types/sessions.ts";

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
    sessions: ISessionInfo[]
    isTopSpeaker: boolean
    links: ILink[]
}

export interface ISpeakerData {
    id: string
    firstName: string
    lastName: string
    fullName: string
    bio: string
    tagLine: string
    profilePicture: string
    sessions: number[]
    isTopSpeaker: boolean
    links: ILink[]
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
    sessions: ISessionData[];
    speakers: ISpeakerData[];
    categories: [{
        items: ICategory[]
    }]
    rooms: IRoom[]
}
