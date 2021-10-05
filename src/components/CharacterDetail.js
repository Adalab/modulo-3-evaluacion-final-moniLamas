import { Link } from "react-router-dom";
import skull from "../images/skull.png";
import "../styles/components/characterDetail.scss";

function CharacterDetail(props) {
  const status = props.character.status;

  return (
    <article className="card__details">
      <Link to="/">
        <span className="card__exit">&#10006;</span>
      </Link>
      <img
        className="card__img"
        src={props.character.image}
        alt={props.character.name}
        title={props.character.name}
      />
      <h4 className="card__title">{props.character.name}</h4>
      <p className="card__text">Especie: {props.character.species}</p>
      <p className="card__text">
        Planeta de origen: {props.character.homePlanet}
      </p>
      <p className="card__text">
        Aparece en {props.character.episodes} episodios
      </p>
      <p className="card__text">{status}</p>
      <div>
        {status === "Dead" ? (
          <img
            className="card__calaver"
            src={skull}
            alt="Calaver Rick"
            width="20px"
          />
        ) : (
          ""
        )}
      </div>
    </article>
  );
}

export default CharacterDetail;
