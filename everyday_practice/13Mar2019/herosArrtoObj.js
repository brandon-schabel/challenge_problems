
/*
Write a function consumes the provided array and returns 
an object of objecs where the key is the hero name.
Do no mutate original data and try to minimize loops.

Expected Output: 
{ 
  ironman: {
    firstName: 'Tony',
    lastName: 'Stark
  },
  captainamerica: {
    firstName: 'Steve',
    lastName: 'Rodgers'
  },
  hulk: {
    firstName: 'Bruce',
    lastName: 'Banner'
  },
  blackwidow: {
    firstName: 'Natasha',
    lastName: 'Romanoff'
  },
  scarletwitch: {
    firstName: 'Wanda',
    lastName: 'Maximoff'
  },
  falcon: {
    firstname: 'Sam',
    lastName: 'Wilson'
  }
}
*/
const herosArray = [
  ['ironman','Tony Stark'],
  ['captainamerica','Steve Rogers'],
  ['hulk', 'bruce banner'],
  ['blackwidow', 'Natasha Romanoff'],
  ['scarletwitch', 'Wanda Maximoff'],
  ['falcon', 'Sam Wilson']
]

/* solution */
const convHeroArrToObj = (herosArray) =>  {
  const herosObj = {}
  herosArray.forEach((hero, index) => {
    const heroName = hero[1].split(' ');
    herosObj[hero[0]] =  {
      firstName: heroName[0],
      lastName: heroName[1]
    }
  })

  return herosObj;  
}

