import React, { useState } from 'react';
import Person from '../person/index';
import DropDown from '../dropdown/index';
import orderlistByName from '../../helpers/oderlistByName';
import './index.css';

const PersonList = ({ persons }) => {
    const [personState, setPersonState] = useState(orderlistByName(persons));
    const updatePersonList = (personId) => {
        const newPersonList = personState.filter(person => {
            return person.id !== personId;
        });
        setPersonState(orderlistByName(newPersonList));
    }

    return (
        <div>
            <DropDown persons={personState} updatePersonList={updatePersonList} />
            <div className="personListContainer">
                {personState.map(person => (
                    <Person person={person} key={person.id} updatePersonList={updatePersonList} />
                ))}
            </div>
        </div>
    );
}

export default PersonList;
