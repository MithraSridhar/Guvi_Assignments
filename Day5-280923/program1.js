let inputJSON =[{
    "fruit": "Apple",
    "size": "Large",
    "color": "Red"
},
{
    "fruit": "Orange",
    "size": "Large",
    "color": "Orange"
},
{
    "fruit": "Mango",
    "size": "Large",
    "color": "Yellow"
},
{
    "fruit": "Kiwi",
    "size": "Large",
    "color": "Green"
}
]

// for loop

for(let i=0;i<inputJSON.length;i++){
    console.log(inputJSON[i].fruit)
    console.log(inputJSON[i].size)
    console.log(inputJSON[i].color)    
}

//for in loop

for(let i in inputJSON){
    console.log(inputJSON[i].fruit)
    console.log(inputJSON[i].size)
    console.log(inputJSON[i].color)   
}

//for of loop
for(let i in inputJSON){
    console.log(inputJSON[i].fruit)
    console.log(inputJSON[i].size)
    console.log(inputJSON[i].color)   
}

//for each loop
inputJSON.forEach(obj => {
    Object.entries(obj).forEach(([key, value]) => {
        console.log(`${key} ${value}`);
    });
});