import { heroes } from '../data/heroes'

export const heroById = (id = '') => {
  return heroes.find((hero) => hero.id === id)
}
