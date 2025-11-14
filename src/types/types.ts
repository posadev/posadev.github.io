import {ILink} from "@/types/speakers.ts";

export interface ICommunity {
    name?: string;
    description: string;
    link: string;
    image: string;
    socials: ILink[];
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
    type?: 'gold' | 'diamond' | 'bronze' | 'silver';
}

export enum AppStatus {
    Loading,
    Success,
    Error
}