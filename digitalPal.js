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

let animals = {};

animals.dog = new DigitalPal(true, false, true, 3);

animals.dog.outside = false;
animals.dog.bark = () => { console.log(`Woof!`) };
animals.dog.goOutside = () => {
    if (!this.outside) {
        console.log(`Yay! I love the outdoors!`);
        this.outside = true;
        this.bark();
    } else {
        console.log(`We're already outside though...`);
    }
};
animals.dog.goInside = () => {
    if (this.outside) {
        console.log(`Do we have to? Fine...`);
        this.outside = false;
    } else {
        console.log(`I'm already inside...`);
    }
};

 animals.cat = new DigitalPal(true, true, true, 5);

animals.cat.houseCondition = 100;
animals.cat.meow = () => { console.log(`Meow! Meow!`) };
animals.cat.destroyFurniture = () => {
    if (animals.cat.houseCondition - 10 > 0) {
        this.houseCondition -= 10;
        console.log(`MUAHAHAHAHA! TAKE THAT FURNITURE!`);
        this.bored = false;
        this.sleepy = true;
    }
};
animals.cat.buyNewFurniture = () => {
    this.houseCondition += 50;
    console.log(`Are you sure about that?`);
}

// Grabbing command line arguments for animal and method
var animal = process.argv[2];
var method = process.argv[3];

// try calling your chosen animal and method from the terminal example: 'node tamagotchi-this dog letInside'
animals[animal][method]();