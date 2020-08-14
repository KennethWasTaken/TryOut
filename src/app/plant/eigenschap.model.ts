 export interface EigenschapJson {
   locatie: string;
   hoogte: string;
   bloemkleur: string;
 }


export class Eigenschap {
  constructor(
    private _locatie: string,
    private _hoogte: string,
    private _bloemkleur: string
  ) { }


  static fromJSON(json: any): Eigenschap {
    const eig = new Eigenschap(
      json.locatie,
      json.hoogte,
      json.bloemkleur);
    return eig;
  }

  toJSON(): any {
    return {
      locatie: this.locatie,
      hoogte: this.hoogte,
      bloemkleur: this.bloemkleur
    };
  }

  get locatie() {
    return this._locatie;
  }
  get hoogte() {
    return this._hoogte;
  }
  get bloemkleur() {
    return this._bloemkleur;
  }

}
