import {ISpeakerId} from "@/types/speakers.ts";

export interface ISession {
    id: number
    title: string
    description: string
    startsAt: string
    endsAt: string
    speakers: ISpeakerId[]
    categoryItems: number[]
    roomId: string
}

export interface ISessionInfo extends ISession {
    category: string
}

export interface ISessionData {
    id: number
    title: string
    description: string
    startsAt: string
    endsAt: string
    speakers: string[]
    categoryItems: number[]
    roomId: string
}