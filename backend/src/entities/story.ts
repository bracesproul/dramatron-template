import { Place } from "./place.js";
import { Scenes } from "./scene.js";

interface StoryFields {
  storyline: string;
  title: string;
  characterDescriptions: Record<string, string>;
  placeDescriptions: Record<string, Place>;
  scenes: Scenes;
  dialogs: Array<string>;
}

/**
 * Story class
 */
export class Story {
  // A storyline is a single sentence summary of the whole plot.
  storyline: string;

  /**
   * A title for the story.
   */
  title: string;

  /**
   * Object of character names and full descriptions.
   */
  characterDescriptions: Record<string, string>;

  /**
   * Object of place names and full descriptions.
   */
  placeDescriptions: Record<string, Place>;

  /**
   * List of scenes.
   */
  scenes: Scenes;

  /**
   * List of dialogs, one for each scene
   */
  dialogs: Array<string>;

  constructor(fields: StoryFields) {
    this.storyline = fields.storyline;
    this.title = fields.title;
    this.characterDescriptions = fields.characterDescriptions;
    this.placeDescriptions = fields.placeDescriptions;
    this.scenes = fields.scenes;
    this.dialogs = fields.dialogs;
  }
}
