import flashcards from "./flashcards.json";

// Sort flashcards alphabetically by "word"
const sortedFlashcards = [...flashcards].sort((a, b) =>
  a.word.localeCompare(b.word)
);

export default sortedFlashcards;
