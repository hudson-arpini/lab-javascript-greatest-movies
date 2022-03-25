// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);

const movies = require("./data");


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(arr) {
  let newArr = arr.map(array => array.director)
  newArr = newArr.filter((diretor,posição) => newArr.indexOf(diretor) === posição)
  return newArr
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr) {
  let newArr = arr.filter(array => array.director === "Steven Spielberg" )
  newArr = newArr.filter(array => array.genre.indexOf('Drama') !== -1 ) 
  return newArr.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(arr) {
  if (arr.length === 0 ) {return 0}
  let newArr = arr.map(array => array.score)
  let filteredArr = newArr.filter(array => {if (typeof array === 'number') return array})
  let sum = filteredArr.reduce((anterior,atual) => anterior + atual)
  let avg = sum/newArr.length
  return Number(avg.toFixed(2))
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  let filteredArr = arr.filter(array => array.genre.indexOf('Drama') !== -1 )
  if (filteredArr.length === 0) {return 0}
  let newArr = filteredArr.map(array => array.score)
  let sum = newArr.reduce((anterior,atual) => anterior + atual)
  let avg = sum/newArr.length
  return Number(avg.toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  let newArr = arr.sort((a,b) => a.year - b.year)
  let nameArr = newArr.sort((a,b) => {
                                      if(a.year === b.year){
                                          if(a.title < b.title){
                                              return -1
                                          }
                                          else if(a.title > b.title){
                                              return 1
                                          }
                                          else {return 0}
                                      }})
  let finalArr = nameArr.map(array => array)                                                                       
  return finalArr
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  let newArr = arr.map(array => array.title)
  let nameArr = newArr.sort()
  let finalArr = nameArr.splice(20)
  return nameArr
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
  let duração = ''
  let split1 = []
  let split2 =[]
  for (let i=0; i<arr.length; i++){
    duração = arr[i].duration
    split1 = duração.split("h ")
    if(split1.length ===1){arr[i].duration = Number(split1[0][0])*60}
    else{
    split2 = split1[1].split("min")
    arr[i].duration = Number(split1[0][0])*60 + Number(split2[0])
    }
  }
  let newArr = arr.map(array => array)
  return newArr
}

                 


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(arr) {
  if(arr.length ===0){return null}
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
