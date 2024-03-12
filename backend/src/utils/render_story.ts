import { PLACE_ELEMENT, PLOT_ELEMENT, BEAT_ELEMENT } from "constants.js";
import { Scene, Story, getPlaceDescription } from "entities/index.js";
import { stripRemoveEnd } from "./strip_end.js";

export function renderStory(story: Story): string {
  const lines: string[] = [];
  lines.push(`Title: ${story.title}`);
  lines.push("Author: Co-written by ________ and Dramatron");
  lines.push(
    "Dramatron was developed by Piotr Mirowski and Kory W. Mathewson, " +
      "with additional contributions by Juliette Love and Jaylen Pittman, " +
      "and is based on a prototype by Richard Evans."
  );
  lines.push("Dramatron relies on user-provided language models.");
  lines.push("");
  lines.push("====");
  lines.push("");
  lines.push(`The script is based on the storyline:\n${story.storyline}`);
  lines.push("");
  if (story.characterDescriptions !== undefined) {
    for (const [name, description] of Object.entries(
      story.characterDescriptions
    )) {
      lines.push(`${name}: ${description}`);
    }
    lines.push("");
  }
  // For each scene, render scene information.
  let scenes: Scene[];
  if (story.scenes !== undefined) {
    scenes = story.scenes.scenes;
    for (let i = 0; i < scenes.length; i += 1) {
      const scene = scenes[i];
      lines.push(`Scene ${i + 1}`);
      lines.push(`${PLACE_ELEMENT}${scene.place}`);
      lines.push(`${PLOT_ELEMENT}${scene.plotElement}`);
      lines.push(`${BEAT_ELEMENT}${scene.beat}`);
      lines.push("");
    }
  } else {
    scenes = [];
  }
  lines.push("====");
  lines.push("");
  // For each scene, render the scene's place description, characters and dialog.
  for (let i = 0; i < scenes.length; i += 1) {
    const scene = scenes[i];
    // Output the places and place descriptions.
    lines.push(`INT/EXT. ${scene.place} - Scene ${i + 1}`);
    const { placeDescriptions } = story;
    if (
      !placeAppearsEarlier(scene.place, story, i) &&
      placeDescriptions !== undefined &&
      scene.place in placeDescriptions
    ) {
      lines.push("");
      lines.push(getPlaceDescription(placeDescriptions[scene.place]));
    }
    // Output the characters and descriptions.
    lines.push("");
    for (const c of Object.keys(story.characterDescriptions)) {
      if (scene.beat.includes(c) && !characterAppearsEarlier(c, story, i)) {
        lines.push(story.characterDescriptions[c]);
      }
    }
    // Output the dialog.
    if (story.dialogs !== undefined && story.dialogs.length > i) {
      lines.push("");
      const linesDialog = stripRemoveEnd(String(story.dialogs[i]));
      lines.push(linesDialog);
    }
    lines.push("");
    lines.push("");
  }
  return lines.join("\n");
}

function placeAppearsEarlier(
  place: string,
  story: Story,
  index: number
): boolean {
  for (let i = 0; i < index; i += 1) {
    const scene = story.scenes.scenes[i];
    if (scene.place === place) {
      return true;
    }
  }
  return false;
}

function characterAppearsEarlier(
  character: string,
  story: Story,
  index: number
): boolean {
  for (let i = 0; i < index; i += 1) {
    const scene = story.scenes.scenes[i];
    if (scene.beat.includes(character)) {
      return true;
    }
  }
  return false;
}
