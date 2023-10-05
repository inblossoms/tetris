import { IPoint, IViewer } from "./types";

export class Square {
  private _viewer?: IViewer;

  constructor(private _point: IPoint, private _color: string) {}

  public get point(): IPoint {
    return this._point;
  }
  public set point(v: IPoint) {
    this._point = v;
    if (this._viewer) {
      this.viewer.show();
    }
  }

  public get color(): string {
    return this._color;
  }
  public set color(v: string) {
    this._color = v;
  }

  public get viewer(): IViewer {
    return this._viewer as IViewer;
  }
  public set viewer(v: IViewer) {
    this._viewer = v;
  }
}
