import Letter from "./Letter";

const HowToPlayModalComponents = () => {
  return (
    <>
      <button
        className="btn btn-dark btn-sm rounded-pill"
        data-bs-toggle="modal"
        data-bs-target="#howToPlayModal"
      >
        How to Play
      </button>
      <div className="modal fade" id="howToPlayModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="howToPlayModalLabel">
                How to Play
              </h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <p>
                Guess the <strong>SECRET WORD</strong> in six tries.
              </p>
              <p>Each guess must consist of five letters.</p>
              <p>Hit the enter button to submit.</p>
              <p>
                After each guess, the color of the tiles will change to show how
                close your guess was to the word.
              </p>
              <hr />
              <p>
                <strong>Examples</strong>
              </p>

              {/* weary */}
              <div className="d-flex" style={{ width: "330px" }}>
                <Letter
                  resultClassNames={"bg-success text-white"}
                  value={"W"}
                />
                <Letter value={"E"} />
                <Letter value={"A"} />
                <Letter value={"R"} />
                <Letter value={"Y"} />
              </div>
              <p>
                The letter <strong>W</strong> is in the word and in the correct
                spot.
              </p>

              {/* pills */}
              <div className="d-flex" style={{ width: "330px" }}>
                <Letter value={"P"} />
                <Letter resultClassNames={"bg-warning"} value={"I"} />
                <Letter value={"L"} />
                <Letter value={"L"} />
                <Letter value={"S"} />
              </div>
              <p>
                The letter <strong>I</strong> is in the word but in the wrong
                spot.
              </p>

              {/* vague */}
              <div className="d-flex" style={{ width: "330px" }}>
                <Letter value={"V"} />
                <Letter value={"A"} />
                <Letter value={"G"} />
                <Letter
                  resultClassNames={"bg-secondary text-white"}
                  value={"U"}
                />
                <Letter value={"E"} />
              </div>
              <p>
                The letter <strong>U</strong> is not in the word in any spot.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowToPlayModalComponents;
