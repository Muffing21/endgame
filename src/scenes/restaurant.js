class restaurant extends Phaser.Scene {
    constructor() {
        super('restaurantScene');
    }

    preload(){
        this.load.image('cook_idle', './assets/temp.png');
        //this.load.spritesheet('cook_idle', './assets/Idle_Sprite_Sheet.png', {frameWidth: 256, frameHeight: 256, startFrame: 0, endFrame: 1});
    }

    create(){
        const gui = new dat.GUI();

        // variables and settings
        this.AVATAR_SCALE = 0.25;
        this.VELOCITY = 150;
        this.ROOMWIDTH = 512;
        this.ROOMHEIGHT = 336;
    
         // Set background color
         this.cameras.main.setBackgroundColor('#666');

         // Set main camera to be 3 rooms wide, 2 rooms tall
         this.cameras.main.setBounds(0, 0, this.ROOMWIDTH, this.ROOMHEIGHT*2);
 
         // Everything is 1:1 scale
         this.cameras.main.setZoom(1.0);
     
         // setScroll moves the viewport to the starting room (1 down, 1 over)
         this.cameras.main.setScroll(this.ROOMWIDTH, this.ROOMHEIGHT);
 
         gui.addFolder("Main Camera");
         gui.add(this.cameras.main, 'scrollX');
         gui.add(this.cameras.main, 'scrollY');
         gui.add(this.cameras.main, 'zoom');

         this.add.image(this.ROOMWIDTH, 0, 'LoZ-overworld-up').setOrigin(0);
         this.add.image(this.ROOMWIDTH, this.ROOMHEIGHT, 'LoZ-overworld').setOrigin(0);


         // Set up animations
        this.createAnimations();

        this.player = this.physics.add.sprite(this.ROOMWIDTH*1.5, this.ROOMHEIGHT*1.5, 'link_atlas', 'idle_down_0001').setScale(this.AVATAR_SCALE);


    
    }

















}