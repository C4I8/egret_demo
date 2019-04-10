class Scene extends eui.Component{
	public constructor(){
		super();
		this.stretch(this);
		this.initUI();
		Scene.instance = this;
	}
	public static instance:Scene;
	public blocks:any[] = [];
	public addBtn:eui.Component;
	public remBtn:eui.Component;
	public optimizeBtn:eui.Component;
	public unOptimizeBtn:eui.Component;
	public cannon:Cannon;

	public stretch(__this){
		__this.top = __this.right = __this.bottom = __this.left = 0;
	}
	public childrenCreated(){	
		this.initEvent();
	}
	/**
	* 初始化界面
	*/
	public initUI(){
		var bg:eui.Rect = new eui.Rect();
		this.addChild(bg);
		bg.fillColor = 0x0076A3;
		this.stretch(bg);

		var addBtn:eui.Component = this.createBtn('添加Blocks*10');
		this.addChild(addBtn);
		addBtn.verticalCenter = -50;
		addBtn.left = 100;

		var remBtn:eui.Component = this.createBtn('移除Blocks*10');
		this.addChild(remBtn);
		remBtn.verticalCenter = 50;
		remBtn.left = 100;

		var optimizeBtn:eui.Component = this.createBtn('OPTIMIZE');
		this.addChild(optimizeBtn);
		optimizeBtn.verticalCenter = 150;
		optimizeBtn.left = 100;

		var unOptimizeBtn:eui.Component = this.createBtn('UNOPTIMIZE');
		this.addChild(unOptimizeBtn);
		unOptimizeBtn.verticalCenter = 250;
		unOptimizeBtn.left = 100;

		var cannon:Cannon = new Cannon();
		this.addChild(cannon);
		cannon.x = (this.width - cannon.width) / 2;
		cannon.y = this.height - cannon.height;

		this.addBtn = addBtn;
		this.remBtn = remBtn;
		this.optimizeBtn = optimizeBtn;
		this.unOptimizeBtn = unOptimizeBtn;
		this.cannon = cannon;
	}
	/**
	* 创建一个简单的按钮
	*/
	public createBtn(text:string):eui.Component{
		var addBtn:eui.Component = new eui.Component();
		var addBg:eui.Rect = new eui.Rect();
		var addTxt:eui.Label = new eui.Label();
		addBtn.addChild(addBg);
		addBtn.addChild(addTxt);
		this.stretch(addBg);
		addBg.width = 200;
		addBg.height = 40;
		addTxt.text = text;
		addTxt.textColor = 0xFFFFFF;
		addTxt.textAlign = "center";
		addTxt.verticalAlign = "middle";
		addTxt.horizontalCenter = addTxt.verticalCenter = 0;
		return addBtn;
	}
	/**
	* 初始化时间监听
	*/
	public initEvent(){
		this.addEventListener(egret.Event.RESIZE,this.onResieze,this);
		this.addBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.addBlocks,this);
		this.remBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.removeBlocks,this);
		this.optimizeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.optimze,this);
		this.unOptimizeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.unOptimze,this);

	}
	public onResieze(){
		this.cannon.x = (this.width - this.cannon.width) / 2;
		this.cannon.y = this.height - this.cannon.height;
	}
	/**
	* 添加小方块
	*/
	public addBlocks(e:egret.Event,num:number=10,side:number=2,alpha:number=1){
		var time = 2e3;
		for(let i = 0;i<num;i++){
			let block:eui.Rect = new eui.Rect();
			this.blocks.push(block);	
			this.addChild(block);
			block.width = block.height = side;
			block.fillColor = 0xFF0000;
			block.alpha = alpha;
			block.x = Math.random() * this.width;
			block.y = 0;
			egret.Tween.get(block,{loop:true}).to({y:this.height - block.height},time).to({y:0},time);
		}
		console.log(this.blocks.length);
	}
	/**
	* 移除小方块
	*/
	public removeBlocks(e:egret.Event,num:number = 10){
		for(let i = 0;i<num;i++){
			let block = this.blocks.shift();
			if(block){
				egret.Tween.removeTweens(block);
				this.removeChild(block);	
			}
		}
	}
	public optimze(){
		var blocks = this.blocks;
		for(let i in blocks){
			blocks[i].alpha = 1;
			blocks[i].scaleX = blocks[i].scaleY = 1;
			blocks[i].rotation = 0;
		}
	}
	public unOptimze(){
		var blocks = this.blocks;
		for(let i in blocks){
			blocks[i].alpha = 0.5;
			blocks[i].scaleX = blocks[i].scaleY = 5;
			blocks[i].rotation = 45;
		}
	}
}