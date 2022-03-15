const Letter = ({ resultClassNames, value }) => {
  return (
    <div
      className={`card m-1 w-100 ${resultClassNames}`}
      style={{ height: "55px" }}
    >
      <div className="card-body p-0 text-center">
        <h1>{value}</h1>
      </div>
    </div>
  );
};

export default Letter;
