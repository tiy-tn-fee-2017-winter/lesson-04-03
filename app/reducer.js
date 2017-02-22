/**
 * @param  {Object} state  Old state from the app
 * @param  {Object} action Redux action (I hope it has a "type" and "data")
 * @return {Object} new state { snacks: [...] }
 */
export default function reducer(state, action) {

  // CREATE: Add a new snack
  if (action.type === 'SNACK@CREATE') {
    return { snacks: [action.data, ...state.snacks] };
  }

  // READ: Loading all snacks
  if (action.type === 'SNACK@FIND_ALL') {
    return { snacks: action.data };
  }
  // READ: Load a single snack
  // UPDATE: Update the data for a single snack
  // DESTROY: Remove a snack from the list

  return state || { snacks: [] };
}





// if (state) {
//   return state;
// } else {
//   return { snacks: [] };
// }
// return state ? state : { snacks: [] };
// return state || { snacks: [] };
