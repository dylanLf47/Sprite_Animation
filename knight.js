class knight {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./KnightRun.png"), 0, 0, 120, 85, 10, 0.05);

        this.x = -180;
        this.y = -160;
        this.speed = 250;
    };

    update() {
        this.x += this.speed * this.game.clockTick;
        if (this.x > 1024) this.x = -180;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
        //ctx.drawImage(ASSET_MANAGER.getAsset("./KnightRun.png"),0,0);
    };
}