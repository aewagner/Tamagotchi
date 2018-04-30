function DigitalPal(hungry, sleepy, bored, age) {
    this.hungry = hungry;
    this.sleepy = sleepy;
    this.bored = bored;
    this.age = age;
    this.feed = () => {
        if (this.hungry) {
            console.log('That was yummy');
            this.hungry = false;
            this.sleepy = true;
        } else {
            console.log(`No thanks I'm full`);
        }
    }
    this.sleep = () => {
        if (this.sleepy) {
            console.log(`Zzzzzzzzz`);
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        } else {
            console.log(`No way! I'm not tired.`);
        }
    }
    this.play = () => {
        if (this.bored) {
            console.log(`Yay! Let's play!`);
            this.bored = false;
            this.hungry = true;
        } else {
            console.log(`Not right now. Later?`);
        }
    }
    this.increaseAge = () => {
        this.age++;
    }
}