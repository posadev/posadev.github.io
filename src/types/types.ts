export interface ICommunity {
    name?: string;
    description: string;
    link: string;
    image: string;
    socials: {
        facebook?: string;
        instagram?: string;
        twitter?: string;
        linkedin?: string;
        tikTok?: string;
    }
}
export interface IImage {
    id: number
    src: string
    alt: string
    title: string
}

export interface ISponsor {
    id: string;
    name: string;
    description?: string;
    link?: string;
    image: string;
    isPaid: boolean;
    type?: 'gold' | 'silver' | 'bronze';
}

export enum AppStatus {
    Loading,
    Success,
    Error
}