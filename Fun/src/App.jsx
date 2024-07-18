import { useEffect } from "react";
import { useState, useRef } from "react";

function App() {
  const [color, setColor] = useState("greenyellow");
  const [buttonIDs, setButtonIds] = useState([]);
  const buttonRef = useRef({});

  useEffect(() => {
    if (buttonIDs.length === 8) {
      setColor("orange");
      let index = 0;
      const interval = setInterval(() => {
        if (index < buttonIDs.length) {
          const id = buttonIDs[index];
          buttonRef.current[id].style.backgroundColor = "orange";
          index++;
        } else {
          setColor('greenyellow')
          setButtonIds([])
          clearInterval(interval);
          Object.keys(buttonRef.current).forEach((id) => {
            buttonRef.current[id].style.backgroundColor = "black";
            buttonRef.current[id].disabled = 'false'
            
          });
        }
      }, 1000);
    }
  }, [buttonIDs, setButtonIds, setColor]); 
  const buttonClick = (id) => {
    setButtonIds((prev) => [...prev, id]);
    console.log(id, " is clicked");
    buttonRef.current[id].disabled = 'true'
    buttonRef.current[id].style.backgroundColor = color ;
    
  };
  console.log(buttonIDs);

  return (
    <>
      <div className="main w-screen flex items-center justify-center">
        <div className="boxes gap-5 mt-24 grid grid-cols-3 border-2 text-white border-black">
          <button
            className="box flex items-center justify-center text-center w-24 h-24 border-2 border-white"
            id="1"
            onClick={() => {
              buttonClick("1");
            }}
            ref={(el) => (buttonRef.current["1"] = el)}
          >
            1
          </button>
          <button
            className="box flex items-center justify-center text-center w-24 h-24 border-2 border-white"
            id="2"
            onClick={() => {
              buttonClick("2");
            }}
            ref={(el) => (buttonRef.current["2"] = el)}
          >
            2
          </button>
          <button
            className="box flex items-center justify-center text-center w-24 h-24 border-2 border-white"
            id="3"
            onClick={() => {
              buttonClick("3");
            }}
            ref={(el) => (buttonRef.current["3"] = el)}
          >
            3
          </button>
          <button
            className="box flex items-center justify-center text-center w-24 h-24 border-2 border-white"
            id="4"
            onClick={() => {
              buttonClick("4");
            }}
            ref={(el) => (buttonRef.current["4"] = el)}
          >
            4
          </button>
          <button
            className="box flex items-center justify-center text-center w-24 h-24 border-2 border-white"
            id="5"
            onClick={() => {
              buttonClick("5");
            }}
            ref={(el) => (buttonRef.current["5"] = el)}
          >
            5
          </button>
          <button
            className="box flex items-center justify-center text-center w-24 h-24 border-2 border-white"
            id="6"
            onClick={() => {
              buttonClick("6");
            }}
            ref={(el) => (buttonRef.current["6"] = el)}
          >
            6
          </button>
          <button
            className="box flex items-center justify-center text-center w-24 h-24 border-2 border-white"
            id="7"
            onClick={() => {
              buttonClick("7");
            }}
            ref={(el) => (buttonRef.current["7"] = el)}
          >
            7
          </button>
          <button
            className="box flex items-center justify-center text-center w-24 h-24 border-2 border-white"
            id="8"
            onClick={() => {
              buttonClick("8");
            }}
            ref={(el) => (buttonRef.current["8"] = el)}
          >
            8
          </button>
          <button
            className="box flex items-center justify-center text-center w-24 h-24 border-2 border-white"
            id="9"
            onClick={() => {
              buttonClick("9");
            }}
            ref={(el) => (buttonRef.current["9"] = el)}
          >
            9
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
