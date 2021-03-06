import { CoordinateType, Geometry } from "./geometry";
import { Bound } from "../util/bound";
import { Projection } from "../projection/projection";
import { PointSymbol } from "../symbol/symbol";
export declare class Point extends Geometry {
    static BOUND_TOLERANCE: number;
    static INTERACTION_TOLERANCE: number;
    private _symbol;
    private _lng;
    private _lat;
    private _x;
    private _y;
    private _screenX;
    private _screenY;
    get lng(): number;
    get lat(): number;
    get x(): number;
    get y(): number;
    constructor(lng: number, lat: number);
    toGeoJSON(): {
        type: string;
        coordinates: number[];
    };
    project(projection: Projection): void;
    move(ctx: CanvasRenderingContext2D, projection: Projection, screenX: number, screenY: number): void;
    draw(ctx: CanvasRenderingContext2D, projection?: Projection, extent?: Bound, symbol?: PointSymbol): Promise<void>;
    contain(screenX: number, screenY: number): boolean;
    getCenter(type?: CoordinateType, projection?: Projection): number[];
}
