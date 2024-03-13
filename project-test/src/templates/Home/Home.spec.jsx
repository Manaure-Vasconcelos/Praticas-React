/* eslint-disable no-undef */

import { render } from "@testing-library/react";
import Home from "./Home.jsx";

describe('Template Home', () => {
  it('should render search, posts and postPerPage', () => {
    const page = render(<Home />);
    
    expect(page).toBeInTheDocument()
  });
});

