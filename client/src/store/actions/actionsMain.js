import fetch from 'node-fetch';
import * as types from './actionTypes';



/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////


export const getPrices =  (params) => {

  console.log('ACT getPrices',params)

  return (dispatch) => {

    let url = ``

    return fetch(url)
     .then((res) => res.json())
     .then((items) => {
       // console.log('getPrices',items)
       dispatch(getPricesRes(items))
     })
     .catch(() => dispatch(getPricesRes()));

  }

}



export const getPricesRes = (items) => {

  console.log('ACT getPricesRes',items)

  return {
    type: items ? types.FIND_AERO_TICKETS_SUCCESS : types.FIND_AERO_TICKETS_ERR,
    payload: items,
  }

}

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////






/*
getPrices = async () => {
  //http://localhost:3000/купить_билет/из_LED_в_SVO_12-06-2019_24-06-2019_1_взрослый_бизнес-класс
  var {origin, destination, dateFront, dateBack, passengers} = this.state
  var link = `/из_${origin}_в_${destination}_${dateFront}_${dateBack}_${passengers}_взрослый_бизнес-класс`
  fetch('/api'+encodeURI('/купить_билет'+link))
    .then(res => res.json())
    .then(users => this.setState({allTickets:users}));
}
*/