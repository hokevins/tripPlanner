var markerFactory = {
  createHotelMark: function() {
    const markerDomEl = document.createElement("div");
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
    return markerDomEl;
  },
  createActivityMark: function() {
    const markerDomEl = document.createElement("div");
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
    return markerDomEl;
  },
  createRestaurantMark: function() {
    const markerDomEl = document.createElement("div");
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
    return markerDomEl;
  }
};

module.exports = markerFactory;
