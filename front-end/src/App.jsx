import {useEffect, useState} from 'react'
import {w3cwebsocket as W3CWebSocket} from "websocket";
import {Form} from "./components/Form";
import {TopBar} from "./components/TopBar";
import {Card} from "./components/Card";
import {Table} from "./components/Table";
import {getInterestCalculate} from "./services/AppServices.js";
import './App.css';

function App() {
  const [btc, setBTC] = useState(null);
  const [eth, setETH] = useState(null);
  const [row, setRow] = useState([]);
  const [amount, setAmout] = useState(0);

  useEffect(() => {
    let coins = ['BTC', 'ETH'];
    coins.forEach(function (coin) {

      const client = W3CWebSocket(`wss://stream.binance.com:9443/ws/${coin.toLowerCase()}usdt@trade`);
      client.onopen = function () {
        console.log('WebSocket Client Connected');
      };
      client.onmessage = (event) => {
        const message = JSON.parse(event.data);
        if (message?.s === 'BTCUSDT') {
          setBTC(message);
        } else {
          setETH(message);
        }
      };
    });
  }, []);

  const calculateInterest = async (form) => {
    const amount = parseFloat(form.amount);
    setAmout(amount);

   const result = getInterestCalculate(form, btc, eth);
    setRow(result);
  }

  return (
    <>
      <TopBar/>
      <div className="flex flex-row mt-20">
        <div className="w-1/2">
          <Card coin={btc}/>
          <Card coin={eth}/>
        </div>

        <div className="w-1/2">
          <Form calculateInterest={calculateInterest}/>
          <Table
            amount={amount}
            row={row}/>
        </div>
      </div>
    </>
  )
}

export default App
