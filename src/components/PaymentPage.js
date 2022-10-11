import "./paymentpage.scss";
import { useState } from "react";

export function PaymentPage() {
  const [totalAmount, setTotalAmount] = useState("");
  const [paymentMethodNumber1, setPaymentMethodNumber1] = useState("");
  const [paymentMethodNumber2, setPaymentMethodNumber2] = useState("");

  function handleTotalAmount(event) {
    setTotalAmount(event.target.value);
    setPaymentMethodNumber1(event.target.value / 2);
    setPaymentMethodNumber2(event.target.value / 2);
  }

  function handlePaymentMethodNumber1(event) {
    setPaymentMethodNumber1(event.target.value);
    setPaymentMethodNumber2(totalAmount - event.target.value);
  }

  function handlePaymentMethodNumber2(event) {
    setPaymentMethodNumber2(event.target.value);
    setPaymentMethodNumber1(totalAmount - event.target.value);
  }

  return (
    <div className="paymentPageContainer">
      <form className="paymentForm">
        <div className="paymentFormTitle">
          <p>Payment</p>
        </div>
        <div className="totalAmountContainer">
          <div className="totalAmountCard">
            <label>Total amount to pay:</label>
            <input
              className="totalAmountInput"
              type="text"
              onChange={handleTotalAmount}
              value={totalAmount}
              placeholder="Total amount"
            ></input>
          </div>
        </div>
        <div className="paymentMethodContainer">
          <div className="paymentMethodNumber1">
            <label>Payment method number 1: </label>
            <input
              className="paymentMethodNumber1Input"
              type="text"
              onChange={handlePaymentMethodNumber1}
              placeholder="Payment method number 1"
              value={paymentMethodNumber1}
            ></input>
          </div>
          <div className="paymentMethodNumber2">
            <label>Payment method number 2: </label>
            <input
              className="paymentMethodNumber2Input"
              type="text"
              value={paymentMethodNumber2}
              onChange={handlePaymentMethodNumber2}
              placeholder="Payment method number 2"
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
}
