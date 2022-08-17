import React from "react";
import SessionCard from "./SessionCard";

const SessionList = ({
    sessions
}) => {
    return (
        <>
            {sessions.length > 0
                ? (
                    <ul className="data-aos=fade-up data-aos-delay=400">
                        {sessions.map(x => <SessionCard key={x._id} session={x} />)}
                    </ul>
                ) 
                : <p className="">No sessions in database!</p>
            }
        </>
    );
}

export default SessionList;