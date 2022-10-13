import "./App.css";
import { PaymentPage } from "./components/PaymentPage";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <PaymentPage count={3} />
      </div>
    </div>
  );
}

export default App;
