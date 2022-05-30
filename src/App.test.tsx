import { screen } from "@testing-library/react";
import { render } from "./test-utils";
import NavBar from "./components/NavBar";

test("Should render", () => {
  render(<NavBar />);
  const linkElement = screen.getByText("Shopka");
  expect(linkElement).toBeInTheDocument();
});
