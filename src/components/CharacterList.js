function CharacterList() {
  const html = data.map();
  return (
    <ul className="cards">
      <li className="card">
        <a href="">
          <img className="card__img" src="" alt="" title="" />
          <h4 className="card__title">Nombre:</h4>
          <p className="card__text">Especie:</p>
          <img
            className="card__calaver"
            src="../images/calaverRick.jpg"
            alt=""
          />
        </a>
      </li>
    </ul>
  );
}

export default CharacterList;
