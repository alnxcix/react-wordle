import Letter from "./Letter";

const Word = ({ guess, index, numGuesses, secretWord }) => {
  return numGuesses <= index ? (
    <div className="d-flex">
      {guess.split("").map((e, i) => (
        <Letter key={i} value={e} />
      ))}
      {[...Array(5 - guess.length)].map((_, i) => (
        <Letter key={i} value={""} />
      ))}
    </div>
  ) : (
    <div className="d-flex">
      {guess.split("").map((e, i) => (
        <Letter
          key={i}
          resultClassNames={
            e === secretWord.charAt(i)
              ? "bg-success text-white"
              : secretWord.includes(e)
              ? "bg-warning"
              : "bg-secondary text-white"
          }
          value={e}
        />
      ))}
      {[...Array(5 - guess.length)].map((_, i) => (
        <Letter key={i} value={""} />
      ))}
    </div>
  );
};

export default Word;
