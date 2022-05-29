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

        // Load bg
        this.load.image('LoZ-overworld', 'LoZ-overworld-1.gif');
        this.load.image('LoZ-overworld-up', 'LoZ-overworld-up.gif');
        this.load.image('test','temp.png');
        this.load.image('block', 'block.png');
        this.load.image('recipe', 'recipe.png');
        this.load.image('cooking_bg', 'cooking_bg.jpg');
        this.load.image('temp_bg', 'temp_bg.png');
        this.load.image('kitchen', 'kitchen.png');
        this.load.image('kitchenTable', 'kitchenTable.png');
        this.load.image('kitchenRotated', 'kitchenRotated.png');
        this.load.image('longWall', 'longwall.png');
        
        //character
        this.load.spritesheet('idle', 'idle.png', {frameWidth: 256, frameHeight: 256, startFrame: 0, endFrame: 1});
        this.load.spritesheet('walk_up', 'walk_up.png', {frameWidth: 256, frameHeight: 256, startFrame: 0, endFrame: 3});
        this.load.spritesheet('walk_left', 'walk_left.png', {frameWidth: 256, frameHeight: 256, startFrame: 0, endFrame: 3});
        this.load.spritesheet('walk_right', 'walk_right.png', {frameWidth: 256, frameHeight: 256, startFrame: 0, endFrame: 3});
        this.load.spritesheet('walk_down', 'walk_down.png', {frameWidth: 256, frameHeight: 256, startFrame: 0, endFrame: 3});

        //sprites for ingredients scene
        this.load.spritesheet('salt', 'salt.png', {frameWidth: 256, frameHeight: 256, startFrame: 0, endFrame: 3});
        this.load.spritesheet('soda', 'soda.png', {frameWidth: 256, frameHeight: 256, startFrame: 0, endFrame: 3});
        this.load.spritesheet('vanilla', 'vanilla.png', {frameWidth: 256, frameHeight: 256, startFrame: 0, endFrame: 3});
        this.load.spritesheet('bp', 'bp.png', {frameWidth: 256, frameHeight: 256, startFrame: 0, endFrame: 3});
        this.load.spritesheet('butter', 'butter.png', {frameWidth: 256, frameHeight: 256, startFrame: 0, endFrame: 3});
        this.load.spritesheet('stir', 'stir.png', {frameWidth: 256, frameHeight: 256, startFrame: 1, endFrame: 5});
        this.load.spritesheet('egg', 'egg.png', {frameWidth: 256, frameHeight: 256, startFrame: 0, endFrame: 2});
        this.load.spritesheet('milk', 'milk.png', {frameWidth: 256, frameHeight: 256, startFrame: 0, endFrame: 3});
    }

    create() {
        // ...and pass to the next Scene
        this.scene.start('restaurantScene');
    }
}