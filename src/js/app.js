// TODO: write your code here

export function healthStatus(character) {
  if (character.health > 50) {
    return "healthy";
  }
  if (character.health >= 15) {
    return "wounded";
  }
  return "critical";
}

export function sortingListOfHeroes(heroes) {
  return heroes.sort((x, y) => x.health - y.health).reverse();
}
