/** 7/15/2020 Move out of inline script **/
function canvasApp(canvasTag) {

    var Debugger = function() {
    };
    Debugger.log = function (message){
        try {
            console.log(message);
        }
        catch (exception) {
            return;
        }
    };

    var theCanvas = document.getElementById(canvasTag);

    function CanvasSupport() {
        if (!theCanvas || !theCanvas.getContext) {
            return false;
        }
        return true;
    }

    if (!CanvasSupport()) {
        return;
    }

    var context = theCanvas.getContext("2d");

    window.requestAnimationFrame = (function() {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000/60);
            };
    })();

    var theAnimator = animator; //TODO: Consider making a constructor

    function animloop() {
        requestAnimationFrame(animloop);
        theAnimator.drawScreen(context);
    }

    theAnimator.setup(context, animloop);

    Debugger.log("Drawing Canvas");
}