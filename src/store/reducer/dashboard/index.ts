import * as actionTypes from "store/action/dashboard";

const initialState = {
  username: "",
  user: [],
};

const dashboardReducer = (state = initialState, { payload, type }: any) => {
  switch (type) {
    case actionTypes.SET_USERNAME:
      return {
        ...state,
        username: payload,
      };
    case actionTypes.SET_RESPONSE:
      return {
        ...state,
        user: payload,
      };
  }
  return state;
};

export default dashboardReducer;
