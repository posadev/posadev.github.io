import { ISponsor } from "@/types/types.ts";
import zillow from "@/img/sponsors/zillow.png";
import atdac from "@/img/sponsors/atdac.png";

export const sponsors: Array<ISponsor> = [
    {
        id: "zillow",
        name: "Zillow",
        image: zillow,
        isPaid: true,
        type: "diamond",
    },
    {
        id: "atdac",
        name: "ATDAC",
        image: atdac,
        isPaid: true,
        type: "silver",
    },
];
