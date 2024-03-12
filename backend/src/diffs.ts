import * as diff from "diff";
import { Scene } from "./entities/scene.js";

/**
 * Return a text diff on prompt sets `promptBefore` and `promptAfter`.
 * @param promptBefore
 * @param promptAfter
 * @returns {string}
 */
export function diffPromptChangeString(
  promptBefore: string,
  promptAfter: string
): string {
  // For the current element, compare prompts line by line.
  const diffResult = diff.diffLines(promptBefore, promptAfter);
  let diffStr = "";

  for (const part of diffResult) {
    if (part.added) {
      diffStr += `+${part.value}`;
    } else if (part.removed) {
      diffStr += `-${part.value}`;
    }
  }

  return diffStr;
}

/**
 * Return a text diff on prompt sets `promptBefore` and `promptAfter`.
 * @param promptBefore
 * @param promptAfter
 * @returns {string}
 */
export function diffPromptChangeArray(
  promptBefore: string[],
  promptAfter: string[]
): string {
  // Handle deletions and insertions.
  const lenBefore = promptBefore.length;
  const lenAfter = promptAfter.length;
  if (lenBefore > lenAfter) {
    return "Deleted element";
  }
  if (lenBefore < lenAfter) {
    return "Added new element";
  }

  const diffs = promptBefore.map((a, index) =>
    diffPromptChangeString(a, promptAfter[index])
  );
  return diffs.filter((diff) => diff.length > 0).join("\n");
}

/**
 * Return a text diff on prompt sets `promptBefore` and `promptAfter`.
 * @param promptBefore
 * @param promptAfter
 * @returns {string}
 */
export function diffPromptChangeScenes(
  promptBefore: Scene[],
  promptAfter: Scene[]
): string {
  // Handle deletions and insertions.
  const lenBefore = promptBefore.length;
  const lenAfter = promptAfter.length;
  if (lenBefore > lenAfter) {
    return "Deleted element";
  }
  if (lenBefore < lenAfter) {
    return "Added new element";
  }
  const diffs = promptBefore.map((a, i) => {
    const b = promptAfter[i];
    return diffPromptChangeArray(
      [a.place, a.plotElement, a.beat],
      [b.place, b.plotElement, b.beat]
    );
  });
  return diffs.filter((diff) => diff.length > 0).join("\n");
}

/**
 * Return a text diff on prompt sets `promptBefore` and `promptAfter`.
 * @param promptBefore
 * @param promptAfter
 * @returns {string}
 */
export function diffPromptChangeObject(
  promptBefore: { [key: string]: string },
  promptAfter: { [key: string]: string }
): string {
  // Loop over the keys in the prompts to compare them one by one.
  const keysBefore = Object.keys(promptBefore).sort();
  const keysAfter = Object.keys(promptAfter).sort();
  const diffKeys = keysBefore
    .map((key, index) => diffPromptChangeString(key, keysAfter[index]))
    .filter((diff) => diff.length > 0)
    .join("\n");

  // Loop over the values in the prompts to compare them one by one.
  const valuesBefore = Object.values(promptBefore).sort();
  const valuesAfter = Object.values(promptAfter).sort();
  const diffValues = valuesBefore
    .map((value, index) => diffPromptChangeString(value, valuesAfter[index]))
    .filter((diff) => diff.length > 0)
    .join("\n");

  return diffKeys + diffValues;
}
