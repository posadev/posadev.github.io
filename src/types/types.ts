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