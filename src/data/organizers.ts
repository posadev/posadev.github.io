import { IOrganizer } from "@/types/types.ts";
import hazzimAnaya from "@/img/organizers/2026/hazzim-anaya.webp";
import araceliHeredia from "@/img/organizers/2026/araceli-heredia.webp";
import christianGomez from "@/img/organizers/2026/christian-gomez.webp";
import orlandoCano from "@/img/organizers/2026/orlando-cano.webp";
import kimberlyEscobedo from "@/img/organizers/2026/kimberly-escobedo.webp";
import danielGongora from "@/img/organizers/2026/daniel-gongora.webp";

export const organizers: Array<IOrganizer> = [
    {
        name: "Hazzim Anaya",
        role: "Sponsors & CFP",
        image: hazzimAnaya,
        communities: [
            { name: "Fedora Mexico", link: "https://fedoramx.fedorapeople.org" },
            { name: "KCD Mexico", link: "https://community.cncf.io/kcd-guadalajara/" },
        ],
    },
    {
        name: "Araceli Heredia",
        role: "Design & Social Media",
        image: araceliHeredia,
        communities: [
            { name: "Interaction Design Association Guadalajara", link: "https://ixda.org/" },
        ],
    },
    {
        name: "Christian Gómez",
        role: "IT solutions & Sponsors",
        image: christianGomez,
        communities: [
            { name: "JUG GDL", link: "http://juggdl.org" },
        ],
    },
    {
        name: "Orlando Cano",
        role: "Sponsors & Swag",
        image: orlandoCano,
        communities: [
            { name: "J4Guanatos", link: "https://www.facebook.com/groups/293473358264641" },
        ],
    },
    {
        name: "Kimberly Escobedo",
        role: "Management & Logistics",
        image: kimberlyEscobedo,
        communities: [
            { name: "GDLDevcoms", link: "https://www.facebook.com/gdldevcomms" },
        ],
    },
    {
        name: "Daniel Gongora",
        role: "Communities & Volunteering",
        image: danielGongora,
        communities: [
            { name: "Mobile Developer Community", link: "https://linktr.ee/mdcommunity" },
        ],
    },
];
