(() => {
  console.log("IIFE Fired");
  
  // variables
  const model = document.querySelector("#model");
  const hotSpots = document.querySelectorAll(".Hotspot");

  // functions
  function loaded () {
    // console.log(hotSpots);
    hotSpots.forEach(hotSpot => {
      hotSpot.style.display = "block";
    })
  }

  function showInfoOnMouseOver(e) {
    console.log(e.currentTarget.slot);
    let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div `);
    gsap.to(selected, 1, {autoAlpha:1});
  }

  function hideInfoOnMouseOut(e) {
    console.log(e.currentTarget.slot);
    let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div `);
    gsap.to(selected, 1, {autoAlpha:0});
  }

  // event listeners
  model.addEventListener("load", loaded);
  hotSpots.forEach(hotSpot => {
    hotSpot.addEventListener("mouseover", showInfoOnMouseOver);
    hotSpot.addEventListener("mouseout", hideInfoOnMouseOut);
  })

})();