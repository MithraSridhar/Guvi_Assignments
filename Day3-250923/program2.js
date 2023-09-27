
//let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let xhr=new XMLHttpRequest();
xhr.open("Get","https://restcountries.com/v3.1/all",true)

xhr.onload = function(){
    if(xhr.status===200){
let text = xhr.responseText;
let parsedJson=JSON.parse(text)
let jsonLength = parsedJson.length


for(let i =0 ;i<jsonLength ;i++){
    console.log(parsedJson[i].flag) 
}
}
else{
    console.log("Error")
}
}
xhr.send()