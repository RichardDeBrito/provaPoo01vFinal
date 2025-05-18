import { Cargo } from "./Cargo";
import { Planet } from "./Planet";

export class Spacecraft {
    constructor(
        public readonly name: string,
        public readonly distancePerLiter: number,
        public cargoCapacity: number,
        public fuel: number,
        private cargoForTransport: Cargo[] = []
    ){}

    public checkCargoCapacity(cargo: Cargo) :boolean {
        return (this.cargoCapacity > cargo.weight);
    }

    public checkFuel(destination: Planet) :boolean {
        return (this.fuel > destination.distanceFromEarth/this.distancePerLiter);
    }

    public insertCargo(cargo: Cargo) :void {
        this.cargoForTransport.push(cargo);
        this.cargoCapacity -= cargo.weight;
    }
    
    public travel(destination: Planet, cargo: Cargo) :string[] {
        const travelInformations: string[] = [];
        const hasCapacity = this.checkCargoCapacity(cargo);
        const hasFuel = this.checkFuel(destination);
            
        if(hasCapacity && hasFuel){
            travelInformations.push(`${this.name} traveled to ${destination.name} (${destination.distanceFromEarth}M km).`)
            this.insertCargo(cargo);
            this.fuel -= destination.distanceFromEarth/this.distancePerLiter;
        } else {
            travelInformations.push(`${this.name} quicky reached (${destination.distanceFromEarth}M km).`)
        }

        if(hasCapacity && hasFuel){
            if(destination.checkCompatibility(cargo)){
                travelInformations.push(`${this.name} delivered "${cargo.name}" to ${destination.name}.`)
            } else {
                travelInformations.push(`${this.name} failed to deliver "${cargo.name}": cargo not accepted by ${destination.name}.`)
            }
        } else {
            travelInformations.push(`${this.name} failed to deliver "${cargo.name}": exceeds capacity.`)
        }

        return travelInformations;
    }
}

export class CargoShip extends Spacecraft {
    private static initialDistancePerLiter = 50;
    private static initialCargoCapacity = 100;
    private static initialFuel =  1200;

    constructor(name: string){
        super(name, CargoShip.initialDistancePerLiter, CargoShip.initialCargoCapacity, CargoShip.initialFuel);
    }
}

export class ExplorationShip extends Spacecraft {
    private static initialDistancePerLiter = 80;
    private static initialCargoCapacity = 50;
    private static initialFuel =  1500;

    constructor(name: string){
        super(name, ExplorationShip.initialDistancePerLiter, ExplorationShip.initialCargoCapacity, ExplorationShip.initialFuel);
    }
}

export class ExpeditionShip extends Spacecraft {
    private static initialDistancePerLiter = 65;
    private static initialCargoCapacity = 70;
    private static initialFuel =  1350;

    constructor(name: string){
        super(name, ExpeditionShip.initialDistancePerLiter, ExpeditionShip.initialCargoCapacity, ExpeditionShip.initialFuel);
    }
}