/*
Create a vanilla JS application that consumes the https://pokeapi.co/api/v2/pokemon/ API and displays a dropdown list of pokemons. When the user selects a pokemon from the dropdown, the application should make a second API call using the "url" returned in the first API call to fetch the pokemon's details, including its abilities, and display them on the page. Once the details are fetched, they should be cached and the application should not make another API call for that pokemon again.						
*/


const arr = [{x: 2}, {x: 4}, {x: 5}];

const totalValueOfX = arr.reduce((total, currentObj, arr) => total += currentObj['x'], 0);

console.log(totalValueOfX);


/*
function getTotal(list) {
	let total = 0;
  let i = 0;
  
  cont lengthOfList = list.length;
  for(;i<;i++) {
  	total += list[i].x;
  }
  return total
}

getTotal(arr);
*/