import MonsterCard from "../monster-card/monster-card.component";
import "./card-list.styles.css";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map(monster => {
      return <MonsterCard key={monster.id} monster={monster} />;
    })}
  </div>
);

export default CardList;
