paper.install(window);
$(document).ready(function () {
    // Get a reference to the canvas object
    // Create an empty project and a view for the canvas:
    paper.setup('mainCanvas');

    function setCanvas() {
        var cont = document.getElementById("mainContainer");
        view.viewSize = [$(cont).width(), $(cont).height() + parseFloat($(cont).css('padding-top')) + parseFloat($(cont).css('padding-bottom'))];
    };
    $(window).resize(setCanvas);
    setCanvas();

    // The amount of circles we want to make:
    var count = 150;

    // Place the instances of the symbol:
    for (var i = 0; i < count; i++) {
        var path = new Path.Circle({
            center: [Math.random() * view.size.width, Math.random() * view.size.height],
            radius: 15,
        });
        path.scale(Math.random() + 0.2);
        path.fillColor = new Color(Math.random(), Math.random(), Math.random(), 0.4);
    }
    view.draw();

    view.onFrame = function (event) {
        // Run through the active layer's children list and change
        // the position of the placed symbols:
        for (var i = 0; i < count; i++) {
            var item = project.activeLayer.children[i];

            // Move the item 1/20th of its width to the right. This way
            // larger circles move faster than smaller circles:
            item.position.x += item.bounds.width / 20;

            // If the item has left the view on the right, move it back
            // to the left:
            if (item.bounds.left > view.size.width) {
                item.position.x = -item.bounds.width;
            }
        }
    }

});
