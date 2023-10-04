class Movie{
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }

    getTitle(){
        return this.title   
    }

    setTitle(titlename){
        this.title=titlename
    }
    getStudio(){
        return this.studio   
    }

    setStudio(studioname){
        this.studio=studioname
    }
    getRating(){
        return this.rating   
    }

    setRating(ratingname){
        this.rating=ratingname
    }
}

let movie1= new Movie("Casino Royale", "Eon Productions","PG­13");
console.log(movie1)
let movie2= new Movie("Casino Royale", "Eon Productions");
console.log(movie2.title)

movie2.setTitle="Change";
console.log(movie2.title)