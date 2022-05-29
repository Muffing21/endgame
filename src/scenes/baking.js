class baking extends Phaser.Scene{
    constructor(){
        super("bakingScene")

    }
    preload(){
        this.load.path = 'assets/';
        this.load.image('mb','movingblock.png');
        this.load.image('a','invisible_block.png');
        this.load.image('rd', 'red_block.png');
        this.load.image('bar','bar.png');
    }
    

    create(data){
        //this.add.image(600,40,'background');
        var position_value = Phaser.Math.Between(0, 600);
        
        this.a = false;
        this.count=0;
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
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
        this.block = this.add.image(300,40,'bar');
        this.rd=this.physics.add.image(position_value,40,'rd');
        this.mb=this.physics.add.image(300,40,'mb');
        //this.i_1=this.physics.add.image(0,40,'a');
        //this.i_2=this.physics.add.image(600,40,'a');
        this.scoreText=this.add.text(20,90,'SCORE:0', scoreConfig);
        this.physics.add.collider(this.mb,this.i_1);
        this.physics.add.collider(this.mb,this.i_2);
        this.mb.setVelocity(400,0);
        this.mb.setBounce(1,1);
        this.mb.setCollideWorldBounds(true);
        this.physics.add.overlap(this.mb, this.rd);
        //this.mb.setBounce(1,1);

        this.time = data;
        scoreConfig.color = '#FFFF00';
        this.currentTime = this.add.text(20, 20, this.time, scoreConfig);
    }

    update(time, delta){

        //timer
        this.time += delta;
        this.currentTime.text = (this.time/1000).toFixed(2);


        this.a = this.mb.body.touching.none ? false :true;
        if(Phaser.Input.Keyboard.JustDown(keySPACE) && this.a){
            //this.count++;
            //this.scoreText.setText('SCORE:'+this.count);
            this.scene.start('gradeScene', this.time);
        }
    }

}