import { Eigenschap, EigenschapJson } from './eigenschap.model';
import { Verzorging, VerzorgingJson } from './verzorging.model';

interface PlantJson {
    id: number;
    plantName: string;
    beschrijving: string;
    eigenschappen: EigenschapJson[];
    verzorgingen: VerzorgingJson[];
    created: string;
}

export class Plant {
    private _id: number;
    constructor(
        private _plantName: string,
        private _eigenschappen = new Array<Eigenschap>(),
        private _verzorgingen = new Array<Verzorging>(),
        private _beschrijving: string,
        private _dateAdded = new Date()
    ) { }

    static fromJSON(json: PlantJson): Plant {
        const pl = new Plant(
            json.plantName,
            json.eigenschappen.map(Eigenschap.fromJSON),
            json.verzorgingen.map(Verzorging.fromJSON),
            json.beschrijving,
            new Date(json.created)
        );
        pl._id = json.id;
        return pl;
    }
    toJSON(): any{
        return {
            plantName: this.plantName,
            eigenschappen: this.eigenschappen.map(eig => eig.toJSON()),
            verzorgingen: this.verzorgingen.map(verz => verz.toJSON()),
            beschrijving: this.beschrijving,
            created: this.dateAdded.toString()
        };
    }
    get id(): number {
        return this._id;
    }

    get plantName(): string {
        return this._plantName;
    }

    get beschrijving(): string {
        return this._beschrijving;
    }

    get eigenschappen(): Array<Eigenschap> {
        return this._eigenschappen;
    }

     get verzorgingen(): Array<Verzorging> {
     return this._verzorgingen;
     }
    get dateAdded(): Date {
        return this._dateAdded;
    }

    addEigenschap(locatie?: string, hoogte?: string, bloemkleur?: string) {
        this._eigenschappen.push(new Eigenschap(locatie, hoogte, bloemkleur));
    }
     addVerzorging(water: string, licht: string, onderhoud: string) {
         this._verzorgingen.push(new Verzorging(water, licht, onderhoud));
     }
    addBeschrijving(beschrijving: string) {
        this._beschrijving
    }

}