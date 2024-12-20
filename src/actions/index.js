// import flats from '../flats';

export const SET_FLATS = 'SET_FLATS';
export const SELECT_FLAT = 'SELECT_FLATS';

export function setFlats() { 
  // todo: call API, fetch json
  const promise = fetch('https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json') 
        .then(response => response.json());

  return { 
    type: SET_FLATS, 
    payload: promise 
  }; 

  // return { 
  //   type: 'SET_FLATS', 
  //   payload: flats 
  // }
}

export function selectFlat(flat) {
  return {
    type: SELECT_FLAT,
    payload: flat
  }
}
