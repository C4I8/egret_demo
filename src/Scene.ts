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

	public stretch(__this){
		__this.top = __this.right = __this.bottom = __this.left = 0;
	}
	public childrenCreated(){	
		this.initEvent();
	}
	public initUI(){
		var bg:eui.Rect = new eui.Rect();
		this.addChild(bg);
		bg.fillColor = 0x0076A3;
		this.stretch(bg);

		var addBtn:eui.Component = new eui.Component();
		var addBg:eui.Rect = new eui.Rect();
		var addTxt:eui.Label = new eui.Label();;
		this.addChild(addBtn);
		addBtn.addChild(addBg);
		addBtn.addChild(addTxt);
		this.stretch(addBg);
		addBg.width = 200;
		addBg.height = 40;
		addTxt.text = "添加Blocks*10";
		addTxt.textColor = 0xFFFFFF;
		addTxt.textAlign = "center";
		addTxt.verticalAlign = "middle";
		addTxt.horizontalCenter = addTxt.verticalCenter = 0;
		addBtn.verticalCenter = -50;
		addBtn.left = 100;

		var remBtn:eui.Component = new eui.Component();
		var remBg:eui.Rect = new eui.Rect();
		var remTxt:eui.Label = new eui.Label;
		this.addChild(remBtn);
		remBtn.addChild(remBg);
		remBtn.addChild(remTxt);
		this.stretch(remBg);
		remBg.width = 200;
		remBg.height = 40;
		remTxt.text = "移除Blocks*10";
		remTxt.textColor = 0xFFFFFF;
		remTxt.textAlign = "center";
		remTxt.verticalAlign = "middle";
		remTxt.horizontalCenter = remTxt.verticalCenter = 0;
		remBtn.verticalCenter = 50;
		remBtn.left = 100;

		var optimizeBtn:eui.Component = new eui.Component();
		var optimizeBg:eui.Rect = new eui.Rect();
		var optimizeTxt:eui.Label = new eui.Label;
		this.addChild(optimizeBtn);
		optimizeBtn.addChild(optimizeBg);
		optimizeBtn.addChild(optimizeTxt);
		this.stretch(optimizeBg);
		optimizeBg.width = 200;
		optimizeBg.height = 40;
		optimizeTxt.text = "OPTIMIZE";
		optimizeTxt.textColor = 0xFFFFFF;
		optimizeTxt.textAlign = "center";
		optimizeTxt.verticalAlign = "middle";
		optimizeTxt.horizontalCenter = optimizeTxt.verticalCenter = 0;
		optimizeBtn.verticalCenter = 150;
		optimizeBtn.left = 100;

		var unOptimizeBtn:eui.Component = new eui.Component();
		var unOptimizeBg:eui.Rect = new eui.Rect();
		var unOptimizeTxt:eui.Label = new eui.Label;
		this.addChild(unOptimizeBtn);
		unOptimizeBtn.addChild(unOptimizeBg);
		unOptimizeBtn.addChild(unOptimizeTxt);
		this.stretch(unOptimizeBg);
		unOptimizeBg.width = 200;
		unOptimizeBg.height = 40;
		unOptimizeTxt.text = "UNOPTIMIZE";
		unOptimizeTxt.textColor = 0xFFFFFF;
		unOptimizeTxt.textAlign = "center";
		unOptimizeTxt.verticalAlign = "middle";
		unOptimizeTxt.horizontalCenter = unOptimizeTxt.verticalCenter = 0;
		unOptimizeBtn.verticalCenter = 250;
		unOptimizeBtn.left = 100;

		this.addBtn = addBtn;
		this.remBtn = remBtn;
		this.optimizeBtn = optimizeBtn;
		this.unOptimizeBtn = unOptimizeBtn;
	}
	public initEvent(){
		this.addBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.addBlocks,this);
		this.remBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.removeBlocks,this);
		this.optimizeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.optimze,this);
		this.unOptimizeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.unOptimze,this);
	}
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
			// blocks[i].alpha = 0.5;
			// blocks[i].scaleX = blocks[i].scaleY = 10;
			blocks[i].rotation = 45;
		}
	}
}