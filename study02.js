class Human{
    constructor(type = 'human') {
        this.type = type;
    }

    static isHuman(human){
        return human instanceof Human;
    }

    breathe() {
        console.log('h-a-a-a-m');
    }
}

class Zero extends Human {
    constructor(type, firstName, lastName) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayName(){
        super.breathe();
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

const newZero = new Zero('human', 'Zero', 'Cho');
const a = Human.isHuman(newZero); //true
console.log(a);
newZero.sayName();