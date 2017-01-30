

module.exports = {
  clickFunc: function() {
    // draw first level path design
    document.getElementById("bgimg").style.display = "none";
    document.getElementById("lv1").style.display = "block";

    main();
    initFiring();

  }
};
