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

export const organizers: Array<ICommunity> = [
    {
        name: "Las Chicas del Código",
        description: "Comunidad de mujeres en tecnología que busca visibilizar el talento femenino en el sector tecnológico a través de eventos.",
        link: "https://linktr.ee/laschicasdelcodigo",
        image: LCDC,
        socials: {
            facebook: "https://www.facebook.com/laschicasdelcodigo",
            instagram: "https://www.instagram.com/laschicasdelcodigo/",
            twitter: "https://x.com/chicasdelcodigo"
        },
    },
    {
        name: "IXDA (The Interaction Design Association)",
        description: `
        Organización respaldada por sus miembros, dedicada al diseño de interacción.
        Con grupos locales en todo el mundo, conecta a profesionales de todos los niveles para compartir conocimientos y experiencias en la disciplina.`,
        link: "https://ixda.org/",
        image: IxDA,
        socials: {
            facebook: "https://www.facebook.com/ixdagdl",
            instagram: "https://www.instagram.com/ixdagdl/",
            linkedin: "http://linkedin.com/company/ixda-gdl"
        },
    },
    {
        name: "KUG",
        description: "Comunidad de desarrolladores de Kotlin.",
        link: "",
        image: KUG,
        socials: {
            facebook: "https://www.facebook.com/GuadalajaraKUG/",
            instagram: "",
            twitter: ""
        },
    },
    {
        name: "GDL Devcomms",
        description: "La comunidad de comunidades de Guadalajara.",
        link: "",
        image: GDLDevcomms,
        socials: {
            facebook: "https://www.facebook.com/gdldevcomms",
            instagram: "",
            twitter: ""
        },
    },
    {
        name: "J4G",
        description: "Java User Group de Guadalajara.",
        link: "",
        image: J4G,
        socials: {
            facebook: "https://www.facebook.com/groups/293473358264641i",
            instagram: "",
            twitter: ""
        }
        },
    {
        name: "Pythonistas",
        description: "La comunidad de entusiastas de Python en Guadalajara",
        link: "https://pythonistas-gdl.org/",
        image: Pythonistas,
        socials: {
            facebook: "https://www.facebook.com/pythonistasgdl",
            instagram: "https://www.instagram.com/pythonistas_gdl",
            twitter: "https://twitter.com/pythonistas_gdl",
            linkedin: "https://www.linkedin.com/groups/13193010",
            tikTok: "https://www.tiktok.com/@pythonistas_gdl"
        }
    },
    {
        name: "Golang",
        description: "Comunidad de desarrolladores de Go.",
        link: "",
        image: Golang,
        socials: {
            facebook: "",
            instagram: "",
            twitter: ""
        }
    },
    {
        name: "Fedora",
        description: "Comunidad en Mexico de Fedora Linux.",
        link: "https://fedoramx.fedorapeople.org",
        image: Fedora,
        socials: {
            facebook: "",
            instagram: "",
            twitter: "https://x.com/fedoramexico"
        }
    },
    {
        name: "JUG GDL",
        description: `
        Comunidad de Java en Guadalajara. Co-organizadores de la JConf GDL.`,
        link: "http://juggdl.org",
        image: JUG,
        socials: {
            facebook: "https://www.facebook.com/gdljug",
            twitter: "https://twitter.com/java_gdl"
        }
    }
]

export const communitiesAllies: Array<ICommunity> = [];