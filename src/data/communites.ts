import {ICommunity} from "@/types/types.ts";
import {LinkType} from "@/types/speakers.ts";
import wosecLogo from "@/img/communities/2025/WoSEC.png";
import technologyEventsLogo from "@/img/communities/2025/technologyevents.png";
import mdc from "@/img/communities/2025/mdc.png";
import playasOnTechLogo from "@/img/communities/2025/playas-logo.webp";
import GDGLogo from "@/img/communities/2025/GDG-Guadalajara.png";
import ajolotesAWSLogo from "@/img/communities/2025/ajolotes-aws.png";

export const communitiesAllies: Array<ICommunity> = [
    {
        name: "Technology Events",
        description: "",
        link: "https://techyevents.com.mx/",
        image: technologyEventsLogo,
        socials: [{
            title: "Instagram",
            url: "https://www.instagram.com/technology_events_community?igsh=MXgydXFnYWRpcnRseg==",
            linkType: LinkType.Instagram
        },
            {
                title: "Facebook",
                url: "https://www.facebook.com/share/19r2SzioLV/",
                linkType: LinkType.Facebook
            },
            {
                title: "LinkedIn",
                url: "https://www.linkedin.com/company/technology-events-community/",
                linkType: LinkType.LinkedIn
            },
            {
                title: "Tiktok",
                url: "https://www.tiktok.com/@technology.events?_t=ZS-8zTq13UhIl0&_r=1",
                linkType: LinkType.TikTok
            }
        ]
    },
    {
        name: "GDG Guadalajara",
        description: "",
        link: "https://gdg.community.dev/events/details/google-gdg-guadalajara-presents-devfest-2025-kickoff-in-guadalajara/",
        image: GDGLogo,
        socials: [{
            title: "LinkedIn",
            url: "https://www.linkedin.com/company/gdgguadalajara",
            linkType: LinkType.LinkedIn
        },{
            title: "Instagram",
            url: "https://www.instagram.com/gdg_guadalajara/",
            linkType: LinkType.Instagram
        }
        ]
    },
    {
        name: "WOSEC MEXICO",
        description: "",
        link: "https://wosecmexico.org/",
        image: wosecLogo,
        socials: [{
            title: "LinkedIn",
            url: "https://www.linkedin.com/company/wosecmexico/",
            linkType: LinkType.LinkedIn
        },{
            title: "Instagram",
            url: "https://www.instagram.com/wosec_mx/",
            linkType: LinkType.Instagram
        }
        ]
    },
    {
        name: "Mobile Developer Community (MDC)",
        description: "",
        link: "https://linktr.ee/mdcommunity",
        image: mdc,
        socials: [{
            title: "Facebook",
            url: "https://www.facebook.com/61576410909269",
            linkType: LinkType.Facebook
        },{
            title: "Instagram",
            url: "https://www.instagram.com/mobiledevelopercommunity/",
            linkType: LinkType.Instagram
        },{
            title: "LinkedIn",
            url: "https://www.linkedin.com/company/mobile-developer-community/",
            linkType: LinkType.LinkedIn
        }
        ]
    },
    {
        name: "AWS User Group Ajolotes en la Nube ",
        description: "",
        link: "",
        image: ajolotesAWSLogo,
        socials: [
            {
                title: "Instagram",
                url: "https://www.instagram.com/aws.ajolotes?igsh=MTk1ajFiZHdqand0aA%3D%3D&utm_source=qr",
                linkType: LinkType.Instagram
            },
            {
                title: "LinkedIn",
                url: "https://www.linkedin.com/company/aws-ug-ajolotes-en-la-nube/",
                linkType: LinkType.LinkedIn
            }
        ]
    },
    {
        name: "Playas on tech",
        description: "",
        link: "https://playasontech.com/",
        image: playasOnTechLogo,
        socials: [
            {
            title:"Facebook",
            url:"https://www.facebook.com/playasontech",
            linkType: LinkType.Facebook
        },
            {
                title:"Instagram",
                url:"https://www.instagram.com/playasontech_mzo/",
                linkType: LinkType.Instagram
            },
            {
                title:"LinkedIn",
                url:"https://www.linkedin.com/company/playasontech",
                linkType: LinkType.LinkedIn
            },
            {
                title:"TikTok",
                url:"https://www.tiktok.com/@playasontech",
                linkType: LinkType.TikTok
            }
        ]
    },
];