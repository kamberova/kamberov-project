// import { Link} from 'react-router-dom';

import MySessions from "./MySessions/MySessions";

const SessionList = ({
    session
}) => {
    return (
        <li className="otherPet">
            <h3>Type: {session.type}</h3>
            <p>Hour: {session.hour}</p>
            <a className="button" href={`/about/${MySessions._id}`}>Details</a>
        </li>
    );
}

export default SessionList;