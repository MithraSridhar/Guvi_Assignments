let baseFee=.55;
let cities =["Chennai","Madurai","Salem"];
let rates =[10,9,8];
let finalrate=0;

class GetRate{
    constructor(city,distance,customername){
        this.city= city;
        this.distance=distance;
        this.customername=customername;

    }
    calculateRate(city,distance,customername){
        finalrate = baseFee*(rates[cities.indexOf(this.city)])*this.distance;
        console.log(`Hi ${this.customername}, your rate for the current ride is ${finalrate}`)
    }
}

let ride = new GetRate("Chennai",10,"Mithra");
ride.calculateRate();
