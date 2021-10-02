import CharacterItem from "./CharacterItem";

function CharacterList(props) {
  const html = props.data.map((characterData) => (
    <li className="card" key={props.id}>
      <CharacterItem characterData={characterData} />
    </li>
  ));
  return <ul className="cards">{html}</ul>;
}

export default CharacterList;
