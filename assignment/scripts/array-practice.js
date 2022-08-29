console.log('****** Array Practice *******');

// 1. Creating arrays
console.log('--- 1. Practice creating arrays ---');
// Example: Array of animals
let animalArray = ['fish', 'cat', 'bird', 'dog'];
console.log('Animals are: ', animalArray);

// 1.a. TODO: Make an array with some favorite foods
let favFoods = [
    'fish','cats','birds','dogs','chocolate','protein','fruit'
]

// 1.b. TODO: Log your array of foods to the console with a message, similar 
//      to the example above

console.log('My favorite foods are: ', favFoods);

// 2. Array.length - tells you how many items are in the array
console.log('--- 2. Length of an array ---');

// Example: How many animals are in the array? 
console.log('Number of animals:', animalArray.length);

// 2.a. TODO: Log to the console the number of foods in your array
console.log("There are",favFoods.length,"food items in my 'favFoods' array list");

// 3. Accessing array items
console.log('--- 3. Accessing items in an array ---');

// Example: Log the first animal from the array using it's array index
console.log('First animal is', animalArray[0])

// 3.a. TODO: Log the second animal in the array 
console.log("The second animal in the 'animalArray' array is",animalArray[1] + ",","at index '[1]'");

// 3.b. TODO: Log the last animal in the array using it's array index 
console.log("The last animal in the 'animalArray' array is:",animalArray[3] +",","at \
index",animalArray.length-1);

// 3.c. (STRETCH) TODO: Log the last animal by using the array length, 
//      instead of the exact index number of the last item
console.log("The last animal in the 'animalArray' array is", animalArray[animalArray.length-1]+",","at \
index",animalArray.length-1);

// 4. Adding & Removing Array Items
console.log('--- 4. Adding and removing array items ---');

// Example: Add an animal to the end using Array.push
animalArray.push('penguin');
console.log('Added an animal to end,', animalArray);

// 4.a. TODO: Add a new food at the end of your array & log the array
favFoods.push("laundry detergent");
console.log("I added:",favFoods[favFoods.length-1]+",","to my list of favorite foods, with \
a new result being:",favFoods);
console.log("New array length is",favFoods.length);


// Example: Remove the last animal by using Array.pop
let removedAnimal = animalArray.pop();
console.log('Removed the last animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.b. TODO: Remove the food at the end of your array & 
//      log both the food removed and the updated array

let removedFood = favFoods.pop();
console.log("The removed food item:",removedFood);
console.log("The favFoods array length is once again",favFoods.length,"and is once again",favFoods);

// Example: Add an animal to the beginning using Array.unshift
animalArray.unshift('walrus');
console.log(`Added an animal to beginning: ${animalArray}`);

// 4.c. TODO: Add a food at the beginning of the array & log the array
favFoods.unshift("arsenic");
console.log(`Added one of my favorite foods, ${favFoods[0]}, to the \
beginning of the 'favFoods' array: ${favFoods}- new length is`,favFoods.length);
console.log("Here's the array in a more distinct form",favFoods)
//NEW COMMENT: I kept favFoods.length out of the template literal backticks because the
// interpolation method to call the variables rendered the number in a less distinct way.
// This way, the number is blue in the console.
// Previously, I'd read about interpolation but glossed over it as I didn't fully understand it,
// but seeing it in action is a nice new tool to have learned. 

// Example: Remove the first animal using Array.shift
removedAnimal = animalArray.shift();
console.log('Removed the first animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.d TODO: Remove the food at the beginning of your array & 
//     log both the food removed and the updated array
removedFoods = favFoods.shift();
console.log(`Removed the first food item in my 'favFoods' array: ${removedFoods}`);
console.log(`New favFoods array length is ${favFoods.length}`,"(",favFoods.length,")");
console.log("Updated favFoods array is now",favFoods);

// 4.e (STRETCH) TODO: Replace the second food in your array
//      with another one of your favorite foods.
//      Then log the updated array.
favFoods[1] = 'hamburger';
console.log(`favFoods array's previous food item 'cats' is now ${favFoods[1]}`, "\
and the array looks like this:",favFoods);

// 4.f (STRETCH) TODO: Sort your favoriteFoods array
//     in reverse alphabetical order. Log the array.

for(let i = favFoods.sort().length-1; i >= 0; i--) {
       console.log(favFoods[i]);
}//end of 4.f example 1
 console.log(favFoods.sort().reverse()); 
 //end of 4.f example 2. /n
 
console.log(["protein","hamburger","fruit","fish","dogs","chocolate","birds"]);//end of 4.f example 3
 
//end 4.f example 2

// 4.g (STRETCH) TODO: Convert your array to a string
//     putting the word "and" between each item.
//     eg "tacos and pizza and pasta". Log the string.
favFoods.toString();
console.log(favFoods.join(" and ") );
 

// 4.h (STRETCH) TODO: Make a new array that combines 
//     the favorite foods array with the animals array.
//     Then log the new array.
//     It should look something like:
//     ['pizza', 'pasta', 'fish', 'cat', 'bird', 'dog']

const foodAnimals = favFoods.concat(animalArray);

 console.log(foodAnimals); //I included array items from Animals when creating my favorite foods.
 // Because of this, it looks confusing as there is no clear distinction between the two.
 // There are ways I could create that distinction of course. I think I'm just going to sort them
 // though, like the previous example. 

 foodAnimals.sort().reverse();
 console.log(foodAnimals);
 //There, at least it looks more organized although practically it's not much use to concatenate the two. /n
