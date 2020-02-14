(()=> {
  // variable stack first
  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener("transitionend", removePlayingClass))

  function removePlayingClass(event) {
    // remove the css rules we applied on keypress -> make it look unselected again
    event.target.classList.remove('playing');

  }

  function playSound(event) {
    //event is the event object that gets generated when you push any key
    //it contains all kinds of information about the event -> the target, what called it,
    //where it happened in the app etc

    //find the audio element that matches the keyboard pressed, and make it play
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`),
          key = document.querySelector(`div[data-key="${event.keyCode}"]`);

    // the ! is a test for inequality -> if this expression is NOT true, then do something
    // also called a bang operator
    if (!audio) { return } // a return is a way to stop function execution -> basically
                          // means stop the code here

    audio.currentTime = 0;
    audio.play();

    key.classList.add('playing')
  }

  // listen for the keyboard event, and then do something with it
  window.addEventListener ('keydown',playSound);


})();
