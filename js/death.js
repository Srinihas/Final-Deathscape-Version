class Death {
    constructor (speed) {
        this.speed = speed;
        this.damage = deathDamage;

        this.isPointing = "NaN";
    }

    start() {
        player.play();

        // this.inGame(this.speed);
    }

    // inGame(speedSpace) {
    //     if (frameCount % 60 === 0) {
    //         push();

    //         if (this.sprite.position.x >= windowWidth || this.sprite.position.y >= windowHeight) {
    //             this.repeat();
    //         }

    //         var x = Math.round(random(1, 4));
    
    //         if (x == 3) {
    //             this.isPointing = "LEFTWALL";
    //         } else if (x === 1) {
    //             this.isPointing = "RIGHTWALL";
    //         } else if (x === 2) {
    //             this.isPointing = "TOPWALL";
    //         } else {
    //             this.isPointing = "BOTTOMWALL";
    //         }

    //         if (this.isPointing === "BOTTOMWALL") {
    //             this.sprite.velocityY += speedSpace;
    //         } else if (this.isPointing === "TOPWALL") {
    //             this.sprite.velocityY -= speedSpace;
    //         } else if (this.isPointing === "RIGHTWALL") {
    //             this.sprite.velocityX += speedSpace;
    //         } else {
    //             this.sprite.velocityX -= speedSpace;
    //         }

    //         pop();

    //     }
    // }

    // repeat() {
        
    //     push();

    //     var y = Math.round(random(1, 4));
    
    //     if (y == 3) {
    //         this.isPointing = "LEFTWALL";
    //     } else if (y === 1) {
    //         this.isPointing = "RIGHTWALL";
    //     } else if (y === 2) {
    //         this.isPointing = "TOPWALL";
    //     } else {
    //         this.isPointing = "BOTTOMWALL";
    //     }

    //     if (this.isPointing === "BOTTOMWALL") {
    //         this.sprite.velocityY += speedSpace;
    //     } else if (this.isPointing === "TOPWALL") {
    //         this.sprite.velocityY -= speedSpace;
    //     } else if (this.isPointing === "RIGHTWALL") {
    //         this.sprite.velocityX += speedSpace;
    //     } else {
    //         this.sprite.velocityX -= speedSpace;
    //     }

    //     pop();

    // }

}