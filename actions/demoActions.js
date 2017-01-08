export const SET_STRING = 'SET_STRING';

export function setString(theString: String = 'the default string') {
  return {
    type: SET_STRING,
    theString
  }
}