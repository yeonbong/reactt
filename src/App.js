import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const [usd, setUsd] = useState();
  const onChange = (event) => {
    setUsd(event.target.value);
  };
  return (
    <div>
      <h1>The Coins! {loading ? "" : `${coins.length}`}</h1>

      {loading ? (
        ""
      ) : (
        <input
          value={usd}
          onChange={onChange}
          id="usd"
          type="number"
          placeholder="USD"
        />
      )}
      {loading ? (
        ""
      ) : (
        <select>
          {coins.map((coin) => (
            <option>
              {usd / coin.quotes.USD.price} {coin.name} ({coin.symbol}):
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
