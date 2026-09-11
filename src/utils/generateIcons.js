// A predefined set of fun and recognizable emojis to use as card icons. 
export const emojiSet = [
  "🍎", "🐶", "🚀", "🎈", "🏀", "🌟", "🍕", "🐸",
  "🎸", "🚲", "🐧", "🎁", "🧩", "📚", "🦄", "🍩",
  "📱", "🎮", "🍔", "🐱", "🎯", "🥇", "💡", "🧠", 
  "🌍", "🎨", "🎵", "⚽", "🛸", "🍪", "🐼", "🎃",
  "🕹️", "🎬", "📷", "🍣",
]

// Function to generate a set of random emojis based on the requested count.
const generateIcons = (count) => {
  // Makes a shallow copy of the emoji set
  const shuffled = [...emojiSet]
    //Shuffles the copy using a simple random sort
    .sort(() => 0.5 - Math.random())
  //Returns the first `count` emojis from the shuffled result
  return shuffled.slice(0, count)
}

export default generateIcons
