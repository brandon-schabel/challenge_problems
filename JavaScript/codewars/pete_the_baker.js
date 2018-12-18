function cakes(recipe, available) {
  let recIng = Object.keys(recipe)
  let availIng = Object.keys(available)

  for (let i = 0; i < recIng.length; i++) {
    if (recipe[recIng[i]] > available[recIng[i]] || available[recIng[i]] === undefined) return 0
  }

  let bottleneck = recIng.map((el) => {
    return available[el] / recipe[el]
  })

  return Math.floor(Math.min(...bottleneck))

}
