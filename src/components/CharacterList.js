import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard";

function CharacterList(props) {
  const html = props.data.map((characterData) => (
    <Link to={`/characterData/${characterData.id}`}>
      <li className="card" key={characterData.id}>
        <CharacterCard characterData={characterData} />
      </li>
    </Link>
  ));
  return <ul className="cards">{html}</ul>;
}

export default CharacterList;
