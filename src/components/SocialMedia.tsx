import {ILink, LinkType} from "@/types/speakers.ts";
import React from "react";
import {Instagram, Twitter, Linkedin, Github} from "lucide-react";

interface SocialMediaProps {
    link: ILink
    className?: string
}

const SocialMedia: React.FC<SocialMediaProps> = ({link, className}) => {
    switch (link.linkType) {
        case LinkType.Instagram:
            return (
                <a href={link.url} target="_blank" rel="noopener noreferrer" className={`hover:text-alternative-400 transition-colors ${className}`}>
                    <Instagram href={link.url} target="_blank" height={26} width={26} className={`hover:underline ${className}`}>
                        <title>Instagram</title>
                    </Instagram>
                </a>

            );
        case LinkType.Twitter:
            return (
                <a href={link.url} target="_blank" rel="noopener noreferrer" className={`hover:text-alternative-400 transition-colors ${className}`}>

                    <Twitter href={link.url} target="_blank" height={26} width={26} className={`hover:underline ${className}`}>
                        <title>Twitter</title>
                    </Twitter>
                </a>
            );
        case LinkType.LinkedIn:
            return (
                <a href={link.url} target="_blank" rel="noopener noreferrer" className={`hover:text-alternative-400 transition-colors ${className}`}>
                    <Linkedin href={link.url} target="_blank" height={26} width={26} className={`hover:underline ${className}`}>
                        <title>LinkedIn</title>
                    </Linkedin>
                </a>
            );
        case LinkType.GitHub:
            return (
                <a href={link.url} target="_blank" rel="noopener noreferrer" className={`hover:text-alternative-400 transition-colors ${className}`}>
                    <Github href={link.url} target="_blank" height={26} width={26} className={`hover:underline ${className}`}>
                        <title>GitHub</title>
                    </Github>
                </a>
            );
        default:
            return null;
    }
};

export default SocialMedia;