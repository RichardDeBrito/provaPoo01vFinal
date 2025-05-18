import { Planet, IcePlanet, RockyPlanet, GasPlanet } from "./Planet";
import { Spacecraft, ExpeditionShip, ExplorationShip, CargoShip } from "./Spacecraft";
import { Cargo, HeavyCargo, LightCargo } from "./Cargo";

const namesPlanet = ["Zerath","Kaelion","Dravus","Orionis","Vortara","Thalmera","Nyxar","Solara Prime","Xenthar","Galmyra","Tarkon-7","Veltrix","Ophion","Mirelia","Yggra","Auralon","Crystara","Nereth","Umbraxis","Quoralis"];

const namesCargo = ["Medical Supplies", "Plasma Tanks", "Recon Drones", "Biological Samples", "Fusion Reactor", "Crystals"]


export function generateRandomPlanets(n: number) :Planet[]{
    const planets: Planet[] = [];
    
    for(let i = 0; i < n; i++){
        
        let sortition = Random(0, 3);
        let nameDrawn = Random(0, namesPlanet.length);

        switch (sortition) {
            case 0:
                let icePlanet = new IcePlanet(namesPlanet[nameDrawn], Random(100, 1001));
                planets.push(icePlanet);
                break;

            case 1:
                let rockyPlanet = new RockyPlanet(namesPlanet[nameDrawn], Random(100, 1001));
                planets.push(rockyPlanet);
                break;

            case 2:
                let gasPlanet = new GasPlanet(namesPlanet[nameDrawn], Random(100, 1001))
                planets.push(gasPlanet);
                break;

            default:
                break;
        }

        namesPlanet.splice(nameDrawn, 1);

    }

    return planets;
}

export function generateRandomFleet(n: number) :Spacecraft[]{
    const fleet: Spacecraft[] = [];

    let countCargoShip = 1;
    let countExplorationShip = 1;
    let countExpeditionShip = 1;

    for(let i = 0; i < n; i++) {

        let sortition = Random(0, 3);

        switch (sortition) {
            case 0:
                let cargoShip = new CargoShip('CargoShip-'+String(countCargoShip));
                fleet.push(cargoShip);
                countCargoShip++;
                break;
            
            case 1:
                let explorationShip = new ExplorationShip('ExplorationShip-'+String(countExplorationShip));
                fleet.push(explorationShip);
                countExplorationShip++;
                break;
            
            case 2:
                let expeditionShip = new ExpeditionShip('ExpeditionShip-'+String(countExpeditionShip));
                fleet.push(expeditionShip);
                countExpeditionShip++;
                break;
            
            default:
                break;
        }

    }

    return fleet;
}

export function genereteRandomCargos(n: number) :Cargo[]{
    const cargos: Cargo[] = [];

    for(let i = 0; i < n; i++) {

        let sortition = Random(0, 2);
        let nameDrawn = Random(0, namesCargo.length);

        switch (sortition) {
            case 0:
                let heavyCargo = new HeavyCargo(namesCargo[nameDrawn], Random(-50, 80), RandomBoolean());
                cargos.push(heavyCargo);
                break;
            
            case 1:
                let lightCargo = new LightCargo(namesCargo[nameDrawn], Random(-50, 80), RandomBoolean());
                cargos.push(lightCargo);
                break;
            
            default:
                break;
        }

    }

    return cargos;
}

export function Random(min: number, max: number) :number {
    return Math.floor(Math.random() * (max - min)) + min;
}

export function RandomBoolean() :boolean {
    let sortition = Random(0, 2);

    if(sortition === 0){
        return true;
    } else {
        return false;
    }
            
}

export function printCargoSummary(cargos: Cargo[]): void {
  console.log("📦 Cargo Summary");
  console.log("=".repeat(60));
  console.log(
    `${"Name".padEnd(25)} | ${"Weight (kg)".padEnd(12)} | ${"Temp (°C)".padEnd(12)} | Radiation`
  );
  console.log("-".repeat(60));

  cargos.forEach(cargo => {
    console.log(
      `${cargo.name.padEnd(25)} | ` +
      `${cargo.weight.toString().padEnd(12)} | ` +
      `${cargo.averageIdealTemperature.toString().padEnd(12)} | `
    );
  });
}