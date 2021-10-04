import skull from "../images/skull.png";

function CharacterCard(props) {
  const isAlive = props.characterData.status;
  return (
    <>
      <img
        className="card__img"
        src={props.characterData.image}
        alt={props.characterData.name}
        title={props.characterData.name}
      />
      <h4 className="card__title">{props.characterData.name}</h4>
      <p className="card__text">{props.characterData.species}</p>
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
