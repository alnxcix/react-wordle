const Results = ({ isVictory, numGuesses, reset, secretWord }) => {
  return (
    <div className="bg-dark card shadow text-white">
      <div className="card-body">
        <h6 className="mb-3">
          {isVictory
            ? `Excellent! You guessed ${secretWord} in ${numGuesses} ${
                numGuesses === 1 ? "try" : "tries"
              }.`
            : `Game over! The correct word is ${secretWord}.`}
        </h6>
        <button className="btn btn-light w-100" onClick={reset}>
          PLAY AGAIN
        </button>
      </div>
    </div>
  );
};

export default Results;
