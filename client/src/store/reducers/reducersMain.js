const initialState = {
  // isModalPhotoOpen: false,
  items: [],
};




export const getPricesRes = (state = initialState, action) => {
  switch (action.type) {
    case 'FIND_AERO_TICKETS_SUCCESS':
      console.log('RED FIND_AERO_TICKETS_SUCCESS',action.payload)
      state = {
        ...state,
        items: action.payload
      }
      break
    case 'FIND_AERO_TICKETS_ERR':
      console.log('RED FIND_AERO_TICKETS_ERR')
      state = {
        ...state,
        items: {}
      }
      break
    // default:
    //   return state;
  }
  return state;
}






/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
// trash
/*
export function itemsHasErrored(state = false, action) {
  switch (action.type) {
    case 'ITEMS_HAS_ERRORED':
      return action.hasErrored;

    default:
      return state;
  }
}

export function itemsIsLoading(state = false, action) {
  switch (action.type) {
    case 'ITEMS_IS_LOADING':
      return action.isLoading;

    default:
      return state;
  }
}
  */