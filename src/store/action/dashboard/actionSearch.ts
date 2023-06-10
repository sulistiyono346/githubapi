import { getReposDetail, getSearch } from "api";
import { AppDispatch, RootState } from "store/store";
import { initialResponse, setResponse } from ".";
import { setIsLoading } from "../general";
import { User } from "interface/user";

export const actionSearch =
  (payload: string) => (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(setIsLoading(true));
    dispatch(initialResponse([]));
    getSearch({
      q: payload,
      per_page: 5,
    })
      .then(({ data }) => {
        dispatch(setIsLoading(false));
        dispatch(setResponse(data.items));
      })
      .catch(async (error) => {
        dispatch(setIsLoading(false));
        dispatch(initialResponse([]));
      });
  };

export const actionGetReposDetail =
  (payload: string) => (dispatch: AppDispatch, getState: () => RootState) => {
    getReposDetail({ userid: payload })
      .then(async ({ data }) => {
        const user = getState().dashboardReducer.user;

        const result = user.map((val: User) =>
          payload === val.login ? { ...val, repos: data } : val
        );
        dispatch(setResponse(result || []));
      })
      .catch(({ response }) => {});
  };
