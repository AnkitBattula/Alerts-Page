function playAlertSound() {
  var audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
  audio.play();
}

// Call the sound whenever a transaction happens
fetch('https://YOUR_GOOGLE_SCRIPT_URL')
  .then(response => response.json())
  .then(data => {
    if (data.newTransaction) {
      playAlertSound();
    }
  });
