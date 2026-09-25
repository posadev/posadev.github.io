import { ISponsor } from "@/types/types.ts";
import zillow from "@/img/sponsors/zillow.png";

export const sponsors: Array<ISponsor> = [
    {
        id: "zillow",
        name: "Zillow",
        image: zillow,
        isPaid: true,
        type: "diamond",
    },
];
