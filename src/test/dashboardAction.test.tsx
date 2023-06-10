import { USER, USERNAME } from "dummy/dashboard";
import {
  initialResponse,
  setResponse,
  setUserName,
} from "store/action/dashboard";
import store from "store/store";

describe("Dashboard Action", () => {
  it("setResponse should return with same value", () => {
    store.dispatch(setResponse(USER));
    let user = store.getState().dashboardReducer.user;
    expect(user).toBe(USER);
  });
  it("initialResponse should return with array lent 0", () => {
    store.dispatch(initialResponse([]));
    let user = store.getState().dashboardReducer.user;
    expect(user.length).toBe(0);
  });

  it("setUserName should return with same value", () => {
    store.dispatch(setUserName(USERNAME));
    let username = store.getState().dashboardReducer.username;
    expect(username).toBe(USERNAME);
  });
});
