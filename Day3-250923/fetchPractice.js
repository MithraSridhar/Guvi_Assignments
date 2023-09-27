async function logMovies() {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const jsonResponse = await response.json();
for(var i =0 ;i<jsonResponse.length ;i++){
    console.log(jsonResponse[i].flag) 
}
  }
logMovies(); 