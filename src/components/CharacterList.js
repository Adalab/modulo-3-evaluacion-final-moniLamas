import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard";
import "../styles/components/characterList.scss";

function CharacterList(props) {
  const html = props.data.map((characterData) => (
    <Link to={`/characterData/${characterData.id}`} key={characterData.id}>
      <li className="card">
        <CharacterCard characterData={characterData} />
      </li>
    </Link>
  ));
  return <ul className="cards">{html}</ul>;
}

export default CharacterList;
