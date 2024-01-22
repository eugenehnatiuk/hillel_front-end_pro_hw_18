export { countWords };

function countWords(text) {
  // const textArray = text.split(' ');
  const textArray = text.split(/\s+/);

  const wordsMap = new Map();

  for (const element of textArray) {
    if (!element.trim()) {
      continue;
    }
    let count = 1;
    if (wordsMap.has(element)) {
      count = wordsMap.get(element) + 1;
      wordsMap.set(element, count);
    } else {
      wordsMap.set(element, count);
    }
  }
  return wordsMap.size > 0 ? wordsMap : null;
}
