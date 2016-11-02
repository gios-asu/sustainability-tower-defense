

module.exports = {
  clickFunc: function() {
    // draw first level path design
    document.getElementById("bgimg").style.display = "none";
    document.getElementById("lv1").style.display = "block";
    // Get a reference to the canvas object
    paper.install(window);//needed to do animiation
    //var canvas = document.getElementById('myCanvas');
    paper.setup("myCanvas");
    main();
    // Draw the view now:
    //paper.view.draw();
  }
};



