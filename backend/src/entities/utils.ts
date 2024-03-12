/**
 * Extracts elements from a text string given string and ending markers.
 *
 * @param {string} text
 * @param {string} begin
 * @param {string} end
 * @returns {Array<string>} The extracted elements.
 */
export const extractElements = (
  text: string,
  begin: string,
  end: string
): string[] => {
  const results: string[] = [];
  let start = 0;
  const shouldLoop = true;
  while (shouldLoop) {
    start = text.indexOf(begin, start);
    if (start === -1) {
      return results;
    }
    const finish = text.indexOf(end, start);
    if (finish === -1) {
      return results;
    }
    results.push(text.substring(start + begin.length, finish).trim());
    start = finish + end.length;
  }
  return results;
};
