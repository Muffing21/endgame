class stir extends Phaser.Scene{
    constructor(){
        super("stirScene")
        //this.cursors=this.scene.input.keyboard.createCursorKeys()
        this.counter=0;
        this.up_pressed=false;
        this.down_pressed=false;
        this.left_pressed=false;
        this.right_pressed=false;
    }
    
    // preload(){
    //     this.load.path = 'assets/';
    //     this.load.image('background','LoZ-overworld-up.gif');
    //     this.load.image('character','temp.png');
    // }
    create(){
        keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 100
        }
        this.counter_text=this.add.text(100,300,this.counter,scoreConfig);
        this.add.text(200,300, 'press left, up, right,\nand down arrow to stir');

        //add bowl
        this.bowl = this.add.sprite(config.width/2, config.height/2, 'stir');

        //create our animation
        this.anims.create({
            key: 'stir',
            frames: this.anims.generateFrameNumbers('stir', {frames: [1, 2, 3, 4, 5]}),
            framerate: 12,
            repeat: 0
        });
        
    }
    update(){
        
        
        if(Phaser.Input.Keyboard.JustDown(keyUp)&&this.right_pressed==false&&this.left_pressed==false&&this.up_pressed==false&&this.down_pressed==false){
            this.counter++;
            this.counter_text.text=this.counter;
            this.up_pressed=true;
            this.bowl.anims.play('stir');

        }
        if(Phaser.Input.Keyboard.JustDown(keyRight)&&this.right_pressed==false&&this.left_pressed==false&&this.up_pressed==true&&this.down_pressed==false){
            this.counter++;
            this.counter_text.text=this.counter;
            this.right_pressed=true;


        }
        if(Phaser.Input.Keyboard.JustDown(keyDown)&&this.right_pressed==true&&this.left_pressed==false&&this.up_pressed==true&&this.down_pressed==false){
            this.counter++;
            this.counter_text.text=this.counter;
            this.down_pressed=true;

        }
        if(Phaser.Input.Keyboard.JustDown(keyLeft)&&this.right_pressed==true&&this.left_pressed==false&&this.up_pressed==true&&this.down_pressed==true){
            this.counter++;
            this.counter_text.text=this.counter;
            this.up_pressed=false;
            this.right_pressed=false;
            this.down_pressed=false;
            
        }
    }
}