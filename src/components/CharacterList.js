import CharacterCard from "./CharacterCard";

function CharacterList(props) {
  const html = props.data.map((characterData) => (
    <li className="card" key={props.id}>
      <CharacterCard characterData={characterData} />
    </li>
  ));
  return <ul className="cards">{html}</ul>;
}

export default CharacterList;
