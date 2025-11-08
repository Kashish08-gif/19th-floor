window.addEventListener('DOMContentLoaded', () => {
  const door = document.querySelector('#door');
  const doorAudioEntity = document.querySelector('#doorAudioEntity');
  const bgmSound = document.querySelector('#bgmSound');
  let bgmStarted = false;
  let doorOpen = false;

  // Start creepy sound only after first click
  function startBgm() {
    if (!bgmStarted && bgmSound?.components?.sound) {
      bgmSound.components.sound.playSound();
      bgmStarted = true;
    }
  }

  // Play door sound
  function playDoorSound() {
    return ;
    if (doorAudioEntity?.components?.sound) {
      doorAudioEntity.components.sound.playSound();
    }
  }

  // Open door + allow player to go through
  function openDoor() {
    if (doorOpen) return;
    doorOpen = true;

    // Animate door rotation (open)
    door.setAttribute('animation__open', {
      property: 'rotation',
      to: '0 90 0',
      dur: 1200,
      easing: 'easeInOutQuad'
    });

    // Play sound
    playDoorSound();

    // After door opens, remove collision so player can walk through
    setTimeout(() => {
      door.setAttribute('visible', false);
      console.log("Door is open. Player can go outside.");
    }, 1200);
  }

  // Click anywhere to start BGM
  document.body.addEventListener('click', startBgm, { once: true });

  // Click door to open
  door.addEventListener('click', () => {
    startBgm();
    openDoor();
  });
});
