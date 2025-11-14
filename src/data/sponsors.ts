import {ISponsor} from "@/types/types.ts";
import zillow from "@/img/sponsors/zillow.png"
import howdy from "@/img/sponsors/howdy.png"
import koch from "@/img/sponsors/Koch.png"
import akamai from "@/img/sponsors/akamai.png"
import sps from "@/img/sponsors/sps.png"

export const sponsors: Array<ISponsor> = [
    {
        id: "sponsor-1",
        name: "Zillow",
        image: zillow,
        isPaid: true,
        type: "diamond"
    },
    {
        id: "sponsor-2",
        name: "Howdy",
        image: howdy,
        isPaid: true,
        type: "diamond"
    },
    {
        id: "sponsor-3",
        name: "Koch",
        image: koch,
        isPaid: true,
        type: "silver"
    },
    {
        id: "sponsor-4",
        name: "Akamai",
        image: akamai,
        isPaid: true,
        type: "gold"
    },
    {
        id: "sponsor-5",
        name: "SPS",
        image: sps,
        isPaid: true,
        type: "bronze"
    }
]