class Animal{

    _type = "";

    constructor(type='animal'){
        this._type  = type.toUpperCase();
    }
    get type(){
        return this._type;
    }
    set type(val){
        this._type = val.toUpperCase();
    }

    makeSound(){
        console.log(`${this.type} is making sound`);
    }

}

class Cat extends Animal{
    constructor(props='Cat') {
        super(props);    
    }

    
    makeSound(){
        console.log(`${this.type} is making meowing............`);
    }
    
}

let animal = new Animal();

animal.makeSound();

animal=new Cat();
animal.makeSound();