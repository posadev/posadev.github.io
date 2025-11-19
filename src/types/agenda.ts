import {IRoom, IRoomData, ISession} from "@/types/speakers.ts";

export interface IAgenda {
    timeSlots: ITimeSlot[]
    rooms: IRoomData[]
}

export interface ITimeSlot {
    slotStart: string
    rooms: IRoomAgenda[]
}

export interface IRoomAgenda extends IRoom {
    session: ISession
}
