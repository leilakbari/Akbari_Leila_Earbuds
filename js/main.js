// Handles loading the events for <model-viewer>'s slotted progress bar
// const onProgress = (event) => {
//   const progressBar = event.target.querySelector('.progress-bar');
//   const updatingBar = event.target.querySelector('.update-bar');
//   updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
//   if (event.detail.totalProgress === 1) {
//     progressBar.classList.add('hide');
//     event.target.removeEventListener('progress', onProgress);
//   } else {
//     progressBar.classList.remove('hide');
//   }
// };
// document.querySelector('model-viewer').addEventListener('progress', onProgress);

(() => {
  console.log("IIFE Fired");
  
  // variables
  const model = document.querySelector("#model");
  const hotSpots = document.querySelectorAll;(".Hotspot");

  // functions
  function loaded () {
    console.log(hotSpots);

  }

  // event listeners
  model.addEventListener("load", loaded);
  
})();