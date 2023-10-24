

(() => {
  console.log("IIFE Fired");
  
  // variables
  const model = document.querySelector("#model");
  const hotSpots = document.querySelectorAll;(".Hotspot");

  // functions
  function loaded () {
    // console.log(hotSpots);
    hotSpots.ForEach(hotSpot => {
      hotSpot.style.display = "block";
    })
  }

  function showInfo(e) {
    console.log(e.currentTarget.slot);
    let selected = document.querySelector('button[slot="${e.currentTarget.slot}"]');
  }

  function showInfo(e) {
    console.log(e.currentTarget.slot);
  }

  // event listeners
  model.addEventListener("load", loaded);
  hotSpots.ForEach(hotSpot => {
    hotSpot.addEventListener("mouseover", showInfo);
    hotSpot.addEventListener("mouseover", hideInfo);
  })
  
})();