import CharacterCard from "./CharacterCard";

function CharacterList(props) {
  const html = props.data.map((characterData) => (
    <li className="card" key={characterData.id} id={characterData.id}>
      <CharacterCard character={characterData} />
    </li>
  ));
  return <ul className="cards">{html}</ul>;
}

export default CharacterList;
