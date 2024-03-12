import { customPrefixes } from "./custom.js";
import { medeaPrefixes } from "./media.js";
import { scifiPrefixes } from "./sci-fi.js";
import { Prefixes, PromptPrefixes } from "./types.js";

export const PREFIXES: Record<Prefixes, PromptPrefixes> = {
  medeaPrefixes,
  scifiPrefixes,
  customPrefixes,
};
