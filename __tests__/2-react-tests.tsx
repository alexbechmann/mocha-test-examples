import React, { useState, useReducer } from 'react';
import { render, findAllByText, findByText, findByTestId } from '@testing-library/react';
import { expect } from 'chai';

function DemoComponent() {
  const [count, setCount] = useState(0);
  // const [{ count }, dispatch] = useReducer(countReducer, { count: 0 });
  return (
    <div data-testid="demo-component">
      <p data-testid="status">Count: {count}</p>
      <a
        onClick={() => {
          setCount(count + 2);
          // dispatch({ type: "INCREMENT" });
        }}
      >
        Increment
      </a>
    </div>
  );
}

// describe("react tests - demo component", () => {
//   it("Shows correct initial status", async () => {
//     const { debug, container } = render(<DemoComponent />);
//     const p = await findByTestId(container, "status");
//     expect(p.innerHTML).to.equal("Count: 0");
//   });

//   it("Click increments the counter", async () => {
//     const { debug, container } = render(<DemoComponent />);
//     const incrementButton = await findByText(container, "Increment");

//     debug(container);
//     incrementButton.click();
//     incrementButton.click();
//     incrementButton.click();
//     debug(container);

//     const p = await findByTestId(container, "status");
//     expect(p.innerHTML).to.equal("Count: 3");
//   });

//   it("count reducer increments as it should", () => {
//     let state = { count: 0 };
//     state = countReducer(state, { type: "INCREMENT" });
//     state = countReducer(state, { type: "INCREMENT" });
//     expect(state.count).to.equal(2);
//   });
// });

function countReducer(state: { count: number }, action: { type: 'INCREMENT' }) {
  switch (action.type) {
    case 'INCREMENT': {
      return {
        count: state.count + 1
      };
    }
    default: {
      return state;
    }
  }
}
