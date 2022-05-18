import { heroes } from '../data/heroes';


export const getHeroesById = (heroId) => {
  return heroes.find(h => h.id === heroId);
}