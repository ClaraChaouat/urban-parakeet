import "./paymentpage.scss";
import { useState } from "react";

const count = 3;

export function numberUpTo2decimals(num) {
  return parseFloat(num.toFixed(2));
}

export function PaymentPage() {
  const [totalAmount, setTotalAmount] = useState("");
  const [paymentMethods, setPaymentMethods] = useState([]);

  function handleTotalAmount(event) {
    const methodValue = numberUpTo2decimals(event.target.value / count);
    setTotalAmount(+event.target.value);
    setPaymentMethods([...new Array(count)].fill(methodValue));
  }

  function handlePaymentMethod(event, fieldIndex) {
    const fieldValue = +event.target.value;

    setPaymentMethods((oldAmounts) => {
      //change the field value

      const newAmounts = [...oldAmounts];
      newAmounts[fieldIndex] = fieldValue;

      //Change the other field values

        const evenValue = (totalAmount - fieldValue) / (count - 1);

        newAmounts.forEach((field, index) => {
          if (index !== fieldIndex) {
            newAmounts[index] = evenValue;
          }
        });
      

      return newAmounts;
    });
  }

  return (
    <div className="paymentPageContainer">
      <form className="paymentForm">
        <div className="paymentFormTitle">
          <p>Payment</p>
        </div>
        <div className="totalAmountContainer">
          <div className="totalAmountCard">
            <label htmlFor="Total amount to pay">Total amount to pay:</label>
            <input
              className="totalAmountInput"
              type="text"
              id="Total amount to pay"
              onChange={handleTotalAmount}
              value={totalAmount}
              placeholder="Total amount"
            ></input>
          </div>
        </div>
        <div className="paymentMethodContainer">
          {[...new Array(count)].map((item, i) => {
            console.log(paymentMethods[i],totalAmount,paymentMethods[i]>totalAmount,typeof paymentMethods[i]);
            return (
              <div key={i} className="paymentMethodNumber1">
                <label htmlFor="Payment method type amount">
                  Payment method number {i + 1}:{" "}
                </label>
                <input
                  className="paymentMethodNumber1Input"
                  type="text"
                  id="Payment method type amount"
                  onChange={(event) => handlePaymentMethod(event, i)}
                  placeholder={`Payment method number${i + 1}`}
                  value={paymentMethods[i]}
                ></input>
                {paymentMethods[i]<0 ? <p>Number can't be negative</p>:null}
                {paymentMethods[i]>totalAmount ? <p>Cannot be bigger than the total amount</p>:null}
                { isNaN(paymentMethods[i])  ? <p>Please enter a number value</p>:null}
              </div>
            );
          })}
        </div>
      </form>
    </div>
  );
}
