import { MissionControl } from "./MissionControl";
import { generateRandomFleet, generateRandomPlanets, genereteRandomCargos } from "./utils";

const planets = generateRandomPlanets(10);
const fleet = generateRandomFleet(2);
const cargos = genereteRandomCargos(20);

const control = new MissionControl(fleet, cargos, planets);
control.executeMissions();