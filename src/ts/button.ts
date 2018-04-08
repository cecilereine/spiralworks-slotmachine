import * as PIXI from 'pixi.js'



// button.x = canvasWidthHeight / 2;
// button.y = canvasWidthHeight - 10;

export class Button {

    public button = new PIXI.Sprite();
   // public _text = new PIXI.Text();

    constructor(label: string, xPos: number, yPos: number, stage: PIXI.Container) {
        
        this.button = PIXI.Sprite.fromImage('../../resources/grey_button06.png')

        this.button.anchor.set(0.5);

        this.button.x = xPos;
        this.button.y = yPos;

        this.button.interactive = true;
        this.button.buttonMode = true;

        let _text = new PIXI.Text(label, {
            fontFamily : 'Arial',
            fontSize: 24,
            fill : 0x000000, align : 'center'
        } );

        _text.anchor.x = _text.anchor.y = 0.5;

        this.button.addChild(_text);
    
        stage.addChild(this.button);
    }
}