import CharacterCard from "./CharacterCard";

function CharacterList(props) {
  const html = props.data.map((character) => (
    <li className="card" key={character.id}>
      <CharacterCard character={character} />
    </li>
  ));
  return <ul className="cards">{html}</ul>;
}

export default CharacterList;
