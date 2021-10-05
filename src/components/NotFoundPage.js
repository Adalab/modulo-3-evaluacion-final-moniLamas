import "../styles/components/notFoundPage.scss";
import image from "../images/5203299.jpg";

const NotFoundPage = () => {
  return (
    <div className="notFound">
      <img className="notFound__img" src={image} alt="404" />
      <h2 className="notFound__error">Error: página no encontrada</h2>
      <p className="notFound__text">Revisa que la dirección de la página</p>
    </div>
  );
};
export default NotFoundPage;
