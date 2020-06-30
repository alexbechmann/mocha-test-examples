import React from "react";
import { render, findAllByText, findByText } from "@testing-library/react";
import { expect } from "chai";

function DemoComponent() {
  return (
    <div test-id="demo-component">
      <p>hi</p>
    </div>
  );
}

describe("react tests - demo component", () => {
  it("Shows correct text", async () => {
    const { debug, container } = render(<DemoComponent />);
    debug();
    const p = await findByText(container, "hi");
    expect(p.innerHTML).to.equal("hi");
  });
});
