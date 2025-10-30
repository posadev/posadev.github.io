import {ILink, LinkType} from "@/types/speakers.ts";
import React from "react";
import {Instagram, Twitter, Linkedin, Github} from "lucide-react";

interface SocialMediaProps {
    link: ILink
    className?: string
}

const getSVG = (link: ILink, className) => {
    switch (link.linkType) {
        case LinkType.Instagram:
            return (
                <Instagram href={link.url} target="_blank" height={26} width={26} className={`hover:underline ${className}`}>
                    <title>Instagram</title>
                </Instagram>
            );
        case LinkType.Twitter:
            return (
                <Twitter href={link.url} target="_blank" height={26} width={26} className={`hover:underline ${className}`}>
                    <title>Twitter</title>
                </Twitter>
            );
        case LinkType.LinkedIn:
            return (
                <Linkedin href={link.url} target="_blank" height={26} width={26} className={`hover:underline ${className}`}>
                    <title>LinkedIn</title>
                </Linkedin>
            );
        case LinkType.GitHub:
            return (
                <Github href={link.url} target="_blank" height={26} width={26} className={`hover:underline ${className}`}>
                    <title>GitHub</title>
                </Github>
            );
        default:
            return null;
    }
}

const SocialMedia: React.FC<SocialMediaProps> = ({link, className}) => {
    return <a href={link.url} target="_blank" rel="noopener noreferrer" className={`hover:text-alternative-400 transition-colors ${className}`}>
        {getSVG(link, className)}
    </a>


};

export default SocialMedia;