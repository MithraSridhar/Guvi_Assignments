
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var jObj=new XMLHttpRequest();
jObj.open("Get","https://restcountries.com/v3.1/all",false)
jObj.send(null)
var text = jObj.responseText;
var parsedJson=JSON.parse(text)
var jsonLength = parsedJson.length


for(var i =0 ;i<jsonLength ;i++){
    console.log(parsedJson[i].flag) 
}

