import { useState, useEffect } from "react";

const CoinTracker = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [coinCal, setCoinCal] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const coinNum = (event) => {
    setCoinCal(event.target.value);
    console.log(coinCal);
  };
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <div>
        <input
          onChange={coinNum}
          type="number"
          placeholder="write your money..."
        />
        <br />
        {/* 계산기 만들기 */}
        {/* <input value={parseInt(coinCal) / {coin.quotes.USD.price}} disabled /> */}
      </div>
    </div>
  );
};

export default CoinTracker;
