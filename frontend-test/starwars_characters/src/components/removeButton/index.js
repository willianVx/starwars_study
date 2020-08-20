import React from 'react';
import './index.css';

const RemoveButton = ({personID, updatePersonList}) => {
    const handdleButton = (e) => {
        e.preventDefault();
        updatePersonList(personID);
    }

    return (
        <button onClick={handdleButton}> Remove person </button>
    );
}

export default RemoveButton;
