
//let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let xhr1=new XMLHttpRequest();
xhr1.open("Get","https://restcountries.com/v3.1/all",false)
xhr1.onload=function(){
    if(xhr1.status===200){
let text = xhr1.responseText;
let parsedJson=JSON.parse(text)
let jsonLength = parsedJson.length


for(let i =0 ;i<jsonLength ;i++){
    console.log("Country name is",parsedJson[i].name.common) 
    console.log("Region is",parsedJson[i].region) 
    console.log("Sub-region is",parsedJson[i].subregion) 
    console.log("Population is",parsedJson[i].population) 
}
    }
    else{
        console.log("Error")
    }
}
xhr1.send()