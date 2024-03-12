import {
  CHARACTER_MARKER,
  DESCRIPTION_MARKER,
  STOP_MARKER,
} from "../constants.js";
import { extractElements } from "./utils.js";

/**
 * Character class.
 */
export class Character {
  /**
   * Name of the character.
   */
  name: string;

  /**
   * A single sentence describing the character.
   */
  description: string;

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }

  static fromString(text: string): Character | null {
    const elements = text.split(DESCRIPTION_MARKER);
    if (elements.length === 2) {
      let [name, description] = elements;
      name = name.trim();
      description = description.trim();
      return new this(name, description);
    }
    return null;
  }
}

export const getCharacterDescription = (character: Character): string =>
  character.description;

/**
 * Characters class, containing main characters and their descriptions.
 */
export class Characters {
  /**
   * An object containing the main characters and their descriptions.
   */
  characterDescriptions: Record<string, string>;

  constructor(characterDescriptions: Record<string, string>) {
    this.characterDescriptions = characterDescriptions;
  }

  /**
   * Parses the characters from the generated text.
   */
  static fromString(text: string): Characters {
    const newText = text.trim();

    // Extract the character descriptions.
    const characterDescriptions: Record<string, string> = {};
    const elements = extractElements(newText, CHARACTER_MARKER, STOP_MARKER);

    for (const textCharacter of elements) {
      const character = Character.fromString(textCharacter);
      if (character) {
        characterDescriptions[character.name] = character.description;
      }
    }

    return new this(characterDescriptions);
  }
}

export const getCharacterDescriptions = (
  character: Characters
): Record<string, string> => character.characterDescriptions;
