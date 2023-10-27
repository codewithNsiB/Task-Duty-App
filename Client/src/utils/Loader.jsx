import { LineWave } from "react-loader-spinner";

function Loader() {
  return (
    <div className="d-flex  flex-column justify-content-center align-items-center mt-5">
      <LineWave
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="line-wave"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
        animation="grow"
        role="status"
      />
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}

export default Loader;
