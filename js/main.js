

let numberOfFilms = +prompt("сколько фидьмов посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false

};

const a = prompt('Какой поледний фильм смотрели',''),
      b = prompt('Как оцените фильм ',''),
      c = prompt('Какой поледний фильм смотрели',''),
      d= prompt('Как оцените фильм ','');

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;

console.log(personalMovieDB);