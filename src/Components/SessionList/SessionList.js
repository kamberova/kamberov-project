// // // import { Link} from 'react-router-dom';

// // import MySessions from "./MySessions/MySessions";

// // const SessionList = ({
// //     session
// // }) => {
// //     return (
// //         <li className="sessionList">
// //             <h3>Type: {session.type}</h3>
// //             <p>Hour: {session.hour}</p>
// //             <a className="button" href={`/about/${MySessions._id}`}>Details</a>
// //         </li>
// //     );
// // }

// // export default SessionList;


// // import PetCard from "./PetCard"

// const SessionType = ({
//     session
// }) => {
//     return (
//         <li className="session">
//             <h3>Name: {session.type}</h3>
//             <p>Type: {session.hour}</p>
//             <a className="button" href={`/details/${session._id}`}>Details</a>
//         </li>
//     );
// }


// const PetList = ({
//     sessions
// }) => {
//     return (
//         <>
//             {sessions.length > 0
//                 ? (
//                     <ul className="other-session">
//                         {sessions.map(x => <SessionType key={x._id} session={x} />)}
//                     </ul>
//                 ) 
//                 : <p className="no-sessions">No sessions in database!</p>
//             }
//         </>
//     );
// }

// export default PetList;