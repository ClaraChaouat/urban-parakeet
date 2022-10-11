import { useState } from "react";

export function PaymentPage(props) {
  const [totalAmount, setTotalAmount] = useState("");
  const [paymentMethodNumber1, setPaymentMethodNumber1] = useState("");

  function handleInput(event) {
    console.log(event.target.value);
    console.log(props)
    setTotalAmount(event.target.value);
    setPaymentMethodNumber1(totalAmount);
   
  }

  function handlePaymentMethodNumber1() {
    console.log("Ok");
   
    
  }

  return (
    <div className="paymentPageContainer">
      Payment Page
      <form>
        <div className="totalAmountContainer">
          <label>Total amount to pay </label>
          <input
            type="text"
            onChange={handleInput}
            value={totalAmount}
            placeholder="Total amount"
          ></input>
        </div>
        <div className="paymentMethodContainer">
          <div className="paymentMethodNumber1">
            <label>Payment method number 1 </label>
            <input
              type="text"
              onChange={handlePaymentMethodNumber1}
              placeholder="Payment method number 1"
              value={paymentMethodNumber1}
            >
            </input>
          </div>
          <label>
            Payment method number 2
            <div className="paymentMethodNumber2">
              <input type="text" placeholder="Payment method number 2"></input>
            </div>
          </label>
        </div>
      </form>
    </div>
  );
}
