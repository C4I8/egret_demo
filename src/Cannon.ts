class Cannon extends egret.Sprite {
	public constructor() {
		super();
		this.init();
	}
	public side = 60;
	public baseCircleR = 40;
	public smallCircleR = 6;
	

	public baseCircle:egret.Shape;
	public baseMask:egret.Shape;
	public smallCircle:egret.Shape;
	public tube:egret.Shape;
	public init(){
		this.width = this.height = this.side;
		this.graphics.beginFill(0xFFFFFF,1);
		this.graphics.drawRect(0,0,this.width,this.height);
		this.createBaseCircle();
	}
	public createBaseCircle(){
		var shape:egret.Shape = new egret.Shape();
		var graphics = shape.graphics;
		var r = this.baseCircleR;
		shape.width = shape.height = 2 * r;
		graphics.beginFill(0x888888,1);
		graphics.drawCircle(r,r,r);
		this.baseCircle = shape;
		this.addChild(shape);
		shape.x = (this.width - 2 * r) / 2;
		shape.y = this.height - (r - Math.pow(r*r - (this.side / 2)* (this.side / 2),0.5));
	}
}