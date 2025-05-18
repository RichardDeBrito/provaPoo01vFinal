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
    private static initialWeight = 75;
    
    constructor(name: string, averangeIdealTemperature: number, radioationSensitivity: boolean){
        super(name, HeavyCargo.initialWeight, averangeIdealTemperature, radioationSensitivity);
    }
}

export class LightCargo extends Cargo {
    private static initialWeight = 20;

    constructor(name: string, averangeIdealTemperature: number, radioationSensitivity: boolean){
        super(name, LightCargo.initialWeight, averangeIdealTemperature, radioationSensitivity);
    }
}
