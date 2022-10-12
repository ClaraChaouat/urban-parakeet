import { numberUpTo2decimals } from "./PaymentPage";

it("It works", () => {
  //1.Arrange
  //2.Act

  const result = numberUpTo2decimals(10.0);

  
  //3.Assert
  expect(result).toBe(10.56);
});
