import { OFFERS_LOADED,OFFER_ADD,OFFERS_LOADING,OFFERS_ERROR, OFFER_DELETE, OFFER_EDIT,USER_LOGGING, USER_LOGOUT } from './constants';

export const initialState = {
  offers: [],
  offLoaded: false,
  error: null,
  loading:false,
  user:null,
  login:false,
};


const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case OFFERS_LOADED: {
      const { offers } = action.payload;
      return Object.assign({}, state, { offers,offLoaded: true,error: false,loading:false });
    }
    case OFFERS_LOADING:{
      return Object.assign({},state,{loading:true,error:null});
    }
    case OFFERS_ERROR:{
      const {error}=action.payload;
      return Object.assign({},state,{loading:true,error});
    }
    case OFFER_ADD:{
      const {newoffer}=action.payload;
      const newoffers=[...state.offers, newoffer]
      return Object.assign({},state,{offers: newoffers});     
    }
    case OFFER_DELETE:{
      return state;     
    }
    case OFFER_EDIT:{
      const {editoffer}=action.payload;
      const editoffers=[...state.offers, editoffer]
      return Object.assign({},state,{offers: editoffers});   
    }
    case USER_LOGGING:{
      const user=action.payload;
      return Object.assign({},state,{user, login: true});
    }
    case USER_LOGOUT:{
      return Object.assign({},state,{user: null, login: false, offers: []});
    }
    default:
        return state
  }
}

export default appReducer;