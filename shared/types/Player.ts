import { randomUUID } from "crypto"

export type Player = {
    id: string,
    name: string,
}

export const newPlayer= (name: string) => {
    const result: Player = {
        id: randomUUID(),
        name: name,
    };
    return result;
}