import skull from "../images/skull.png";

function CharacterDetail(props) {
  const isAlive = props.characterData.status;
  return (
    <>
      <img
        className="card__img"
        src={props.characterData.image}
        alt={props.characterData.name}
        title={props.characterData.name}
      />
      <h4 className="card__title">Nombre: {props.characterData.name}</h4>
      <p className="card__text">Especie: {props.characterData.species}</p>
      <p className="card__text">
        Planeta de origen: {props.characterData.homePlanete}
      </p>
      <p className="card__text">
        Aparece en {props.characterData.episodes} episodios
      </p>
      <p className="card__text">Está {isAlive}</p>
      <div>
        {isAlive === "Dead" ? (
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
    </>
  );
}

export default CharacterDetail;
