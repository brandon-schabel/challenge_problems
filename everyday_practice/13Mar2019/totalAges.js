/*

Write a function that consumes the provided array
and returns the combined age of all of the entries.

Expected Output: 159
*/
const friends = [
  {
    firstName: 'Rachel',
    lastName: 'Green',
    age: 25
  },
  {
    firstName: 'Monica',
    lastName: 'Geller',
    age: 26
  },
  {
    firstName: 'Phoebe',
    lastName: 'Buffay',
    age: 28
  },
  {
    firstName: 'Joey',
    lastName: 'Tribbiani',
    age: 26
  },
  {
    firstName: 'Chandler',
    lastName: 'Bing',
    age: 27
  },
  {
    firstName: 'Ross',
    lastName: 'Geller',
    age: 27
  },
  {
    firstName: 'Ben',
    lastName: 'Geller'
  }
]

/* solution */
const getTotalAge = (people) => {
  let totalAge = 0;
  people.forEach(person => person.age ? totalAge += person.age : null)
  return totalAge
}