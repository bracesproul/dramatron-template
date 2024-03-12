export type PromptPrefixKeys =
  | "CHARACTERS_PROMPT"
  | "SCENE_PROMPT"
  | "SETTING_PROMPT"
  | "TITLES_PROMPT"
  | "DIALOG_PROMPT";

export type PromptPrefixes = {
  CHARACTERS_PROMPT: string;
  SCENE_PROMPT: string;
  SETTING_PROMPT: string;
  TITLES_PROMPT: string;
  DIALOG_PROMPT: string;
};

export type Prefixes = "medeaPrefixes" | "scifiPrefixes" | "customPrefixes";
