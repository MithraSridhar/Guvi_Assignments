let xhr = new XMLHttpRequest();
xhr.open("Get","https://restcountries.com/v3.1/all",false);
var responseJson =[];
xhr.onload=function(){
     let responseText = xhr.responseText;
      responseJson = JSON.parse(responseText);
}
xhr.send();
// program A
function resulta(responseJson){   
        if(responseJson.continents=="Asia") {
       return responseJson;
        }    
}
let resultaarray=responseJson.filter(resulta);
console.log(resultaarray)

// program B
function resultb(responseJson){   
    if(responseJson.population<200000) {
   return responseJson;
    }    
}
let resultbarray=responseJson.filter(resultb);
console.log(resultbarray)

//program C
function resultc(responseJson){
    console.log(responseJson.name.common) 
    console.log(responseJson.capital) 
    console.log(responseJson.flag) 
}
let resultcarray=responseJson.forEach(resultc);

//program D
function resultd(sum,responseJson){
   return sum+parseInt(Math.round(responseJson.population));
}
let resultdarray =responseJson.reduce(resultd,0)
console.log(resultdarray)

//program E
function resulte(responseJson){

  if((String(JSON.stringify(responseJson.currencies))).includes("USD"))
       return responseJson.currencies;   
 }
 let resultearray =responseJson.filter(resulte)
 console.log(resultearray)


