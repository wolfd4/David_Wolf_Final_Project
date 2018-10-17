class fitnessApp {
    constructor(){
        this.users = [];
    }
};

class User{
    constructor(name, id, age, height, weight, activity){
        this.id = id;
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.activity = activity;
        this.workoutsDone = [];
    }
}

/*class User{
    constructor(name, id, age, height, weight, activity){
        this.id = id;
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.activity = activity;
        this.workoutsDone = [];
    };
    getBMI(){
        return (this.weight/Math.pow(this.height))
    };
    getBMR(){
        return(66.5 + (13.75 * this.weight) + (5.003 * this.height) - (6.755 * this.age))
    }
    getTDEE(){
        return this.getBMR * this.activity
    };
};*/

module.exports = {
    fitnessApp, User
}