const flightTime = 300;

const movieTimes = {
  zed: 35,
  ted: 24,
  fred: 55,
  friend: 150,
  toe: 150,
  jess: 120,
  edd: 180,
};

getMovies = (flight, movies) => {
  for (movie in movies) {
    console.log(movies[flight - movies[movie]]);

    if (movies[flight - movies[movie]]) {
      if (movies[flight - movie])
        return movies[movie] + " " + movies[flight - movie];
    }
  }
  return false;
};

console.log(getMovies(flightTime, movieTimes));
