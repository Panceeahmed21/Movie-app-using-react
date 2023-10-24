import {} from "./Loading.css";
import Spinner from "react-bootstrap/Spinner";
const Loading = ({ loading, error, children }) => {
  if (loading) {
    return (
      <div className="loading m-0 p-0">
        <Spinner animation="border" role="status" size="lg">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  return children;
};

export default Loading;
