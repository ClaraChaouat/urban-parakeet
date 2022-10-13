import "./paymentpage.scss";
import { useState } from "react";


export function numberUpTo2decimals(num) {
  return parseFloat(num.toFixed(2));
}

export function PaymentPage(props) {
  const [totalAmount, setTotalAmount] = useState("");
  const [paymentMethods, setPaymentMethods] = useState([]);

  function handleTotalAmount(event) {
    const methodValue = numberUpTo2decimals(event.target.value / props.count);
    setTotalAmount(+event.target.value);
    setPaymentMethods([...new Array(props.count)].fill(methodValue));
  }

  function handlePaymentMethod(event, fieldIndex) {
    const fieldValue = +event.target.value;

    setPaymentMethods((oldAmounts) => {
      //change the field value

      const newAmounts = [...oldAmounts];
      newAmounts[fieldIndex] = fieldValue;

      //Change the other field values

      const evenValue = (totalAmount - fieldValue) / (props.count - 1);

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
              type="number"
              id="Total amount to pay"
              onChange={handleTotalAmount}
              value={totalAmount}
              placeholder="Total amount"
            ></input>
          </div>
        </div>
        <div className="paymentMethodsContainer">
          {[...new Array(props.count)].map((item, i) => {
            return (
              <div key={i} className="paymentMethods">
                <label htmlFor="Payment method type amount">
                  Payment method number {i + 1}:{" "}
                </label>
                <input
                  className="paymentMethodsInput"
                  type="number"
                  id="Payment method type amount"
                  onChange={(event) => handlePaymentMethod(event, i)}
                  placeholder={`Payment number ${i + 1}`}
                  value={paymentMethods[i]}
                ></input>
                {paymentMethods[i] < 0 ? (
                  <p className="paymentMethodinputError">
                    The number you entered can't be negative
                  </p>
                ) : null}
                {paymentMethods[i] > totalAmount ? (
                  <p className="paymentMethodinputError">
                    Cannot be bigger than the total amount
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </form>
    </div>
  );
}
