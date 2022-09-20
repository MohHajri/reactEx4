// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";
const URL = "https://api.exchangerate.host/latest";
function App() {
  const [eur, setEur] = useState(0);
  const [gdp, setGdp] = useState(0);
  const [rate, setRate] = useState(0);

  async function convert(e) {
    e.preventDefault();
    try {
      const address = URL;
      const response = await fetch(address);

      if (response.ok) {
        const json = await response.json();
        console.log(json.rates.GBP);
        setRate(json.rates.GBP);
        setGdp(eur * json.rates.GBP);
      } else {
        alert("Error ");
        console.log(response);
      }
    } catch (err) {
      alert(err);
    }
  }
  return (
    <div id="container">
      <form onSubmit={convert}>
        <div>
          <label> Eur</label>
          <input
            type="number"
            step="0.01"
            value={eur}
            onChange={(e) => setEur(e.target.value)}
          />
          <output> {rate}</output>
        </div>
        <div>
          <label>Gdp</label>
          <output> {gdp.toFixed(2)} $</output>
        </div>
        <div>
          <button>Calculate</button>
        </div>
      </form>
    </div>
  );
}

export default App;
