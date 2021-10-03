import skull from "../images/skull.png";

function CharacterCard(props) {
  const isAlive = props.character.status;
  return (
    <>
      <img
        className="card__img"
        src={props.character.image}
        alt={props.character.name}
        title={props.character.name}
      />
      <h4 className="card__title">Nombre: {props.character.name}</h4>
      <p className="card__text">Especie: {props.character.species}</p>
      <div>
        {isAlive === "Dead" ? (
          <img className="card__calaver" src={skull} alt="Calaver Rick" />
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default CharacterCard;
