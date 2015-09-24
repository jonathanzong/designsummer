$(document).ready(function () {
    function setCanvas() {
        var canvas = document.getElementById("mainCanvas");
        canvas.width = $(canvas).parent().width();
        canvas.height = $(canvas).parent().height() + parseFloat($(canvas).parent().css('padding-top')) + parseFloat($(canvas).parent().css('padding-bottom'));
    }
    $(window).resize(setCanvas);
    setCanvas();
});
