(function () {
  "use strict";

  var backButton = document.querySelector("[data-back-button]");

  if (!backButton) {
    return;
  }

  backButton.addEventListener("click", function (event) {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();

    if (window.history.length > 1) {
      window.history.back();
      return;
    }

    window.location.assign(backButton.href);
  });
})();
