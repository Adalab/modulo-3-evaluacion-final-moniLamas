function CharacterItem(props) {
  if (props.characterData.status === "Dead") {
    return (
      <img
        className="card__calaver"
        src="../images/calaverRick.jpg"
        alt="Calaver Rick"
      />
    );
  }

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
      <p>Estado: {props.characterData.status}</p>
    </>
  );
}

export default CharacterItem;
