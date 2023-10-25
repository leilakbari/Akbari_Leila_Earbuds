(() => {
  console.log("IIFE Fired");
  
  // variables
  const model = document.querySelector("#model");
  const hotSpots = document.querySelectorAll(".Hotspot");

  // const hotspotContent = [
  //   {
  //     title: "Comfortable Rubber",
  //     description:
  //       "Comfortable Rubber is a silicone material that helps to keep the earbuds in the ear and at the same time it feels very comfortable and prevents them from falling.",
  //   },
  //   {
  //     title: "Silver Plating",
  //     description:
  //       "Silver Plating is a shiny Silver plate surface that places around the earbuds and protects the earbuds body from damage.",
  //   },
  //   {
  //     title: "Green Body",
  //     description:
  //       "Green Body is the other part of the earbuds surface which the color reminds us of nature. Because nature is the first source for hearing beautiful and incredible sounds.",
  //   },
  //   {
  //     title: "Speaker",
  //     description:
  //       "Speaker part places around the earbuds surface and with its high technology, it creates a three-dimensional listening experience.",
  //   },
  //   {
  //     title: "Charging Port",
  //     description:
  //       "Charging Port is a part of earbuds that charges them by placing them in their box.",
  //   },
  //   {
  //     title: "Finger Holder",
  //     description:
  //       "Finger Holder is at the upper part of the earbuds, which helps to hold and place them in the ear more easily with its indentation.",
  //   },
  // ];

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