"use strict";

// import {Simulator} from './Simulator.js';

function simulate() {
// export function simulate() {
    let simulator = new Simulator();
    simulator.start((res, time) => {
        console.log('\t\t[Year callback]: Year: ' + time.year());
        if (time.year() === 2) {
            simulator.stop();
        }
    }, (res, time) => {
        console.log('\t[Month callback]: Month: ' + time.month());
    }, (res, time) => {
        console.log('[Week callback]: ' + time.string());
    });
}




