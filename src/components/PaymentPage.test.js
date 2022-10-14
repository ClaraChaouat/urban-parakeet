import { PaymentPage } from "./PaymentPage";
import { screen, render, fireEvent } from "@testing-library/react";

/**

- Expect/Mock -> Jest https://jestjs.io/docs/expect
- Query React -> https://testing-library.com/docs/queries/about
- Assert DOM elements -> https://github.com/testing-library/jest-dom

npm t -- --coverage

TODO:
- Remove export from numberUpTo2decimals
*/

describe("<PaymentsPage />", () => {
  it("splits the total amount equally through the payment methods", () => {
    render(<PaymentPage count={3} />);

    // Sanity check - Assert Semantics with getByRole()
    const title = screen.getByRole("heading", {
      level: 1,
      name: "Payment",
    });
    expect(title).toBeInTheDocument();

    // Set total to 100 for/id
    // NOTE: Ids shoudln't have spaces (eg id="total-amount")
    const totalInput = screen.getByLabelText("Total amount to pay:");

    fireEvent.change(totalInput, { target: { value: "100" } });

    expect(screen.getByLabelText("Total amount to pay:").value).toBe("100");

    expect(screen.getByLabelText("Payment method number 1:").value).toBe(
      "33.33"
    );
    expect(screen.getByLabelText("Payment method number 2:").value).toBe(
      "33.33"
    );
    expect(screen.getByLabelText("Payment method number 3:").value).toBe(
      "33.33"
    );
  });

  it("when changing one of the payment methods, the others update to match the total amount", () => {
    render(<PaymentPage count={3} />);

    // Change the total amount
    const totalInput = screen.getByLabelText("Total amount to pay:");
    fireEvent.change(totalInput, { target: { value: "100" } });

    expect(screen.getByLabelText("Total amount to pay:").value).toBe("100");

    // Change one of the payment methods
    const method1 = screen.getByLabelText("Payment method number 1:");
    fireEvent.change(method1, { target: { value: "50" } });

    // Verify all payment methods are correct
    expect(screen.getByLabelText("Payment method number 1:").value).toBe("50");
    expect(screen.getByLabelText("Payment method number 2:").value).toBe("25");
    expect(screen.getByLabelText("Payment method number 3:").value).toBe("25");
  });

  it("shows an error when one of the payment methods is below 0 (zero)", () => {
    render(<PaymentPage count={3} />);

    // Change the total amount
    const totalInput = screen.getByLabelText("Total amount to pay:");
    fireEvent.change(totalInput, { target: { value: "100" } });

    expect(screen.getByLabelText("Total amount to pay:").value).toBe("100");

    // Change one of the payment methods
    const method1 = screen.getByLabelText("Payment method number 1:");
    fireEvent.change(method1, { target: { value: "-5" } });

    // Verify that the error message is visible
    expect(
      screen.getByText("The number you entered can't be negative")
    ).toBeInTheDocument();

    // Verify the error disappears if the method amount is positive again
    fireEvent.change(method1, { target: { value: "15" } });
    expect(
      screen.queryByText("The number you entered can't be negative")
    ).not.toBeInTheDocument();
  });
});
