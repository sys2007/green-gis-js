export class Bound {
    private _xmin: number;
    private _ymin: number;
    private _xmax: number;
    private _ymax: number;

    //+1代表 x方向为自西向东，-1则反之
    private _xscale: number = 1;
    //+1代表 y方向为自北向南，-1则反之
    private _yscale: number = 1;

    get xmin():number {
        return this._xmin;
    }
    get ymin():number {
        return this._ymin;
    }
    get xmax():number {
        return this._xmax;
    }
    get ymax():number {
        return this._ymax;
    }
    get xscale():number {
        return this._xscale;
    }
    get yscale():number {
        return this._yscale;
    }

    constructor(xmin, ymin, xmax, ymax) {
        this._xmin = Math.min(xmin, xmax);
        this._ymin = Math.min(ymin, ymax);
        this._xmax = Math.max(xmin, xmax);
        this._ymax = Math.max(ymin, ymax);
        this._xscale = xmin <= xmax ? 1 : -1;
        this._yscale = ymin <= ymax ? 1 : -1;
    }

    //是否交叉叠盖
    intersect(bound: Bound) {
        return (bound.xmax >= this._xmin) && (bound.xmin <= this._xmax) && (bound.ymax >= this._ymin) && (bound.ymin <= this._ymax);
    }
}