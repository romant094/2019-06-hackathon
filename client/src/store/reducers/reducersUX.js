import * as types from '../actions/actionTypes';


const initialState = {
  sideBarVisible: false,
};


export function sidebarOpenClose(state = initialState, action) {
  console.log('RED sidebarOpenClose',action.type)
  switch (action.type) {
    case types.SIDEBAR_OPEN:
      return {
        sidebarVisible: true,
        sidebarOpened: false,
      }
    case types.SIDEBAR_OPENED:
      return {
        sidebarVisible: true,
        sidebarOpened: true,
      }
    case types.SIDEBAR_CLOSE:
      return {
        sidebarVisible: false,
        sidebarOpened: true,
      }
    case types.SIDEBAR_CLOSED:
      return {
        sidebarVisible: false,
        sidebarOpened: false,
      }
    case types.SIDEBAR_TOGGLE:
      return {
        sidebarVisible: !state.sidebarVisible,
      }
    default:
      return state;
  }
}



