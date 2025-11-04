import {ICommunity} from "@/types/types.ts";
import LCDC from "@/img/organizers/laschicasdelcodigo.jpeg";
import IxDA from "@/img/organizers/IxDA-Cover.png";
import KUG from "@/img/organizers/KUG.png"
import J4G from "@/img/organizers/j4g.png"
import Golang from "@/img/organizers/Gopher.png"
import Fedora from "@/img/organizers/fedora.png"
import Pythonistas from "@/img/organizers/pythonistas.png"
import GDLDevcomms from "@/img/organizers/gdl-devcomms.png"
import JUG from "@/img/organizers/gljug.png"
import {LinkType} from "@/types/speakers.ts";

export const organizers: Array<ICommunity> = [
    {
        name: "Pythonistas",
        description: "La comunidad de entusiastas de Python en Guadalajara",
        link: "https://pythonistas-gdl.org/",
        image: Pythonistas,
        socials: [
            {
                title: "Facebook",
                url: "https://www.facebook.com/pythonistasgdl",
                linkType: LinkType.Facebook
            },
            {
                title: "Instagram",
                url: "https://www.instagram.com/pythonistas_gdl",
                linkType: LinkType.Instagram
            },
            {
                title: "Twitter",
                url: "https://twitter.com/pythonistas_gdl",
                linkType: LinkType.Twitter
            },
            {
                title: "LinkedIn",
                url: "https://www.linkedin.com/groups/13193010",
                linkType: LinkType.LinkedIn
            },
            {
                title: "TikTok",
                url: "https://www.tiktok.com/@pythonistas_gdl",
                linkType: LinkType.TikTok
            }
        ]
    },
    {
        name: "Las Chicas del Código",
        description: "Comunidad de mujeres en tecnología que busca visibilizar el talento femenino en el sector tecnológico a través de eventos.",
        link: "https://linktr.ee/laschicasdelcodigo",
        image: LCDC,
        socials: [
            {
                title: "Facebook",
                url: "https://www.facebook.com/laschicasdelcodigo",
                linkType: LinkType.Facebook
            },
            {
                title: "Instagram",
                url: "https://www.instagram.com/laschicasdelcodigo/",
                linkType: LinkType.Instagram
            },
            {
                title: "Twitter",
                url: "https://x.com/chicasdelcodigo",
                linkType: LinkType.Twitter
            }
        ]
    },
    {
        name: "IXDA (The Interaction Design Association)",
        description: `
        Organización respaldada por sus miembros, dedicada al diseño de interacción.
        Con grupos locales en todo el mundo, conecta a profesionales de todos los niveles para compartir conocimientos y experiencias en la disciplina.`,
        link: "https://ixda.org/",
        image: IxDA,
        socials: [
            {
                title: "Facebook",
                url: "https://www.facebook.com/ixdagdl",
                linkType: LinkType.Facebook
            },
            {
                title: "Instagram",
                url: "https://www.instagram.com/ixdagdl/",
                linkType: LinkType.Instagram
            },
            {
                title: "LinkedIn",
                url: "http://linkedin.com/company/ixda-gdl",
                linkType: LinkType.LinkedIn
            }
        ]
    },
    {
        name: "KUG",
        description: "Comunidad de desarrolladores de Kotlin.",
        link: "",
        image: KUG,
        socials: [
            {
                title: "Facebook",
                url: "https://www.facebook.com/GuadalajaraKUG/",
                linkType: LinkType.Facebook
            }
        ]
    },
    {
        name: "GDL Devcomms",
        description: "La comunidad de comunidades de Guadalajara.",
        link: "",
        image: GDLDevcomms,
        socials: [
            {
                title: "Facebook",
                url: "https://www.facebook.com/gdldevcomms",
                linkType: LinkType.Facebook
            }
        ]
    },
    {
        name: "J4G",
        description: "Java User Group de Guadalajara.",
        link: "",
        image: J4G,
        socials: [
            {
                title: "Facebook",
                url: "https://www.facebook.com/groups/293473358264641i",
                linkType: LinkType.Facebook
            }
        ]
    },
    {
        name: "Golang",
        description: "Comunidad de desarrolladores de Go.",
        link: "",
        image: Golang,
        socials: []
    },
    {
        name: "Fedora",
        description: "Comunidad en Mexico de Fedora Linux.",
        link: "https://fedoramx.fedorapeople.org",
        image: Fedora,
        socials: [
            {
                title: "Twitter",
                url: "https://x.com/fedoramexico",
                linkType: LinkType.Twitter
            }
        ]
    },
    {
        name: "JUG GDL",
        description: `
        Comunidad de Java en Guadalajara. Co-organizadores de la JConf GDL.`,
        link: "http://juggdl.org",
        image: JUG,
        socials: [{
            title: "Facebook",
            url: "https://www.facebook.com/gdljug",
            linkType: LinkType.Facebook
        },
            {
                title: "Twitter",
                url: "https://twitter.com/java_gdl",
                linkType: LinkType.Twitter
            }
        ]
    }
]