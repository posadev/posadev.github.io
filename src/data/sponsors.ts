import {ISponsor} from "@/types/types.ts";
import zillow from "@/img/sponsors/zillow.png"
import howdy from "@/img/sponsors/howdy.png"

export const sponsors: Array<ISponsor> = [
    {
        id: "sponsor-1",
        name: "Zillow",
        image: zillow,
        isPaid: false,
        type: "gold"
    },
    {
        id: "sponsor-2",
        name: "Howdy",
        image: howdy,
        isPaid: false,
        type: "silver"
    }
]