/**
 * Dramatron Generator
 */

import { RunnableConfig } from "@langchain/core/runnables";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { ChatAnthropic } from "@langchain/anthropic";
import { Place } from "./entities/place.js";
import { Scene, Scenes } from "./entities/scene.js";
import { PromptPrefixKeys } from "./prefixes/types.js";
import { Title } from "./entities/title.js";
import { Characters } from "./entities/character.js";

interface GenerateTextInput {
  generationPrompt: Array<ChatPromptTemplate>;
  llm: ChatAnthropic;
  seed?: number;
}

/**
 * Generate text using the generation prompt.
 * @param {GenerateTextInput} input
 * @param {RunnableConfig} config
 */
export async function generateText(
  input: GenerateTextInput,
  config?: RunnableConfig
): Promise<string> {
  throw new Error("Function 'generateText' not implemented.");
}

interface GenerateTitleInput {
  storyline: string;
  prefixes: Record<PromptPrefixKeys, string>;
  llm: ChatAnthropic;
  seed?: number;
}

/**
 * Generate a title given a storyline, and client.
 * @param {GenerateTitleInput} input
 * @param {RunnableConfig} config
 */
export async function generateTitle(
  input: GenerateTitleInput,
  config?: RunnableConfig
): Promise<[Title, string]> {
  throw new Error("Function 'generateText' not implemented.");
}

interface GenerateCharactersInput {
  storyline: string;
  prefixes: Record<PromptPrefixKeys, string>;
  llm: ChatAnthropic;
  seed?: number;
}

/**
 * Generate characters given a storyline, prompt, and client.
 * @param {GenerateCharactersInput} input
 * @param {RunnableConfig} config
 */
export async function generateCharacters(
  input: GenerateCharactersInput,
  config?: RunnableConfig
): Promise<[Characters, string]> {
  throw new Error("Function 'generateText' not implemented.");
}

interface GenerateScenesInput {
  storyline: string;
  characterDescriptions: Record<string, string>;
  prefixes: Record<PromptPrefixKeys, string>;
  llm: ChatAnthropic;
  seed?: number;
}

/**
 * Generate scenes given storyline, prompt, main characters, and client.
 * @param {GenerateScenesInput} input
 * @param {RunnableConfig} config
 */
export async function generateScenes(
  input: GenerateScenesInput,
  config?: RunnableConfig
): Promise<[Scenes, string]> {
  throw new Error("Function 'generateText' not implemented.");
}

interface GeneratePlaceDescriptionsInput {
  storyline: string;
  scenes: Scenes;
  prefixes: Record<PromptPrefixKeys, string>;
  llm: ChatAnthropic;
  seed?: number;
}

/**
 * Generate a place description given a scene object and a client.
 * @param {GeneratePlaceDescriptionsInput} input
 * @param {RunnableConfig} config
 */
export async function generatePlaceDescriptions(
  input: GeneratePlaceDescriptionsInput,
  config?: RunnableConfig
): Promise<[Record<string, Place>, Array<string>]> {
  throw new Error("Function 'generateText' not implemented.");
}

interface GenerateDialogInput {
  storyline: string;
  scenes: Array<Scene>;
  characterDescriptions: Record<string, string>;
  placeDescriptions: Record<string, Place>;
  prefixes: Record<PromptPrefixKeys, string>;
  llm: ChatAnthropic;
  seed?: number;
}

/**
 * Generate dialog given a scene object and a client.
 * @param {GenerateDialogInput} input
 * @param {RunnableConfig} config
 */
export async function generateDialog(
  input: GenerateDialogInput,
  config?: RunnableConfig
): Promise<[string, string]> {
  throw new Error("Function 'generateText' not implemented.");
}
