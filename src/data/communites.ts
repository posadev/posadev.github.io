import {ICommunity} from "@/types/types.ts";
import {LinkType} from "@/types/speakers.ts";
import mdc from "@/img/communities/2025/mdc.png";
import playasOnTechLogo from "@/img/communities/2025/playas-logo.webp";
import GDGLogo from "@/img/communities/2025/GDG-Guadalajara.png";
import WOSECLogo from "@/img/communities/2025/WoSEC.png";
import ESGLogo from "@/img/communities/2026/ESG.png"
import calzadacode from "@/img/communities/2025/calzadacode.png";
import linuxeroszapopan from "@/img/communities/2025/linuxeroszapopan.png";
import techQuieroLogo from "@/img/communities/2025/techquiero.png";
import webdevtalksLogo from "@/img/communities/2025/webdevtalks.png";
import kcdLogo from "@/img/communities/2026/kcd.png"
import ketherLogo from "@/img/communities/2026/ketherlabs.png"
import awsUnivaLogo from "@/img/communities/2026/awsUniva.png"
import hgLogo from "@/img/communities/2026/hg.svg"
import guayabaLogo from "@/img/communities/2026/Guayabadevs.png"
import cloudNativeLogo from "@/img/communities/2026/cloud-native-cdmx.png"
import mexAiLogo from "@/img/communities/2026/edited_mex_ai.png"
import gluchLogo from "@/img/communities/2026/gluch.png"
import chidasLogo from "@/img/communities/2026/chidas-tech.png"
import awsColimaLogo from "@/img/communities/2026/aws-colima.png"

export const communitiesAllies: Array<ICommunity> = [
    {
        name: "Embedded Systems Geeks",
        description: "",
        link: "https://www.linkedin.com/in/frank-zeyda/",
        image: ESGLogo,
        sticker: true,
        socials: [
            {
                title: "LinkedIn",
                url: "https://www.linkedin.com/in/frank-zeyda//",
                linkType: LinkType.LinkedIn
            }
        ]
    },
    {
        name: "GDG Guadalajara",
        description: "",
        link: "https://www.instagram.com/gdg_guadalajara/",
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
        name: "Playas on tech",
        description: "",
        link: "https://playasontech.com/",
        image: playasOnTechLogo,
        sticker: false,
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
        name: "WOSEC MEXICO",
        description: "",
        link: "https://wosecmexico.org/",
        image: WOSECLogo,
        socials: [{
            title: "Facebook",
            url: "https://www.facebook.com/61576410909269",
            linkType: LinkType.Facebook
        },{
            title: "Instagram",
            url: "https://www.instagram.com/wosec_mx/",
            linkType: LinkType.Instagram
        },{
            title: "LinkedIn",
            url: "https://www.linkedin.com/company/wosecmexico/?viewAsMember=true",
            linkType: LinkType.LinkedIn
        }
        ]
    },
    {
        name: "Calzada Code",
        description: "",
        link: "https://calzadacode.dev/",
        image: calzadacode,
        socials: [
        {
            title: "Facebook",
            url: "https://www.facebook.com/share/18KRMKDy6U/",
            linkType: LinkType.Facebook
        },
        {
            title: "Twitter",
            url: "https://twitter.com/CalzadaCode",
            linkType: LinkType.Twitter
        },
        {
            title: "Instagram",
            url: "https://www.instagram.com/calzada.code",
            linkType: LinkType.Instagram
        }
      ]
    },
    {
        name: "Linuxeros Zapopan",
        description: "",
        link: "https://mx.linkedin.com/company/lnxzpn",
        image: linuxeroszapopan,
        socials: [
            {
                title:"Instagram",
                url:"https://www.instagram.com/lnxzpn/",
                linkType: LinkType.Instagram
            },
            {
                title:"LinkedIn",
                url:"https://mx.linkedin.com/company/lnxzpn",
                linkType: LinkType.LinkedIn
            },
            {
                title:"Twitter",
                url:"https://twitter.com/lnxzpn",
                linkType: LinkType.Twitter
            }
        ]
    },
    {
        name: "WebDevTalks",
        description: "",
        link: "https://webdevtalks.mx",
        image: webdevtalksLogo,
        sticker: false,
        socials: [
            {
                title: "Instagram",
                url: "https://www.instagram.com/webdevtalksmx",
                linkType: LinkType.Instagram
            },
            {
                title: "Facebook",
                url: "https://www.facebook.com/ColimaWebDevTalks",
                linkType: LinkType.Facebook
            },
            {
                title: "LinkedIn",
                url: "https://www.linkedin.com/company/web-dev-talks",
                linkType: LinkType.LinkedIn
            }
        ]
    },{
        name: "KetherLabs",
        description: "",
        link: "https://www.linkedin.com/company/ketherlabs/",
        image: ketherLogo,
        socials: [
            {
                title: "LinkedIn",
                url: "https://www.linkedin.com/company/ketherlabs/",
                linkType: LinkType.LinkedIn
            }
        ]
    },
    {
        name: "AWS SBG Univa",
        description: "",
        link: "https://www.instagram.com/aws.univa/",
        image: awsUnivaLogo,
        sticker: false,
        socials: [
            {
                title: "Instagram",
                url: "https://www.instagram.com/aws.univa/",
                linkType: LinkType.Instagram
            },
            {
                title: "LinkedIn",
                url: "https://www.linkedin.com/company/aws-student-builder-group-at-univa/",
                linkType: LinkType.LinkedIn
            }
        ]
    },
    {
        name: "Hacker Garage",
        description: "",
        link: "https://hackergarage.mx/",
        image: hgLogo,
        socials: [
        ]
    },
    {
        name: "Guayaba Devs",
        description: "",
        link: "https://guayabadev.com/",
        image: guayabaLogo,
        socials: [
            {
                title: "Instagram",
                url: "https://www.instagram.com/guayaba_devs_official/",
                linkType: LinkType.Instagram
            },
            {
                title: "LinkedIn",
                url: "https://www.linkedin.com/company/guayaba-devs/posts/",
                linkType: LinkType.LinkedIn
            }
        ]
    },
    {
        name: "Cloud Native CDMX",
        description: "",
        link: "https://ocgroups.dev/cncf/group/e5vgp72",
        image: cloudNativeLogo,
        socials: [
            {
                title: "Facebook",
                url: "https://www.facebook.com/cloudnativecdmx/",
                linkType: LinkType.Facebook
            },
            {
                title: "LinkedIn",
                url: "https://www.instagram.com/cloudnative_cdmx",
                linkType: LinkType.LinkedIn
            },
            {
                title: "TikTok",
                url: "https://www.tiktok.com/@cloudnative_cdmx",
                linkType: LinkType.TikTok
            }
        ]
    },
    {
        name: "KCD Mexico",
        description: "",
        link: "https://community.cncf.io/kcd-guadalajara/",
        image: kcdLogo,
        sticker: false,
        socials: [
            {
                title: "Facebook",
                url: "https://www.facebook.com/kcdmexico/",
                linkType: LinkType.Facebook
            },
            {
                title: "LinkedIn",
                url: "hhttps://www.linkedin.com/showcase/kcd-m%C3%A9xico/",
                linkType: LinkType.LinkedIn
            },
            {
                title: "Instagram",
                url: "https://www.instagram.com/kcdmexico/",
                linkType: LinkType.Instagram
            },
            {
                title: "Twitter",
                url: "https://x.com/kcd_mexico",
                linkType: LinkType.Instagram
            }
        ]
    },
    {
        name: "MexAI",
        description: "",
        link: "https://www.eventbrite.com.mx/o/mexai-comunidad-de-ia-106303535081",
        image: mexAiLogo,
        sticker: false,
        socials: [
            {
                title: "LinkedIn",
                url: "https://www.linkedin.com/company/mexai-community/posts/",
                linkType: LinkType.LinkedIn
            }
        ]
    },
    {
        name: "TechQuiero",
        description: "",
        link: "https://techquiero.com/es",
        image: techQuieroLogo,
        socials: [
            {
                title: "Facebook",
                url: "https://www.facebook.com/TechQuiero",
                linkType: LinkType.Facebook
            },
            {
                title: "LinkedIn",
                url: "https://www.linkedin.com/company/tech-quiero/posts/?feedView=all",
                linkType: LinkType.LinkedIn
            },
            {
                title: "Instagram",
                url: "https://www.instagram.com/techquieromx/",
                linkType: LinkType.Instagram
            }
        ]
    },
    {
        name: "GLUCH",
        description: "",
        link: "https://www.gluch.org.mx/",
        image: gluchLogo,
        socials: [
            {
                title: "Facebook",
                url: "https://www.facebook.com/groups/219085400136",
                linkType: LinkType.Facebook
            }
        ]
    },
    {
        name: "Chidas Tech",
        description: "",
        link: "https://www.facebook.com/chidastech/",
        image: chidasLogo,
        socials: [
            {
                title: "Facebook",
                url: "https://www.facebook.com/chidastech/",
                linkType: LinkType.Facebook
            },
            {
                title: "LinkedIn",
                url: "https://www.linkedin.com/company/chidas-tech/posts/",
                linkType: LinkType.LinkedIn
            },
            {
                title: "Instagram",
                url: "https://www.instagram.com/chidastech/",
                linkType: LinkType.Instagram
            }
        ]
    },
    {
        name: "AWS Colima",
        description: "",
        link: "https://www.meetup.com/aws-user-group-colima/",
        image: awsColimaLogo,
        sticker: false,
        socials: [
            {
                title: "LinkedIn",
                url: "https://www.linkedin.com/company/aws-user-group-colima/",
                linkType: LinkType.LinkedIn
            },
            {
                title: "Instagram",
                url: "hhttps://www.instagram.com/awsugcolima/",
                linkType: LinkType.Instagram
            }
        ]
    }
    /*,
    {
        name: "Comunidad RubyMX",
        description: "",
        link: "https://comunidadruby.mx/",
        image: rubymx,
        socials: [
            {
                title: "Facebook",
                url: "https://www.facebook.com/comunidadrubymx",
                linkType: LinkType.Facebook
            },
            {
                title: "LinkedIn",
                url: "https://mx.linkedin.com/company/comunidadrubymx",
                linkType: LinkType.LinkedIn
            },
            {
                title: "Twitter",
                url: "https://x.com/comunidadrubymx",
                linkType: LinkType.Twitter
            },
            {
                title: "Instagram",
                url: "https://www.instagram.com/comunidadrubymx",
                linkType: LinkType.Instagram
            }
        ]
    },
    {
        name: "WebDevTalks",
        description: "",
        link: "https://webdevtalks.mx",
        image: webdevtalksLogo,
        socials: [
            {
                title: "Instagram",
                url: "https://www.instagram.com/webdevtalksmx",
                linkType: LinkType.Instagram
            },
            {
                title: "Facebook",
                url: "https://www.facebook.com/ColimaWebDevTalks",
                linkType: LinkType.Facebook
            },
            {
                title: "LinkedIn",
                url: "https://www.linkedin.com/company/web-dev-talks",
                linkType: LinkType.LinkedIn
            }
        ]
    },
    {
        name: "Kubernetes Community Day México",
        description: "",
        link: "https://community.cncf.io/kcd-guadalajara/",
        image: kcdLogo,
        sticker: false,
        socials: [
            {
                title: "Facebook",
                url: "https://www.facebook.com/kcdmexico/",
                linkType: LinkType.Facebook
            },
            {
                title: "Instagram",
                url: "https://www.instagram.com/kcdmexico/",
                linkType: LinkType.Instagram
            },
            {
                title: "LinkedIn",
                url: "https://www.linkedin.com/showcase/kcd-m%C3%A9xico/",
                linkType: LinkType.LinkedIn
            },
            {
                title: "Twitter",
                url: "https://x.com/kcd_mexico",
                linkType: LinkType.Twitter
            },
            {
                title: "Tiktok",
                url: "https://www.tiktok.com/@kcdmexico",
                linkType: LinkType.TikTok
            }
        ]
    }*/
];
