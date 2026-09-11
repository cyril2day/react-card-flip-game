// Function to shuffle an array using the Fisher-Yates algorithm
const shuffleDeck = (deck) => {
  // Create a shallow copy of the deck so the original deck isn't modified
  const shuffled = [...deck]

  // Iterate backwards through the array
  for (let i = shuffled.length - 1; i > 0; i--) {
    // Generate a random index from 0 to i (inclusive)
    const j = Math.floor(Math.random() * (i + 1));

    // Swap the elements at index i and j
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }

  // Return the shuffled array
  return shuffled
}

export default shuffleDeck
