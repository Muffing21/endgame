let config = {
    type: Phaser.AUTO,
    width: 512,
    heigth: 336,
    physics: {
        default: "arcade"
    },
    scene: [kitchen, restaurant, cooking]
}


let game = new Phaser.Game(config);

let cursors;