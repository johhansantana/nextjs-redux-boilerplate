export const SET_KITTENS = 'SET_KITTENS';

export function setKittens(kittens: Object) {
  return {
    type: SET_KITTENS,
    kittens
  }
}