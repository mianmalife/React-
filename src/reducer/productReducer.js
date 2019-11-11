import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE
} from "../action/productAction";

const initialState = {
  item: []
};
export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_BEGIN:
      return {
        ...state
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        item: action.payload.products
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        item: []
      };
    default:
      return state;
  }
}
