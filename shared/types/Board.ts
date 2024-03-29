import { randomUUID } from "crypto";
import { Character, CharacterState } from "./Character"

export type Board = {
    id : string,
    characters : CharacterState[],
}

export const newBoard = (characters?: Character[]): Board => {
    const board: Board = {
        id: randomUUID(),
        characters: Array.from(characters || DEFAULT_CHARACTERS, (character) => ({
        character,
        isVisible: true,
      })),
    };
  
    return board;
  };

export const setAllCharactersToVisible = (board: Board): Board => {
    const updatedCharacters = Array.from(board.characters, (characterState) => ({
      ...characterState,
      isVisible: true,
    }));
  
    return {
      ...board,
      characters: updatedCharacters,
    };
  };

const DEFAULT_CHARACTERS = [
    {
        name: "TODO",
        image: "TODO"
    }
]

