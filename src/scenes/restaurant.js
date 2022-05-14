class restaurant extends Phaser.Scene {
    constructor() {
        super('restaurantScene');
    }

    // preload(){
    //     //load
    //     //this.load.atlas('link_atlas', 'linksheet.png', 'linkmap.json');
    //     this.load.image('LoZ-overworld', 'LoZ-overworld-1.gif');
    //     this.load.image('LoZ-overworld-up', 'LoZ-overworld-up.gif');
    //     this.load.image('test','temp.png');
    // }

    create() {
        const gui = new dat.GUI();

        // variables and settings
        this.AVATAR_SCALE = 0.25;
        this.VELOCITY = 150;
        this.ROOMWIDTH = 512;
        this.ROOMHEIGHT = 336;

        // Set background color
        this.cameras.main.setBackgroundColor('#666');

        // Set main camera to be 3 rooms wide, 2 rooms tall
        this.cameras.main.setBounds(0, 0, this.ROOMWIDTH*3, this.ROOMHEIGHT*2);

        // Everything is 1:1 scale
        this.cameras.main.setZoom(1.0);
    
        // setScroll moves the viewport to the starting room (1 down, 1 over)
        this.cameras.main.setScroll(this.ROOMWIDTH, this.ROOMHEIGHT);

        gui.addFolder("Main Camera");
        gui.add(this.cameras.main, 'scrollX');
        gui.add(this.cameras.main, 'scrollY');
        gui.add(this.cameras.main, 'zoom');

        // Add overworld background images
        //this.add.image(0, this.ROOMHEIGHT, 'LoZ-overworld-left').setOrigin(0);
        this.add.image(this.ROOMWIDTH, this.ROOMHEIGHT, 'LoZ-overworld').setOrigin(0);
        //this.add.image(this.ROOMWIDTH*2, this.ROOMHEIGHT, 'LoZ-overworld-right').setOrigin(0);
        //this.add.image(0, 0, 'LoZ-overworld-upleft').setOrigin(0);
        this.add.image(this.ROOMWIDTH, 0, 'LoZ-overworld-up').setOrigin(0);
        // this.add.image(this.ROOMWIDTH*2, 0, 'LoZ-overworld-upright').setOrigin(0);

        // Set up animations
        //this.createAnimations();

        // make player avatar 🧍
        this.player = this.physics.add.sprite(this.ROOMWIDTH*1.5, this.ROOMHEIGHT*1.5, 'test').setScale(this.AVATAR_SCALE);
        this.player.body.allowGravity = false;
        this.player.body.setCollideWorldBounds(true);
        this.player.body.onWorldBounds = true;
        this.playerCollide = this.add.group();
        this.playerCollide.add(this.player);

        //make collision group
        this.block = this.add.group();

        //make collision blocks
        this.solidBlock = this.physics.add.image(this.ROOMWIDTH-this.player.displayWidth/2, this.ROOMHEIGHT-this.player.displayHeight/2, 'block').setOrigin(0);
        this.solidBlock.body.immovable = true;
        this.solidBlock.body.allowGravity = false;
        this.block.add(this.solidBlock);

        this.solidBlock2 = this.physics.add.image(this.ROOMWIDTH+this.player.displayWidth*18, this.ROOMHEIGHT+this.player.displayHeight/2, 'block');
        this.solidBlock2.body.immovable = true;
        this.solidBlock2.body.allowGravity = false;
        this.block.add(this.solidBlock2);

        this.recipeCollide = this.add.group();
        this.recipe = this.physics.add.image(this.ROOMWIDTH*1.5, this.ROOMHEIGHT*0.5, 'recipe').setScale(this.AVATAR_SCALE);
         this.recipe.body.immovable = true;
         this.recipe.body.allowGravity = false;
        this.recipeCollide.add(this.recipe);
        
        this.collided = false;
        //collider
        
        this.physics.add.collider(this.player, this.recipeCollide);
        this.physics.add.existing(this.player);
        this.physics.add.existing(this.recipe);
        this.physics.add.collider(this.player, this.block);


        this.showRecipe = false;

        // set world boundaries
        this.physics.world.setBounds(this.ROOMWIDTH-this.player.displayWidth/2, this.ROOMHEIGHT-this.player.displayHeight/2, 
            this.ROOMWIDTH+this.player.displayWidth, this.ROOMHEIGHT+this.player.displayHeight/2);
        
            //var roomHeight = this.ROOMHEIGHT*2;
            //var roomWidth = this.ROOMWIDTH *1.5;

        this.cameras.main.shake(250);
        this.cameras.main.flash(250);
        this.physics.world.on('worldbounds', (body, blockedUp, blockedDown, blockedLeft, blockedRight) => {
            if (blockedUp) {
                this.cameras.main.pan(
                    this.ROOMWIDTH*1.5,
                    this.ROOMHEIGHT*0.5,
                    3000,
                    'Linear'
                );
                this.physics.world.setBounds(this.ROOMWIDTH-this.player.displayWidth/2, 0, 
                    this.ROOMWIDTH+this.player.displayWidth, this.ROOMHEIGHT+this.player.displayHeight/2);
                }
                
            if(blockedDown){
                this.cameras.main.pan(
                    this.ROOMWIDTH*1.5, 
                    this.ROOMHEIGHT*2,
                    3000, 
                    'Linear');
                    this.physics.world.setBounds(this.ROOMWIDTH+this.player.displayWidth/2, this.ROOMHEIGHT-this.player.displayHeight/2, 
                    this.ROOMWIDTH+this.player.displayWidth, this.ROOMHEIGHT+this.player.displayHeight/2);
                }

            
        });

        // Use Phaser-provided cursor key creation function
        cursors = this.input.keyboard.createCursorKeys();

    }

    update() {

        let scoreConfig = {
            fontFamily: 'serif',
            fontSize: '28px',
            backgroundColor: '#ADD8E6',
            color: '#843605',
            align: 'right',
            padding: {
                top: 10,
                bottom: 10,
            },
            //fixedWidth: 
        }

        // check keyboard input
        if(cursors.left.isDown) {
            this.player.body.setVelocity(-this.VELOCITY, 0);

            //this.player.anims.play('run_left', true);

        } else if(cursors.right.isDown) {
            this.player.body.setVelocity(this.VELOCITY, 0);
            //this.player.anims.play('run_right', true);

        } else if(cursors.up.isDown) {
            this.player.body.setVelocity(0, -this.VELOCITY);
            //this.player.anims.play('run_up', true);

        } else if(cursors.down.isDown) {
            this.player.body.setVelocity(0, this.VELOCITY);
           // this.player.anims.play('run_down', true);

        } else if (!cursors.right.isDown && !cursors.left.isDown && !cursors.up.isDown && !cursors.down.isDown) {
            this.player.body.setVelocity(0, 0);

            if (this.player.anims.isPlaying && this.player.anims.currentAnim.key === 'run_left') {
                //this.player.anims.play('idle_left');
            }
            if (this.player.anims.isPlaying && this.player.anims.currentAnim.key === 'run_right') {
               //this.player.anims.play('idle_right');
            }
            if (this.player.anims.isPlaying && this.player.anims.currentAnim.key === 'run_up') {
                //this.player.anims.play('idle_up');
            }
            if (this.player.anims.isPlaying && this.player.anims.currentAnim.key === 'run_down') {
                //this.player.anims.play('idle_down');
            }

            
        }

        
        if(this.physics.add.overlap(this.player, this.recipeCollide)){
            console.log('collided');
            this.add.text(game.config.width/2, game.config.height/2, "Chocolate Cake Recipe:", scoreConfig).setOrigin(0.5);
        }
           


        // wrap physics object(s) .wrap(gameObject, padding)
        this.physics.world.wrap(this.player, 0);
    }
}