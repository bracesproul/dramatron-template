import { RunnableConfig } from "@langchain/core/runnables";
import { ChatAnthropic } from "@langchain/anthropic";
import { Prefixes, PromptPrefixes } from "./prefixes/types.js";
import { PREFIXES } from "./prefixes/index.js";
import {
  Characters,
  Place,
  Scene,
  Scenes,
  Story,
  Title,
  getCharacterDescriptions,
} from "./entities/index.js";

interface StoryGeneratorFields {
  /**
   * The language model to use for generating the story.
   */
  llm: ChatAnthropic;
  /**
   * The "log line" aka the initial, short description of the story
   * to generate.
   */
  storyline: string;
  /**
   * The prompt prefix to use for generating the story.
   */
  prefixes: Prefixes;
}

/**
 * Generate a story from the provided storyline, using the LLM provided.
 */
export class StoryGenerator {
  llm: ChatAnthropic;

  levelNames: string[] = [
    "storyline",
    "title",
    "characters",
    "scenes",
    "places",
    "dialogs",
  ];

  prompts: {
    title: string;
    characters: string;
    scenes: string;
    places: Array<string>;
    dialogs: Array<string>;
  };

  interventions: Record<number, string>;

  /**
   * The level the story generator is on.
   */
  _level: number;

  _title: Title;

  _characters: Characters;

  _scenes: Scenes;

  _places: Record<string, Place>;

  _dialogs: Array<string>;

  _storyline: string;

  _prefixes: PromptPrefixes;

  constructor(fields: StoryGeneratorFields) {
    this.llm = fields.llm;
    this._storyline = fields.storyline;

    const prefixes = PREFIXES[fields.prefixes];
    this._prefixes = prefixes;

    //  Prompts and outputs of the hierarchical generator are organized in levels.
    this.prompts = {
      title: "",
      characters: "",
      scenes: "",
      places: [],
      dialogs: [],
    };
    this._title = new Title("");
    this._characters = new Characters({ "": "" });
    this._scenes = new Scenes([new Scene("", "", "")]);
    this._places = { "": new Place("", "") };
    this._dialogs = [""];

    // History of interventions.
    this.interventions = {};
    this._setStoryline(fields.storyline);
  }

  /**
   * Set storyline and initialize the outputs of the generator.
   * @param {string} storyline
   */
  private _setStoryline(storyline: string) {
    throw new Error("Method 'graph' not implemented.");
  }

  async step(
    level?: number,
    seed?: number,
    idx?: number,
    config?: RunnableConfig
  ): Promise<boolean> {
    throw new Error("Method 'graph' not implemented.");
  }

  getStory() {
    let characterDescriptions: Record<string, string> = {};
    if (this._characters) {
      characterDescriptions = getCharacterDescriptions(this._characters);
    }

    return new Story({
      storyline: this._storyline,
      title: this._title.title,
      characterDescriptions,
      placeDescriptions: this._places,
      scenes: this._scenes,
      dialogs: this._dialogs,
    });
  }
}
