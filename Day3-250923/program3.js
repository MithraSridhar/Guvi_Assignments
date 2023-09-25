
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var jObj=new XMLHttpRequest();
jObj.open("Get","https://restcountries.com/v3.1/all",false)
jObj.send()
var text = jObj.responseText;
var parsedJson=JSON.parse(text)
var jsonLength = parsedJson.length


for(var i =0 ;i<jsonLength ;i++){
    console.log(parsedJson[i].name) 
    console.log(parsedJson[i].region) 
    console.log(parsedJson[i].subregion) 
    console.log(parsedJson[i].population) 
}

