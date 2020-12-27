class People {

    #peopleCount;


    constructor(resources) {
        this.#updateInput(resources);
    }

    oneYear(res, time) {
        if (res.getLifeQuality() > 0.2) {
            this.#peopleCount += Math.trunc(this.#peopleCount * res.getRNI());
        }
        if (this.#peopleCount > res.getPeopleCount()) {
            console.log("New peoples: " + (this.#peopleCount - res.getPeopleCount()));
        }

        this.#updateOutput(res);
    }

    oneMonth(res, time) {
        res.setRNI(res.getRNI() + 0.01);
        res.setLifeQuality(res.getLifeQuality() + 0.03);
    }

    oneWeek(res, time) {

    }

    #updateInput(resources) {
            this.#peopleCount = resources.getPeopleCount();
    }
    #updateOutput(resources) {
        resources.setPeopleCount(this.#peopleCount);
    }
}