import { render, screen } from "@testing-library/react";
import Input from "../components/common/Inputs";

describe("<Input />", () => {
  it("should contain a placeholder text", async () => {
    render(<Input onChange={() => undefined} />);
    const placeholder = screen.getByPlaceholderText(/Search/i);

    expect(placeholder).toBeInTheDocument();

    // ???
  });
});
