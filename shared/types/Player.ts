import { randomUUID } from "crypto"

export type Player = {
    id: String,
    name: String,
}

export const newPlayer= (name: String) => {
    const result: Player = {
        id: randomUUID(),
        name: name,
    };
    return result;
}