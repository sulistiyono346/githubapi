import * as actionTypes from "store/action/general";

const initialState = {
  isLoading: false,
};

const generalReducer = (state = initialState, { payload, type }: any) => {
  switch (type) {
    case actionTypes.SET_IS_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
  }
  return state;
};

export default generalReducer;
