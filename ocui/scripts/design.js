(function () {
  'use strict';

  function init() {
      var spinnerOptions = {
        width: 4,
        radius: 10,
        length: 7,
        color: '#FAC51D'
      }

      var spinnerTarget = document.getElementById("spinner");
      new Spinner(spinnerOptions).spin(spinnerTarget);
  }

  $(function () {
    init();
  });
})();
