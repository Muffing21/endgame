class ingredients extends Phaser.Scene{
    constructor(){
        super("ingredientsScene");
    }
    
    preload(){
        this.load.path = 'assets/';
        this.load.image('background','LoZ-overworld-up.gif');
        this.load.image('character','temp.png');
    }
    

    create(){
        this.count=0;
        this.score=0;
        
        this.AVATAR_SCALE = 0.25;
        this.ROOMWIDTH = 512;
        this.ROOMHEIGHT = 336;

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
        this.add.image(this.ROOMWIDTH, this.ROOMHEIGHT,'background').setOrigin(0);
        //game.physics.startSystem(Phaser.Physics.ARCADE);
        this.scoreText=this.add.text(20,20,'SCORE:0', scoreConfig);
        this.cashier=this.add.sprite(150,300,'stir');

        this.fruit=this.add.image(150 ,50,'egg').setScale(this.AVATAR_SCALE).setInteractive({draggable: true});
        this.food=this.add.image(200,50,'milk').setScale(this.AVATAR_SCALE).setInteractive({draggable: true});


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
                this.x=dragX;
                this.y=dragY;
        });
        this.food.on('drag',function(pointer,dragX,dragY){
            this.x=dragX;
            this.y=dragY;
        });
        this.physics.add.existing(this.fruit);
        this.physics.add.existing(this.cashier);
        this.physics.add.existing(this.food);

        this.fruit.body.setCollideWorldBounds(true);
        this.physics.add.collider(this.fruit,this.cashier);
        this.physics.add.collider(this.food,this.cashier);

        

        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);

        

        this.add.text(200,200, 'press Space to stir the ingredients or z to go back',scoreConfig);
        
        //this.cashier=this.add.image(0,0,'character');

        //this.physics.add.overlap(this.fruit,this.cashier);
        
    }

    update(){

        this.physics.add.overlap(this.fruit, this.cashier, function (fruit, cashier) {
            
            //cashier.destroy();
            this.count++;
           this.scoreText.setText('SCORE:'+this.count);
           
           this.fruit.destroy();
        }, null, this);

        this.physics.add.overlap(this.food, this.cashier, function (food, cashier) {
            
            //cashier.destroy();
            this.count++;
            //this.food.anims.play('milk');
           this.scoreText.setText('SCORE:'+this.count);
           this.food.destroy();
        }, null, this);


        if(Phaser.Input.Keyboard.JustDown(keySPACE)){
            this.scene.start('stirScene');
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