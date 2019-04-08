var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Scene = (function (_super) {
    __extends(Scene, _super);
    function Scene() {
        var _this = _super.call(this) || this;
        _this.blocks = [];
        _this.stretch(_this);
        _this.initUI();
        Scene.instance = _this;
        return _this;
    }
    Scene.prototype.stretch = function (__this) {
        __this.top = __this.right = __this.bottom = __this.left = 0;
    };
    Scene.prototype.childrenCreated = function () {
        this.initEvent();
    };
    Scene.prototype.initUI = function () {
        var bg = new eui.Rect();
        this.addChild(bg);
        bg.fillColor = 0x0076A3;
        this.stretch(bg);
        var addBtn = new eui.Component();
        var addBg = new eui.Rect();
        var addTxt = new eui.Label();
        ;
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
        var remBtn = new eui.Component();
        var remBg = new eui.Rect();
        var remTxt = new eui.Label;
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
        var optimizeBtn = new eui.Component();
        var optimizeBg = new eui.Rect();
        var optimizeTxt = new eui.Label;
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
        var unOptimizeBtn = new eui.Component();
        var unOptimizeBg = new eui.Rect();
        var unOptimizeTxt = new eui.Label;
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
    };
    Scene.prototype.initEvent = function () {
        this.addBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.addBlocks, this);
        this.remBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.removeBlocks, this);
        this.optimizeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.optimze, this);
        this.unOptimizeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.unOptimze, this);
    };
    Scene.prototype.addBlocks = function (e, num, side, alpha) {
        if (num === void 0) { num = 10; }
        if (side === void 0) { side = 2; }
        if (alpha === void 0) { alpha = 1; }
        var time = 2e3;
        for (var i = 0; i < num; i++) {
            var block = new eui.Rect();
            this.blocks.push(block);
            this.addChild(block);
            block.width = block.height = side;
            block.fillColor = 0xFF0000;
            block.alpha = alpha;
            block.x = Math.random() * this.width;
            block.y = 0;
            egret.Tween.get(block, { loop: true }).to({ y: this.height - block.height }, time).to({ y: 0 }, time);
        }
        console.log(this.blocks.length);
    };
    Scene.prototype.removeBlocks = function (e, num) {
        if (num === void 0) { num = 10; }
        for (var i = 0; i < num; i++) {
            var block = this.blocks.shift();
            if (block) {
                egret.Tween.removeTweens(block);
                this.removeChild(block);
            }
        }
    };
    Scene.prototype.optimze = function () {
        var blocks = this.blocks;
        for (var i in blocks) {
            blocks[i].alpha = 1;
            blocks[i].scaleX = blocks[i].scaleY = 1;
            blocks[i].rotation = 0;
        }
    };
    Scene.prototype.unOptimze = function () {
        var blocks = this.blocks;
        for (var i in blocks) {
            // blocks[i].alpha = 0.5;
            // blocks[i].scaleX = blocks[i].scaleY = 10;
            blocks[i].rotation = 45;
        }
    };
    return Scene;
}(eui.Component));
__reflect(Scene.prototype, "Scene");
