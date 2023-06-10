import { ISLOADING } from "dummy/general";
import { setIsLoading } from "store/action/general";
import store from "store/store";

describe("General Action", () => {
  it("setIsLoading should return with same value", () => {
    store.dispatch(setIsLoading(ISLOADING));
    let isLoading = store.getState().generalReducer.isLoading;
    expect(isLoading).toBe(ISLOADING);
  });
});
