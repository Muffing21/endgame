class grade extends Phaser.Scene {
    constructor() {
        super('gradeScene');
    }

    preload(){
        this.load.path = 'assets/';

        this.load.image('invisWall', 'invisWall2.png');
        this.load.image('gamebar', 'gamebar.png');
        this.load.image('gamebar2', 'gamebar2.png');
    }

    create(data){
        this.time = data;
        this.score = 1;
        keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);

    }


    update(){
        if(this.time <= 90000){
            this.add.text(config.width/2, config.height/2, 'S RANK IN BAKING', scoreConfig).setOrigin(0.5);
            if(Phaser.Input.Keyboard.JustDown(keyZ)){
                this.music.stop();
                this.scene.start('restaurantScene');
            }
        }
        if(this.time > 90000 && this.time <= 95000){
            this.add.text(config.width/2, config.height/2, 'A RANK IN BAKING', scoreConfig).setOrigin(0.5);
        }
        if(this.time > 95000 && this.time <=100000){
            this.add.text(config.width/2, config.height/2, 'A- RANK IN BAKING', scoreConfig).setOrigin(0.5);
        }
        if(this.time > 100000 && this.time <= 105000){
            this.add.text(config.width/2, config.height/2, 'B RANK IN BAKING', scoreConfig).setOrigin(0.5);
        }
        if(this.time > 105000 && this.time <= 110000){
            this.add.text(config.width/2, config.height/2, 'B- RANK IN BAKING', scoreConfig).setOrigin(0.5);

        }


    }

}