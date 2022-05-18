import { heroes } from '../data/heroes';


export const getHeroesByPublisher = (publisher) => {
  const validPublishers = ['DC Comics', 'Marvel Comics'].includes(publisher);

  if (!validPublishers)
    throw new Error(`${publisher} is not a valid publisher`)

  return heroes.filter(h => h.publisher === publisher);
}