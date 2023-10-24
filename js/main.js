

(() => {
  console.log("IIFE Fired");
  
  // variables
  const model = document.querySelector("#model");
  const HotSpots = document.querySelectorAll;(".Hotspot");

  // functions

  function loaded () {
    // console.log(hotSpots);
    HotSpots.forEach(HotSpot =>{
      HotSpot.style.display = "block";
    });
  }

  // event listeners
  model.addEventListener("load", loaded);

  HotSpots.forEach(hotSpot => {
    HotSpot.addEventListener("mouseover", showInfo);
    HotSpot.addEventListener("mouseover", hideInfo);
  })
  
})();