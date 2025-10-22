import {ISponsor} from "@/types/types.ts";
import zillow from "@/img/sponsors/zillow.png"

export const sponsors: Array<ISponsor> = [
    {
        id: "sponsor-1",
        name: "Zillow",
        image: zillow,
        isPaid: true
    },
    {
        id: "sponsor-2",
        name: "Howdy",
        image: "https://via.placeholder.com/150",
        isPaid: true
    }
]