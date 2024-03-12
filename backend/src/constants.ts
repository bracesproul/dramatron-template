export const END_MARKER = "**END**";
export const STOP_MARKER = "\n";
export const CHARACTER_MARKER = "**Character:** ";
export const DESCRIPTION_MARKER = "**Description:** ";
export const SCENES_MARKER = "**Scenes:**";
export const DIALOG_MARKER = "**Dialog:**";
export const LOGLINE_MARKER = "**Logline:** ";
export const TITLE_ELEMENT = "Title: ";
export const CHARACTERS_ELEMENT = "Characters: ";
export const DESCRIPTION_ELEMENT = "Description: ";
export const PLACE_ELEMENT = "Place: ";
export const PLOT_ELEMENT = "Plot element: ";
export const PREVIOUS_ELEMENT = "Previous beat: ";
export const SUMMARY_ELEMENT = "Summary: ";
export const BEAT_ELEMENT = "Beat: ";
export const LOGLINE_ELEMENT = "Logline: ";

export const DEFAULT_SEED = 1;
// Sampling top-p probability (default: 0.9) and temperature (default 1.0)
export const SAMPLING_PROB = 0.9;
export const SAMPLING_TEMP = 1;
// Max length for the generated title, place description and others, in tokens (defaults: 64, 128 and 511 respectively)
export const SAMPLE_LENGTH_TITLE = 64;
export const SAMPLE_LENGTH_PLACE = 128;
export const SAMPLE_LENGTH = 511;
// Max lengths during repeated sampling, in case `<end>` is not found (default: 2048)
export const MAX_PARAGRAPH_LENGTH_CHARACTERS = 1024;
export const MAX_PARAGRAPH_LENGTH_SCENES = 1024;
export const MAX_PARAGRAPH_LENGTH = 1024;
// Unavailable API: max number of retries before giving up (default: 10)
export const MAX_RETRIES = 10;
// Loop detection: max number of repetitions before resampling, and number of attempts to get out of the loop (default: 3)
export const MAX_NUM_REPETITIONS = 3;
export const MAX_NUM_ATTEMPTS_GET_OUT_OF_LOOP = 3;
