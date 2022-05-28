class ingredients extends Phaser.Scene{
    constructor(){
        super("ingredientsScene");
    }
    
    preload(){
        this.load.path = 'assets/';
        this.load.image('background','LoZ-overworld-up.gif');
        this.load.image('character','temp.png');
        this.load.image('temp_bg', 'temp_bg.png');
    }
    

    create(data){
        this.count=0;
        this.score=0;
        
        this.AVATAR_SCALE = 0.25;
        this.ROOMWIDTH = 1024;
        this.ROOMHEIGHT = 672;

        //config for texts
        let scoreConfig = {
            fontFamily: 'serif',
            fontSize: '16px',
            backgroundColor: '#ADD8E6',
            color: '#000000',
            align: 'right',
            padding: {
                top: 10,
                bottom: 10,
            },
            //fixedWidth: 
        }

        // this.anims.create({
        //     key: 'pour_milk'
        //     frames: this.anims.generateFrameNumbers('pour_milk', {frames:})
        // })
        this.add.image(this.ROOMWIDTH, 0,'temp_bg').setOrigin(0);
        //game.physics.startSystem(Phaser.Physics.ARCADE);
        //this.scoreText=this.add.text(20,20,'SCORE:0', scoreConfig);
        this.cashier=this.physics.add.sprite(150,300,'stir');
        this.cashier.body.immovable =true;
        this.fruit=this.physics.add.image(150 ,50,'egg').setScale(this.AVATAR_SCALE).setInteractive({draggable: true});
        this.food=this.physics.add.image(200,50,'milk').setScale(this.AVATAR_SCALE).setInteractive({draggable: true});
        
        
        this.fruit.setVelocity(300 ,200);
        this.fruit.setBounce(1,1);
        this.fruit.setCollideWorldBounds(true);
        
        this.food.setVelocity(100,200);
        this.food.setBounce(1,1);
        this.food.setCollideWorldBounds(true);

        //animation
        this.anims.create({
            key: 'milk',
            frames: this.anims.generateFrameNumbers('milk', {frames: [0, 1, 2, 3]}),
            framerate: 8,
            repeat: 0
        });

        this.anims.create({
            key: 'egg',
            frames: this.anims.generateFrameNumbers('egg', {frames: [0, 1, 2]}),
            framerate: 6,
            repeat: 0
        });


        this.fruit.on('drag',function(pointer,dragX,dragY){
            //this.setVelocity(0,0);
            this.x=dragX;
            this.y=dragY;
        });
        
        this.food.on('drag',function(pointer,dragX,dragY){
            this.x=dragX;
            this.y=dragY;
        });
        //this.physics.add.existing(this.fruit);
        //this.physics.add.existing(this.cashier);
        //this.physics.add.existing(this.food);

        //this.fruit.body.setCollideWorldBounds(true);
        this.physics.add.collider(this.fruit,this.cashier);
        this.physics.add.collider(this.food,this.cashier);
        
        
        

        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);

        

        this.add.text(20,config.height/2+100, 'Drag and drop the ingredients.',scoreConfig);
        this.add.text(20, config.height/2+150, 'Press Space to stir once you dropped all the ingredients',scoreConfig);

        
        //this.cashier=this.add.image(0,0,'character');
        this.time = data;
        scoreConfig.color = '#FFFF00';
        this.currentTime = this.add.text(20, 20, this.time, scoreConfig);
        //this.physics.add.overlap(this.fruit,this.cashier);
        
    }

    update(time, delta){

        console.log(this.time);
        this.time += delta;
        this.currentTime.text = (this.time/1000).toFixed(2);


        this.physics.add.overlap(this.fruit, this.cashier, function (fruit, cashier) {
            
            //cashier.destroy();
            this.count++;
           //this.scoreText.setText('SCORE:'+this.count);
           
           this.fruit.destroy();
        }, null, this);

        this.physics.add.overlap(this.food, this.cashier, function (food, cashier) {
            
            //cashier.destroy();
            this.count++;
            //this.food.anims.play('milk');
           //this.scoreText.setText('SCORE:'+this.count);
           this.food.destroy();
           //this.food.setVelocity(0,0);
           
        }, null, this);


        if(Phaser.Input.Keyboard.JustDown(keySPACE)){
            this.scene.start('stirScene', this.time);
        }
        if(Phaser.Input.Keyboard.JustDown(keyZ)){
            this.scene.start('restaurantScene');
        }
    }
    reset(){
        this.fruit.x=100;
        this.fruit.y=50;
    }
}