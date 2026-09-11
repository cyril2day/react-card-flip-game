// Flag to prevent multiple overlapping flip sounds from playing at once
let soundQueued = false;

// Function to play a flip sound once, with optional custom audio file
const playFlipSoundOnce = (audioFile = "/sounds/flip.wav") => {
  // If a sound is already queued to play, exit early to avoid overlap
  if (soundQueued) return;

  // Set the flag to true so no other sound can be queued simultaneously
  soundQueued = true;

  // Use requestAnimationFrame to 
  // the sound plays in sync with the next frame
  requestAnimationFrame(() => {
    // Create a new Audio object using the specified or default file
    const audio = new Audio(audioFile);

    // Play the audio
    audio.play();

    // Reset the flag after the sound is queued to allow future sounds
    soundQueued = false;
  });
}

export default playFlipSoundOnce;