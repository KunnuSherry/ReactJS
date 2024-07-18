import { useState } from "react";
import useCurrencyInfo from "./customHooks/currencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");
  const [conAmount, setConAmount] = useState(0)

  let currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo);
  console.log(options);
  console.log(amount);
  console.log(from);
  console.log(conAmount);
  console.log(to);
  console.log(currencyInfo[to])

  function converter(){
    setConAmount(amount*currencyInfo[to])
  }

  return (
    <>
      <div className="flex flex-col items-center mt-24 text-white gap-12">
        <div className="font-serif text-white text-4xl font-bold">
          Currency Converter
        </div>
        <div className="flex flex-col gap-8 border-2 border-white p-8">
          <form action="" className="flex gap-8">
            <input
              type="text"
              placeholder="Enter Amount"
              className="w-32 text-center text-black"
              defaultValue={amount}
              onChange={(e)=>setAmount(e.target.value)}
              
            />
            <div className="flex gap-4">
              <label htmlFor="from">From</label>
              <select name="" id="from" className="w-24 mr-8 text-black" value={from} onChange={(e)=>setFrom(e.target.value)}>
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          </form>
          <form action="" className="flex gap-8">
            <input
              type="text"
              placeholder="Coverted Amount"
              className="w-32 text-center"
              value={conAmount}
              disabled
            />
            <div className="flex gap-4">
              <label htmlFor="from">To</label>
              <select name="" id="from" className="w-24 mr-8 text-black" value={to} onChange={(e)=>setTo(e.target.value)}>
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          </form>
          <button className="text-white border-2 border-white" onClick={converter}>Convert</button>
        </div>
      </div>
    </>
  );
}

export default App;
