class Movie {
  //Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    rating = typeof rating !== "undefined" ? rating : "PG";
    this.rating = rating;
  }

  getPG(...args) {
    let res = args.filter((movie) => {
      if (movie.rating == "PG") return movie;
    });
    res.forEach((movie) => console.log(movie));
  }
}

// rating property is intentionally omitted so that constructor can set to default value
// rating = 'PG'
const Carstemp = new Movie(
  "Cars",
  "Walt Disney Pictures Pixar Animation Studios"
);

console.log(
  'The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.'
);
console.log(Carstemp);

const Cars = new Movie(
  "Cars",
  "Walt Disney Pictures Pixar Animation Studios",
  "G"
);
const Harry = new Movie(
  "Harry Potter and the Sorcerer's Stone",
  "Warner Bros. Pictures",
  "PG"
);
const Avatar = new Movie("Avatar", "20th Century Fox", "PG13");
const HomeAlone = new Movie("Home Alone", "Hughes Entertainment", "PG");
const Titanic = new Movie(
  "Titanic",
  "Paramount Pictures 20th Century Fox Entertainment",
  "PG13"
);
const Deadpool = new Movie(
  "Deadpool",
  "20th Century Fox Marvel Entertainment",
  "R"
);
const TheWolfofWallStreet = new Movie(
  "The Wolf of Wall Street",
  "Red Granite Pictures",
  "R"
);

console.log(
  "\nWrite a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”\n\n"
);
const Casino_Royale = new Movie("Casino Royale", "Eon Productions", "PG­13");
console.log(Casino_Royale);

console.log(
  '\nWrite a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.\n\n'
);
const movieObj = new Movie();
movieObj.getPG(
  Carstemp,
  Cars,
  Harry,
  Avatar,
  HomeAlone,
  Titanic,
  Deadpool,
  TheWolfofWallStreet
);
