import { fireEvent, render, screen } from "@testing-library/react";
import App from './app';

describe('App', () => {
  it("test-case 1", () => {
    render(<App />);
    expect(screen.getAllByTestId("li").length).toBe(4);
  });
});
