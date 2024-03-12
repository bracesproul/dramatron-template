import {
  END_MARKER,
  DESCRIPTION_ELEMENT,
  PLACE_ELEMENT,
} from "../constants.js";
import { extractElements } from "./utils.js";

/**
 * Place class.
 */
export class Place {
  /**
   * Place name.
   */
  name: string;

  /**
   * Place description.
   */
  description: string;

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }

  static formatName(name: string): string {
    let newName = name.trim();
    if (!newName.endsWith(".")) {
      newName += ".";
    }
    return newName;
  }

  static fromString(placeName: string, placeText: string): Place {
    let newPlaceName = placeName.trim();
    newPlaceName += END_MARKER;
    const description = extractElements(
      placeText,
      DESCRIPTION_ELEMENT,
      END_MARKER
    )[0];
    return new this(newPlaceName, description);
  }

  static formatPrefix(name: string): string {
    return `${PLACE_ELEMENT}${name}\n${DESCRIPTION_ELEMENT}`;
  }

  toString(): string {
    return `${Place.formatPrefix(this.name)}${this.description}\n\n`;
  }
}

export const getPlaceDescription = (place: Place): string => place.description;
