import './Card.css';
import { Link } from 'react-router-dom';

function Card({id, cover, title}) {
  return (
      <Link to={`/pics/${id}`} className="card">
        <img src={cover} alt={title}/>
        <div className="card-title">
            <p>{title}</p>
        </div>
      </Link>
  );
}


export default Card;