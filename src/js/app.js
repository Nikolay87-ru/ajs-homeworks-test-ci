// TODO: write your code here
import fetchData from './http';

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

export function getLevel(userId) {
  const response = fetchData(`https://server/user/${userId}`);
  
  if (response.status === 'ok') {
     return `Ваш текущий уровень: ${response.level}`; 
  }
  
  return `Информация об уровне временно недоступна`;
}