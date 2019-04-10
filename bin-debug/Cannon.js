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
var Cannon = (function (_super) {
    __extends(Cannon, _super);
    function Cannon() {
        var _this = _super.call(this) || this;
        _this.side = 60;
        _this.baseCircleR = 40;
        _this.smallCircleR = 6;
        _this.init();
        return _this;
    }
    Cannon.prototype.init = function () {
        this.width = this.height = this.side;
        this.graphics.beginFill(0xFFFFFF, 1);
        this.graphics.drawRect(0, 0, this.width, this.height);
        this.createBaseCircle();
    };
    Cannon.prototype.createBaseCircle = function () {
        var shape = new egret.Shape();
        var graphics = shape.graphics;
        var r = this.baseCircleR;
        shape.width = shape.height = 2 * r;
        graphics.beginFill(0x888888, 1);
        graphics.drawCircle(r, r, r);
        this.baseCircle = shape;
        this.addChild(shape);
        shape.x = (this.width - 2 * r) / 2;
        shape.y = this.height - (r - Math.pow(r * r - (this.side / 2) * (this.side / 2), 0.5));
    };
    return Cannon;
}(egret.Sprite));
__reflect(Cannon.prototype, "Cannon");
