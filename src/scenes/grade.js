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
        this.defaultTime = 30000;
        this.score = 1;
        keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);

    }


    update(){
        if(this.time <= this.defaultTime){
            this.add.text(config.width/2, config.height/2, 'S RANK IN BAKING', scoreConfig).setOrigin(0.5);
            if(Phaser.Input.Keyboard.JustDown(keyZ)){
                this.music.stop();
                this.scene.start('restaurantScene');
            }
        }
        if(this.time > this.defaultTime && this.time <= this.defaultTime+5000){
            this.add.text(config.width/2, config.height/2, 'A RANK IN BAKING', scoreConfig).setOrigin(0.5);
        }
        if(this.time > this.defaultTime+5000 && this.time <=this.defaultTime+10000){
            this.add.text(config.width/2, config.height/2, 'A- RANK IN BAKING', scoreConfig).setOrigin(0.5);
        }
        if(this.time > this.defaultTime+10000 && this.time <= this.defaultTime+15000){
            this.add.text(config.width/2, config.height/2, 'B RANK IN BAKING', scoreConfig).setOrigin(0.5);
        }
        if(this.time > this.defaultTime+15000 && this.time <= this.defaultTime+20000){
            this.add.text(config.width/2, config.height/2, 'B- RANK IN BAKING', scoreConfig).setOrigin(0.5);

        }


    }

}