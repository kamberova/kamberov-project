import { Link } from 'react-router-dom';

const SessionCard = (
    { bookSession }) => {
    return (
        <li className="">
            <h3>Hour: {bookSession.hour}</h3>
            <p>Price: {bookSession.price}</p>
            <p>Type: {bookSession.type}</p>
            <Link className="button" to={`/details/${bookSession._id}`}>Details</Link>
        </li>
    );
}

export default SessionCard;