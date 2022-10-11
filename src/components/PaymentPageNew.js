import "./paymentpage.scss";
import { useState } from "react";

const count = 3;

export function PaymentPageNew() {
  const [totalAmount, setTotalAmount] = useState("");
  const [paymentMethods, setPaymentMethods] = useState([]);

  function handleTotalAmount(event) {
    const methodValue = event.target.value / count;
    setTotalAmount(event.target.value);
    setPaymentMethods([...new Array(count)].fill(methodValue));

    // setPaymentMethodNumber1(event.target.value / 2);
    // setPaymentMethodNumber2(event.target.value / 2);
  }

  function handlePaymentMethodNumber1(event,i) {
    //change the field value
    paymentMethods[i] = event.target.value;
    setPaymentMethods((oldlist) => {
      const newList = [...oldlist];
      console.log(oldlist,"Old");
      console.log(newList,"New");
      newList[i] = event.target.value;
      console.log(newList[i]);    
       return newList;
    });

    // Change the other fields value
    // Other fields = totalAmount - () 
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
          {[...new Array(count)].map((item, i) => {
            return (
              <div key={i} className="paymentMethodNumber1">
                <label>Payment method number {i + 1}: </label>
                <input
                  className="paymentMethodNumber1Input"
                  type="text"
                  onChange={(event) => handlePaymentMethodNumber1(event, i)}
                  placeholder={`Payment method number${i + 1}`}
                  value={paymentMethods[i]}
                ></input>
              </div>
            );
          })}
        </div>
      </form>
    </div>
  );
}
