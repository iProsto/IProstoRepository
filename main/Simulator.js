"use strict";
// import {Resources} from "./Resources.js";
// import {Time} from "./Time.js";

class Simulator {
// export class Simulator {

    #resources;
    #time;
    #simulationStarted;


    constructor() {
        this.#resources = new Resources();
        this.#time = new Time();
        this.#simulationStarted = false;
    }

    start(year, month, week){
        this.#simulationStarted = true;

        let monthCounter = 0;
        let weekCounter = 0;

        while(this.#simulationStarted){
            //One week later
            weekCounter++;
            this.#time.increaseWeek();

            //Week callback
            week(this.#resources, this.#time);

            if(weekCounter >= 4){
                monthCounter++;
                weekCounter = 0;
                this.#time.increaseMonth();
                month(this.#resources, this.#time);
            }
            if(monthCounter >= 12){
                monthCounter = 0;
                this.#time.increaseYear();
                year(this.#resources, this.#time);
            }
        }
    }

    getTime(){
        return this.#time;
    }

    stop(){
        this.#simulationStarted = false;
    }
}

