class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        //load the background image.
        this.load.image('menu_bg', './assets/menu_bg.png');
    }

    create() {
        // menu text configuration
        let titleConfig1 = {
            fontFamily: 'Pangolin',
            fontSize: '50px',
            //backgroundColor: '#39FF14',
            color: '#9ACD32',
            align: 'right',
        }

        let titleConfig2 = {
            fontFamily: 'Pangolin',
            fontSize: '32px',
            color: '#228B22',
            align: 'right',
        }

        //menu text UI
        let centerX = game.config.width / 2;
        let centerY = game.config.height / 2;

        //add background music
        // this.music = this.sound.add('menu_bgm', {mute: false, volume: 1.0, rate: 1, loop: true});
        // this.music.play();
        
        //show background
        this.add.tileSprite(0, 0, 1200, 700, 'menu_bg').setOrigin(0, 0);

        // show menu text
        this.add.text(centerX, centerY/3 - borderUISize - borderPadding, 'CMPM120 EndGame!', titleConfig1).setOrigin(0.5);
        // this.add.text(centerX-80, centerY/2 + 90, 'Press S for Credits', titleConfig2).setOrigin(0.5);
        // this.add.text(centerX-80, centerY/2 + 45, 'Press W for Game Introduction', titleConfig2).setOrigin(0.5);
        this.add.text(centerX-80, centerY/2, 'Press SPACE to Play', titleConfig2).setOrigin(0.5);

        // define keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        // keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        // KeyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        
    }

    update() {
        //Space to start the game
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            //this.music.stop();
            this.scene.start("loadScene");
        }
        //working now
        // //W for rule page
        // if(Phaser.Input.Keyboard.JustDown(KeyW)){
        //     this.music.stop();
        //     this.scene.start("ruleScene");
        // }
        // //S for rule page
        // if(Phaser.Input.Keyboard.JustDown(keyS)){
        //     //this.music.play();
        //     this.music.stop();
        //     this.scene.start("creatorScene");
        // }
        } 
    }