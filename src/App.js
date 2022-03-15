import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Results from "./components/Results";
import Word from "./components/Word";

const App = () => {
  const [arrGuesses, setArrGuesses] = useState(["", "", "", "", "", ""]);
  const [isVictory, setVictory] = useState(false);
  const [numGuesses, setNumGuesses] = useState(0);
  const [secretWord, setSecretWord] = useState("APPLE");
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (arrGuesses[numGuesses].length < 5)
      toast.error("Your guess must be a five-letter word.");
    else {
      setNumGuesses(numGuesses + 1);
      if (arrGuesses[numGuesses] === secretWord) {
        setVictory(true);
        toast.success("You won!");
      } else {
        if (numGuesses === 5) toast.error("Game over.");
      }
    }
  };
  const handleOnChange = (e) => {
    let temp = [...arrGuesses];
    temp[numGuesses] = e.target.value.toUpperCase();
    setArrGuesses(temp);
  };
  const reset = () => {
    setArrGuesses(["", "", "", "", "", ""]);
    setNumGuesses(0);
    setSecretWord("APPLE");
    setVictory(false);
  };
  useEffect(() => document.getElementById("word-input").focus());
  return (
    <>
      <ToastContainer />
      <div>
        <div className="container mx-auto d-block" style={{ width: "390px" }}>
          <h1 className="mb-3 text-center">React Wordle</h1>
          <div
            className="card mb-3 shadow w-100"
            onClick={() => document.getElementById("word-input").focus()}
          >
            <div className="card-body">
              {arrGuesses.map((e, i) => (
                <Word
                  guess={e}
                  index={i}
                  key={i}
                  numGuesses={numGuesses}
                  secretWord={secretWord}
                />
              ))}
            </div>
          </div>
          {numGuesses === 6 || isVictory ? (
            <Results
              isVictory={isVictory}
              numGuesses={numGuesses}
              reset={reset}
              secretWord={secretWord}
            />
          ) : null}
        </div>
        <form onSubmit={handleOnSubmit}>
          <input
            autocomplete="off"
            disabled={numGuesses === 6 || isVictory}
            id="word-input"
            maxLength={5}
            onChange={handleOnChange}
            style={{ opacity: "0", filter: "alpha(opacity=0)" }}
            value={arrGuesses[numGuesses]}
          />
        </form>
      </div>
    </>
  );
};

export default App;
