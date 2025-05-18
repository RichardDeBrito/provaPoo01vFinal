import { Planet } from "./Planet";

export abstract class Cargo {
    constructor(
        public readonly name: string,
        public readonly weight: number,
        public readonly averageIdealTemperature: number,
        public readonly radioationSensitivity: boolean
    ){}
}

export class HeavyCargo extends Cargo {
    constructor(name: string, weight: number, averangeIdealTemperature: number, radioationSensitivity: boolean){
        super(name, weight, averangeIdealTemperature, radioationSensitivity);
    }
}

export class LightCargo extends Cargo {
    constructor(name: string, weight: number, averangeIdealTemperature: number, radioationSensitivity: boolean){
        super(name, weight, averangeIdealTemperature, radioationSensitivity);
    }
}
