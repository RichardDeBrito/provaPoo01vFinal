import { isExpression } from "typescript";
import { Cargo } from "./Cargo";

export abstract class Planet {
    constructor(
        public readonly name: string,
        public readonly distanceFromEarth: number,
        public readonly maxTemperature: number,
        public readonly minTemperature: number,
        public readonly radioactive: boolean
    ){}

    public checkCompatibility(cargo: Cargo): boolean {
        return (
            !(this.radioactive === true && cargo.radioationSensitivity === true) && (this.minTemperature < cargo.averageIdealTemperature && cargo.averageIdealTemperature < this.maxTemperature) 
        )
    }
}

export class IcePlanet extends Planet {
    private static initialMinTemperature = -20;
    private static initialMaxTemperature = 30;
    private static initialRadioactive = false;

    constructor(name: string, distanceFromEarth: number) {
        super(name, distanceFromEarth, IcePlanet.initialMaxTemperature, IcePlanet.initialMinTemperature, IcePlanet.initialRadioactive);
    }  
}

export class GasPlanet extends Planet {
    private static initialMinTemperature = -10;
    private static initialMaxTemperature = 60;
    private static initialRadioactive = true;

    constructor(name: string, distanceFromEarth: number) {
        super(name, distanceFromEarth, GasPlanet.initialMaxTemperature, GasPlanet.initialMinTemperature, GasPlanet.initialRadioactive)
    }
}

export class RockyPlanet extends Planet {
    private static initialMinTemperature = -10;
    private static initialMaxTemperature = 50;
    private static initialRadioactive = true;

    constructor(name: string, distanceFromEarth: number) {
        super(name, distanceFromEarth, RockyPlanet.initialMaxTemperature, RockyPlanet.initialMinTemperature, RockyPlanet.initialRadioactive)
    }
}

