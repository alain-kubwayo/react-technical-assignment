import { render, screen } from "@testing-library/react";
import Profile from "./Profile";

describe("ProfilePage", () => {
  it("should render the Profile page", async () => {
    render(<Profile />);
    expect(screen.getByText(/profile/i)).toBeInTheDocument();
  });
});
