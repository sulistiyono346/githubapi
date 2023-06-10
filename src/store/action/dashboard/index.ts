import { UserSchema } from "interface/user";
import { AppDispatch } from "store/store";

export const SET_RESPONSE = "dashboard/ADD_ARTICLE";
export const SET_USERNAME = "dashboard/SET_USERNAME";

export const setResponse = (payload: UserSchema) => (dispatch: AppDispatch) =>
  dispatch({ type: SET_RESPONSE, payload });

export const initialResponse = (payload: []) => (dispatch: AppDispatch) =>
  dispatch({ type: SET_RESPONSE, payload });

export const setUserName = (payload: string) => (dispatch: AppDispatch) =>
  dispatch({ type: SET_USERNAME, payload });
