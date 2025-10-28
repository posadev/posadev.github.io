export interface SpeakerList {
    speakers: Speaker[]
}

export interface Speaker {
    id: string
    firstName: string
    lastName: string
    fullName: string
    bio: string
    tagLine: string
    profilePicture: string
    sessions: Session[]
    isTopSpeaker: boolean
    links: Link[]
    questionAnswers: QuestionAnswer[]
    categories: any[]
}

export interface Session {
    id: number
    name: string
}

export interface Link {
    title: string
    url: string
    linkType: string
}

export interface QuestionAnswer {
    id: number
    question: string
    questionType: string
    answer: any
    sort: number
    answerExtra: any
}
