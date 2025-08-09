interface People {
    name: string,
    age: number,
    
}

class manger implements People {
    name: string;
    age: number;

    constructor(name: string, age:number){
        this.name = name
        this.age = age
    }
}