// Write your code here
//PROTOTYPE CHAIN: Js uses objects to construct inheritance
//Step 1: create a movie class
class Movie {
  constructor( title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }

  //Step 2: create function for movie prototype
  overview() {
    return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`
  }

};

//Step 3: test
const ExampleMovie = new Movie("Movie Title", "Director Name", "Genre Type", "19XX", 10);
console.log(ExampleMovie.overview());