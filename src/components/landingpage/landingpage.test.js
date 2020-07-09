import React from "react";
import ReactDOM from "react-dom";
import LandingPage from "./LandingPage";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import * as rtl from '@testing-library/react'

test("renders the landing page without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <LandingPage />
    </BrowserRouter>,
    div
  );
});


test('renders dashboard component', () => {
    const wrapper = rtl.render(<BrowserRouter><LandingPage/></BrowserRouter>)
    const element = wrapper.getByText(/Get Started/i)
    expect(element).toBeInTheDocument()


})

test('renders dashboard component', () => {
    const wrapper = rtl.render(<BrowserRouter><LandingPage/></BrowserRouter>)
    const element = wrapper.getByText(/Sign In/i)
    expect(element).toBeInTheDocument()
})



