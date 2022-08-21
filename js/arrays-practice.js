//STEP 1
// let myFavorMovies = ['Spider Man', 'Iron Man', 'Hours after Hours', 'Tomb Stone', 'Rome Holiday'];
// console.log('The second movie is' + ' ' + myFavorMovies[01]);

//STEP 2
// let movies = [];
// movies[0] = 'Spider Man';
// movies[1] = 'Iron Man';
// movies[2] = 'ter Hours';
// movies[3] = 'Tomb Stone';
// movies[4] = 'Rome Holiday';
// console.log('The first movie is' + ' '+ movies[0]);

//STEP 3
// let movies = [];
// movies[0] = 'Spider Man';
// movies[1] = 'Iron Man';
// movies[2] = 'Inception';
// movies[3] = 'ter Hours';
// movies[4] = 'Tomb Stone';
// movies[5] = 'Rome Holiday';
// console.log('The first movie is' + ' '+ movies[0]);
// console.log(movies.length);

//STEP 4
// let movies = ['Spider Man', 'Iron Man', 'Hours after Hours', 'Tomb Stone', 'Rome Holiday'];
// delete movies[0];
// console.log(movies);

//STEP 5
// let movies = ['Spider Man', 'Iron Man', 'Hours after Hours', 'Tomb Stone', 'Rome Holiday', 'Inception', 'West in the West'];
// for (let movie in movies) {
//     console.log(movies[movie]);
// }
//STEP 6
// let movies = ['Spider Man', 'Iron Man', 'Hours after Hours', 'Tomb Stone', 'Rome Holiday', 'Inception', 'West in the West'];
// for (let movie of movies) {
//     console.log(movie);
// }

//STEP 7
// let movies = ['Spider Man', 'Iron Man', 'Hours after Hours', 'Tomb Stone', 'Rome Holiday', 'Inception', 'West in the West'];
// for (let movie of movies) {    
//     console.log(movie);    
// };
// console.log(movies.sort());

//STEP 8
// let movies = ['Spider Man', 'Iron Man', 'Hours after Hours', 'Tomb Stone', 'Rome Holiday', 'Inception', 'West in the West'];
// let leastFavMovies = [];
// for (let movie in movies) {
//     console.log(movies[movie]);
// };
// leastFavMovies = ['Movies I like:',' ', 'Spider Man', 'Iron Man', 'Rome Holiday', 'Inception',' '];
// leastFavMovies = leastFavMovies.concat('Movies I regret watching:', ' ','Hours after Hours', 'Tomb Stone', 'West in the West');
// console.log(leastFavMovies);
// for (let eachItem of leastFavMovies){
//     console.log(eachItem);
// }

//STEP 9
// let movies = ['Spider Man', 'Iron Man', 'Hours after Hours', 'Tomb Stone', 'Rome Holiday', 'Inception', 'West in the West'];
// console.log(movies.reverse());

//STEP 10
// let movies = ['Spider Man', 'Iron Man', 'Hours after Hours', 'Tomb Stone', 'Rome Holiday', 'Inception', 'West in the West'];
// console.log(movies.reverse());
// movies = movies.pop();
// console.log(movies);

//STEP 11
// let movies = ['Spider Man', 'Iron Man', 'Hours after Hours', 'Tomb Stone', 'Rome Holiday', 'Inception', 'West in the West'];
// console.log(movies.reverse());
// movies = movies.shift();
// console.log(movies);

//STEP 12
// leastFavMovies = ['Movies I like:',' ', 'Spider Man', 'Iron Man', 'Rome Holiday', 'Inception',' '];
// leastFavMovies = leastFavMovies.concat('Movies I regret watching:', ' ','Hours after Hours', 'Tomb Stone', 'West in the West');
// console.log(leastFavMovies);
// for (let eachItem of leastFavMovies){
//     console.log(eachItem);
// };
// FIND OUT THE MOVIES' INDEX THAT I DISLIKE
// console.log(leastFavMovies.indexOf('Hours after Hours'));
// console.log(leastFavMovies.indexOf('Tomb Stone'));
// console.log(leastFavMovies.indexOf('West in the West'));
// leastFavMovies[leastFavMovies.indexOf('Hours after Hours')] = 'Coco';
// leastFavMovies[leastFavMovies.indexOf('Tomb Stone')] = 'Revenge';
// leastFavMovies[leastFavMovies.indexOf('West in the West')] = 'Skyfall';
// delete leastFavMovies[leastFavMovies.indexOf('Movies I regret watching:')];
// console.log(leastFavMovies);

//STEP 13
// The following is failed when I use filter() -- I need to re-do this
// let i, j;
// let movieNames = [];
// let movies = [['Spider Man',5], ['Iron Man',4], ['Hours after Hours',3], ['Tomb Stone',2], ['Rome Holiday',1]];

// // Loop the outer array 
// for (i=0; i< movies.length; i++) {
//     // get the size of the inner array
//     var innerArrayLength = movies[i].length;
//     // Loop the inner array
//     for (j = 0; j < innerArrayLength; j++) {
//         console.log('[' + i + ',' + j + '] = ' + movies[i][j]);
//         console.log(movies[i][0])               
//     };                 
// };
// Method 2
// let movies = ['Spider Man',5, 'Iron Man',4, 'Hours after Hours',3, 'Tomb Stone',2, 'Rome Holiday',1];
// movieNames = movies.filter((item) => {
// 	return typeof item === 'string';
// });
// console.log(movieNames);

 
//STEP 14
let employees = ['ZAK', 'JESSICA', 'MARK', 'FRED', 'SALLY'];
console.log('Employees:');
console.log('           ');
for (let i of employees) {
    console.log(i);
}; 

//STEP 15
// let theAarry = [58, '', 'abcd', true, null, false, 0];
// theAarry = theAarry.splice(0,4);
// console.log(theAarry)

//STEP 16 --I need to re-do it.
// let numbers = [2,48,25,22,16,78,100,450,600,1021];
// for (i=0; i< numbers.length; i++) {
//     numbers = numbers.slice(Math.floor(Math.random()*10+1));    
// }
// console.log(numbers);
 
//STEP 17
// let numbers = [18,5,6,25.5,100];
// let highestNum;
// for (let i=0; i<numbers.length-1; i++) {
//     if (numbers[i]>numbers[i+1]) {
//         highestNum = numbers[i];
//     } else {
//         highestNum = numbers[i+1];
//     };
// };
// console.log(highestNum);
