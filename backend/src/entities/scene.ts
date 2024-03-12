import {
  PLACE_ELEMENT,
  PLOT_ELEMENT,
  BEAT_ELEMENT,
  END_MARKER,
} from "../constants.js";
import { extractElements } from "./utils.js";
import { Place } from "./place.js";

/**
 * Scene class.
 */
export class Scene {
  /**
   * The name of the place where the scene unfolds.
   */
  place: string;

  /**
   * Name of the plot element (e.g., Beginning, Middle, Conclusion).
   */
  plotElement: string;

  /**
   * A short description of action/story/dramatic event occurring in the scene.
   */
  beat: string;

  constructor(place: string, plotElement: string, beat: string) {
    this.place = place;
    this.plotElement = plotElement;
    this.beat = beat;
  }

  toString(): string {
    let s = `${PLACE_ELEMENT} ${this.place}\n`;
    s += `${PLOT_ELEMENT} ${this.plotElement}\n`;
    s += `${BEAT_ELEMENT} ${this.beat}\n`;
    return s;
  }
}

/**
 * Scenes class.
 */
export class Scenes {
  /**
   * A list of scenes, with place, characters, plot element, and beat.
   */
  scenes: Scene[];

  constructor(scenes: Scene[]) {
    this.scenes = scenes;
  }

  static fromString(text: string): Scenes {
    const places = extractElements(text, PLACE_ELEMENT, PLOT_ELEMENT);
    const plotElements = extractElements(text, PLOT_ELEMENT, BEAT_ELEMENT);
    const beats = extractElements(text, BEAT_ELEMENT, "\n");

    // Get the number of complete scenes.
    const numCompleteScenes = Math.min(
      places.length,
      plotElements.length,
      beats.length
    );
    const scenes: Scene[] = [];
    for (let i = 0; i < numCompleteScenes; i += 1) {
      scenes.push(
        new Scene(Place.formatName(places[i]), plotElements[i], beats[i])
      );
    }
    return new this(scenes);
  }

  toString(): string {
    let s = "";
    for (const scene of this.scenes) {
      s += `\n${scene.toString()}`;
    }
    s += END_MARKER;
    return s;
  }

  numPlaces(): number {
    const uniquePlaces = new Set(this.scenes.map((scene) => scene.place));
    return uniquePlaces.size;
  }

  numScenes(): number {
    return this.scenes.length;
  }
}
