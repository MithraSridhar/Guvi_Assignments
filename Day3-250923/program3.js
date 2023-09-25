
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var jObj=new XMLHttpRequest();
jObj.open("Get","https://restcountries.com/v3.1/all",false)
jObj.send()
var text = jObj.responseText;
var parsedJson=JSON.parse(text)
var jsonLength = parsedJson.length


for(var i =0 ;i<jsonLength ;i++){
    console.log("Country name is",parsedJson[i].name.common) 
    console.log("Region is",parsedJson[i].region) 
    console.log("Sub-region is",parsedJson[i].subregion) 
    console.log("Population is",parsedJson[i].population) 
}

