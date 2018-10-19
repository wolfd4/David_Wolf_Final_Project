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
        this.friendsList = [];
        this.goals = [];
        this.calorieInTake = 0;
        this.changeInTake = function(inTake){
            this.calorieInTake = inTake;
        }
    };
    get BMI(){
        var BMI = (703 * (this.weight / (Math.pow(this.height, 2))));
        if(BMI < 18.5){
            return "You are underweight"
        }
        if(BMI>=18.5 && BMI <= 24.9){
            return "You are a healthy weight"
        }
        if(BMI>=25.0 && BMI <= 29.9){
            return "You are overweight"
        }
        if(BMI>=30.0){
            return "You are obese"
        }
     }
      
     get BMR(){
        return (66 + (6.2 * this.weight) + (12.7 * this.height) - (6.76 * this.age))
    };
     get TDEE(){
         return (this.BMR * this.activity)
     };
};

module.exports = {
    fitnessApp, User
}