import { AppDispatch } from "store/store";

export const SET_IS_LOADING = "general/SET_IS_LOADING";

export const setIsLoading = (payload: boolean) => (dispatch: AppDispatch) =>
  dispatch({ type: SET_IS_LOADING, payload });
