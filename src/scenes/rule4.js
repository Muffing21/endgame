class Rule4 extends Phaser.Scene {
    constructor() {
        super("rule4Scene");
    }


    preload() {
        // load music audio
        // this.load.image('menucreator', './assets/intro1.png');
        //image
        this.load.image('cake', './assets/CakedecorResized.png');

        //load the background image.
        this.load.image('kitchenBackground', './assets/kitchentable.png');
        
    }

    create (){
        //place background
        this.add.tileSprite(0, 0, 1200, 700, 'kitchenBackground').setOrigin(0, 0);

        let titleConfig = {
            fontFamily: 'Pangolin',
            fontSize: '28px',
            color: '#ffa90a',
            align: 'right',
            stroke: '#ff1493',
            strokeThickness: 6, 
            fixedWidth: 0,
        }

        let text1Config = {
            fontFamily: 'Pangolin',
            fontSize: '20px',
            color: '#461B7E',
            align: 'right',
            stroke: '#ff1493',
            strokeThickness: 6, 
            fixedWidth: 0,
        }
        
        let creditConfig = {
            color: '#CD00CD',
            fontFamily: 'Pangolin',
            fontSize: '20px',
            stroke: '#FFFFFF', 
            strokeThickness: 3,
            align: 'left',
            fixedWidth: 0,
        } 

        //menu text UI
        let centerX = game.config.width / 2;
        let centerY = game.config.height / 2;

        //First Step
        this.add.text(centerX, centerY -120, 'Third Step: Design Your Own Cake', titleConfig).setOrigin(0.5);
        this.add.text(centerX, centerY -90, 'Now you have a perfect cake, but it is not finish yet', text1Config).setOrigin(0.5);
        this.add.text(centerX, centerY - 60, 'Based on the customer requirement, you need to decorate the cake by add candy, flower.', text1Config).setOrigin(0.5);
        this.add.text(centerX, centerY - 30, 'You will get a rating for what you made to master the skills of Bake.', text1Config).setOrigin(0.5);
        this.add.text(centerX, centerY, 'Good Luck! Enjoy the game!', text1Config).setOrigin(0.5);

        this.add.image(centerX, centerY +130, 'cake').setOrigin(0.5);

        //type space for next rule
        this.add.text(centerX, centerY + 300, '[ Press (SPACE) for menu and Start the Game ]', creditConfig).setOrigin(0.5);
        //keyboard input
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        //keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

    }

    update (){
        if (Phaser.Input.Keyboard.JustDown(keySPACE)){
            this.scene.start('menuScene');
        }
        // if (Phaser.Input.Keyboard.JustDown(keyA)){
        //     this.scene.start('titleScene');
        // }
    }
}