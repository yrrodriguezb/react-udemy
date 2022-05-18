import { heroes } from '../data/heroes';


export const getHeroesByName = (name = '') => {
  if (name.trim().length === 0)
    return []

  name = name.toLowerCase();
  return heroes.filter(h => h.superhero.toLocaleLowerCase().includes(name));
}