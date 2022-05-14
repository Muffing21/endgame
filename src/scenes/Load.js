class Load extends Phaser.Scene {
    constructor() {
        super('loadScene');
    }

    preload() {
        // set load path
        this.load.path = 'assets/';
        // Load all assets here.
        // Since the asset keys can be used in any scene, can load here
        // and use in any other scene

        // Load atlas here
        this.load.image('LoZ-overworld', 'LoZ-overworld-1.gif');
        this.load.image('LoZ-overworld-up', 'LoZ-overworld-up.gif');
        this.load.image('test','temp.png');
        this.load.image('block', 'block.png');
        this.load.image('recipe', 'recipe.png');
        this.load.image('cooking_bg', 'cooking_bg.jpg')
    }

    create() {
        // ...and pass to the next Scene
        this.scene.start('restaurantScene');
    }
}