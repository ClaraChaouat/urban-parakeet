import './App.css';
import { PaymentPage } from './components/PaymentPage';
import { PaymentPageNew } from './components/PaymentPageNew';


function App() {
  return (
    <div className="App">
      <div className="wrapper">
      <PaymentPageNew />
        <PaymentPage />
       

      </div>
    </div>
  );
}

export default App;
