/**
 * Created by Carlos on 12/14/2015.
 */
var animator = {

    context: null,
    alpha: 0,
    fadeIn: true,
    text: "Hello World",

    // image
    helloWorldImage: new Image(),

    setup: function(contextIn, animloop) {
        this.context = contextIn;

        this.helloWorldImage.src =  "images/html5bg.jpg";

        this.helloWorldImage.onload = function () {
            animloop();
        }
    },

    drawScreen: function() {
        // background
        this.context.globalAlpha = 1;
        this.context.fillStyle = "#000000";
        this.context.fillRect(0, 0, 640, 480);

        // image
        this.context.globalAlpha = .25;
        this.context.drawImage(this.helloWorldImage, 0, 0);

        // fade in/out
        if (this.fadeIn) { 
            this.alpha += .01;
            if (this.alpha >= 1) {
                this.alpha = 1;
                this.fadeIn = false;
            }
        } else {
            this.alpha -= .01;
            if (this.alpha <= 0) {
                this.alpha = 0;
                this.fadeIn = true;
            }
        }

        this.context.globalAlpha = this.alpha;

        // text
        this.context.fillStyle = "#ffffff";
        this.context.font = "72px Sans-Serif";
        this.context.textBaseline = "top";
        this.context.fillText(this.text, 150, 200)
    }
}