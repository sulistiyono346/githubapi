import { render, screen } from "@testing-library/react";
import Dashboard from "pages/dashboard";
import { unmountComponentAtNode } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "store/store";

let container: any = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Dashboard Pages", () => {
  it("should have", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </Provider>,
      container
    );

    expect(screen.getByTestId("input-user-name")).toBeInTheDocument();
    expect(screen.getByTestId("button-search")).toBeInTheDocument();
  });
});
