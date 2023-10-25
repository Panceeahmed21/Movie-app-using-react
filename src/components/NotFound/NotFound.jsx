import img from "../../assets/404 page.png";

const NotFound = () => {
  return (
    <div className="container">
      <div className="ro">
        <div className="col-md-12">
          <figure>
            <img src={img} alt="" srcset="" className="img-fluid" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
