import { END_MARKER, TITLE_ELEMENT } from "../constants.js";
import { extractElements } from "./utils.js";

/**
 * Title class.
 */
export class Title {
  title: string;

  constructor(title: string) {
    this.title = title;
  }

  static fromString(text: string): Title {
    const title = extractElements(text, TITLE_ELEMENT, END_MARKER)[0];
    return new this(title);
  }

  toString(): string {
    return `
${TITLE_ELEMENT} ${this.title}
${END_MARKER}
    `;
  }
}

export const getTitle = (title: Title): string => title.title;
