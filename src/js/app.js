// TODO: write your code here
// import sum from "./basic";

// console.log("worked");

// console.log(sum([1, 2]));

/**
 * @param {Object} - {name: 'Маг', health: 90}
 */

export function healthStatus(character) {
  if (character.health > 50) {
    return "healthy";
  }
  if (character.health >= 15) {
    return "wounded";
  }
  return "critical";
}