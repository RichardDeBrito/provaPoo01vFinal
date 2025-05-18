import { Planet } from "./Planet";
import { Cargo, HeavyCargo } from "./Cargo";
import { Spacecraft } from "./Spacecraft";
import { Random } from "./utils";

export class MissionControl {

    protected reportMission: string[] = [];
    protected planetsVisited: Planet[] = [];
    protected cargoSummary: Cargo[] = [];

    constructor(
        protected listSpacecraft: Spacecraft[],
        protected listCargo: Cargo[],
        protected listPlanet: Planet[],
    ){}

    public insertElements(listSpacecraft: Spacecraft[], listCargo: Cargo[], listPlanet: Planet[]) :void {
        this.listSpacecraft = listSpacecraft;
        this.listCargo = listCargo;
        this.listPlanet = listPlanet;
    }

    public selectingShips() :Spacecraft[] {
        const selectedShips: Spacecraft[] = [];

        const necessaryShips = this.listCargo.length/2;

        if(this.listSpacecraft.length >= necessaryShips) {
            for(let i = 0; i < necessaryShips; i++){
                selectedShips.push(this.listSpacecraft[i]);
            }

            return selectedShips;

        } else {
            return this.listSpacecraft;
        }
    }

    public executeMissions() :void {
        const ships = this.selectingShips();
        let count_cargos = 0;

        for(let ship of ships) {
            console.log(`Assigned spacecraft: ${ship.name} | Fuel: ${ship.fuel} | Capacity: ${ship.cargoCapacity}`);
        }

        console.log();

        for(let ship of ships) {
            let shipSelected = ship;

            for(let i = 0; i < 2; i++){
                
                let initialCargoCapacity = shipSelected.cargoCapacity;

                let planet_sortition = Random(0, this.listPlanet.length);
                let cargo_sortition = Random(0, this.listCargo.length);

                this.reportMission = shipSelected.travel(this.listPlanet[planet_sortition], this.listCargo[cargo_sortition]);

                console.log(`Mission: ${shipSelected.name} -> ${this.listPlanet[planet_sortition].name}`);
                for(let i = 0; i < this.reportMission.length; i++){
                    console.log(this.reportMission[i]);
                }
                console.log(`Fuel remaining: ${shipSelected.fuel.toFixed(1)} | Capacity remaining: ${shipSelected.cargoCapacity}`);

                shipSelected.cargoCapacity = initialCargoCapacity;

                console.log();

                count_cargos++;

                this.planetsVisited.push(this.listPlanet[planet_sortition]);
                this.cargoSummary.push(this.listCargo[cargo_sortition]);
                if(count_cargos === this.listCargo.length){
                    break;
                }
            }
        }

        console.log('Cargo summary:');
        for(let i = 0; i < this.cargoSummary.length; i++) {

            let weight = this.cargoSummary[i].weight;
            let typeCargo: string;

            if(weight === 75) {
                typeCargo = 'HeavyCargo';
            } else {
                typeCargo = 'LightCargo';
            }

            console.log(`- ${this.cargoSummary[i].name} | ${this.cargoSummary[i].weight}kg | ${typeCargo}`);
        }

        console.log()

        console.log('Planets visited:');
        for(let planet of this.planetsVisited){

            let maxTemperature = planet.maxTemperature;
            let typePlanet = '';

            switch (maxTemperature) {
                case 0:
                    typePlanet = 'IcePlanet';
                    break;
                
                case 80:
                    typePlanet = 'GasPlanet';
                    break;

                case 40:
                    typePlanet = 'RockyPlanet';
                    break;

                default:
                    break;
            }

            console.log(`${planet.name} (${typePlanet})`);
        }

    }
}