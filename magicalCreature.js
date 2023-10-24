// Welcome to the magical zoo! Your task is to create and manage a list of magical creatures. Let's have some fun!

// 1. Declare a variable named 'creatureName' and assign it a magical creature's name as a string.
let creatureName = 'dragon'



// 2. Declare a variable named 'creatureDescription' and describe its magical properties as a string.
let creatureDescription = "cool and big"

// 3. Do you believe that this creature is friendly to humans? 
// Declare a variable named 'isFriendly' and assign it a boolean value.
let isFriendly = false


// 4. The magical zoo has an age restriction! Declare a variable named 'visitorAge' and assign it a random age between 1 and 60.
// Hint: Use Math.floor() to round a number up.
// Hint: Use Math.random() for generating random numbers.
const visitorAge = Math.floor(Math.random() * 60) + 1
console.log(visitorAge)


// 5. Determine if the visitor is allowed to see the creature.
// Declare a variable named 'canVisit' and assign it an expression to see 
// if the visitorAge variable is greater than 15.
// Hint: use this resource if you need support: https://www.w3schools.com/js/js_booleans.asp 
if(visitorAge > 15){
  let canVisit = true
  console.log(canVisit)
}else{
  let canVisit = false
  console.log(canVisit)
}

  


// 6. Combine all the information into a summary.
// Declare a variable named 'zooSummary' and combine all the above information using concatenation.
let zooSummary = (creatureName + " is " + creatureDescription + " and you need to be 15 years old to visit it.")

// 7. Print the summary using console.log()
console.log(zooSummary)


// Challenge:
// 8. Now, imagine there are three more creatures in the zoo. 
//    Repeat Tasks 1-6 for each creature, then combine all summaries into a single variable 'allZooSummaries'.
// 9. Print the 'allZooSummaries' to see the details of all the creatures in the magical zoo.

//creature 2 
let creature2 = 'unicorn'
let creature2Description = 'cool and magical'
let creature2Friendly = true
const creature2Age = Math.floor(Math.random() * 60) + 1
console.log(creature2Age)
if(creature2Age > 15){
  let canVisit2 = true
  console.log(canVisit2)
}else{
  let canVisit2 = false
  console.log(canVisit2)
}
let creature2ZooSummary = (creature2 + " is " + creature2Description + " and you need to be 15 years old to visit it.")
console.log(creature2ZooSummary)

//creature3
let creature3 = 'fairy'
let creature3Description = 'smol n magical'
let creature3Friendly = true
const creature3Age = Math.floor(Math.random() * 60) + 1
console.log(creature3Age)
if(creature3Age > 15){
  let canVisit3 = true
  console.log(canVisit3)
}else{
  let canVisit3 = false
  console.log(canVisit3)
}
let creature3ZooSummary = (creature3 + " is " + creature3Description + " and you need to be 15 years old to visit it.")
console.log(creature3ZooSummary)