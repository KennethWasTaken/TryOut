export interface VerzorgingJson {
  water: string;
  licht: string;
  onderhoud: string;
}



export class Verzorging {
  constructor(
    private _water: string,
    private _licht: string,
    private _onderhoud: string,
  ) { }

  static fromJSON(json: any): Verzorging {
    const ver = new Verzorging(
      json.water,
      json.licht,
      json.onderhoud);
    return ver;
  }

  toJSON(): any {
    return {
      water: this.water,
      licht: this.licht,
      onderhoud: this.onderhoud
    };
  }

  get water() {
    return this._water;
  }
  get licht() {
    return this._licht;
  }
  get onderhoud() {
    return this._onderhoud;
  }
}
