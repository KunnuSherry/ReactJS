import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length );
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [numberAllowed, charAllowed, length, passwordGenerator]);

  return (
    <>
      <div className="main text-white w-screen h-screen flex flex-col justify-center items-center font-serif">
        <div className="cont border-2  p-8 flex flex-col gap-4 w-160 items-center shadow-md shadow-white">
          <h1 className=" text-5xl">Password Generator</h1>
          <div className="flex gap-2">
            <input
              type="text"
              value={password}
              placeholder="Password"
              readOnly
              ref={passwordRef}
              className="text-black w-96 h-8 px-4"
            />
            <button onClick={copyToClipboard} className="border-2 w-12 border-white hover:bg-white hover:border-black hover:text-black">
              Copy
            </button>
          </div>
          <div className="flex gap-8">
            <div className="flex gap-2">
              <input
                type="range"
                min={8}
                max={20}
                value={length}
                onChange={(e) => {
                  setLength(e.target.value);
                }}
                className="w-36"
              />
              <label>Length: {length}</label>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="numberInput">Numbers</label>
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="charInput"
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="charInput">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
