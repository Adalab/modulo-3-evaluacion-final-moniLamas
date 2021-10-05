import "../styles/components/notFoundPage.scss";
import image from "../images/5203299.jpg";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="notFound">
      <img className="notFound__img" src={image} alt="404" />
      <h2 className="notFound__error">Error: página no encontrada</h2>

      <Link to="/">
        <button className="notFound__home">Ir a la home</button>
      </Link>
    </div>
  );
};
export default NotFoundPage;
