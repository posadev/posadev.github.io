export interface ISpeaker {
    id: string
    firstName: string
    lastName: string
    fullName: string
    bio: string
    tagLine: string
    profilePicture: string
    sessions: ISession[]
    isTopSpeaker: boolean
    links: ILink[]
    questionAnswers: IQuestionAnswer[]
    categories: any[]
}

export interface ISession {
    id: number
    name: string
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
    Instagram = "Instagram"
}

export interface IQuestionAnswer {
    id: number
    question: string
    questionType: string
    answer: any
    sort: number
    answerExtra: any
}
