import axios from 'axios';


export function getPhotos()  {
  return async (dispatch) => {
    const res = await axios.get('http://url');
    dispatch({
      type: 'GET_PHOTOS',
      payload: res.data,
    })
  }

}