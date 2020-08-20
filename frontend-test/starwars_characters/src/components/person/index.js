import React from 'react';
import RemoveButton from '../removeButton';
import './index.css'

const Person = ({person, updatePersonList}) => {
    const { eyeColor: [color] } = person;
    return (
        <div className="person_container" style={{color: color}}>
            <span>Nome:</span>
            <h2>{person.name}</h2>
            <span>Ano de nascimento:</span>
            <p>{person.birthYear}</p>

            <RemoveButton personID={person.id} updatePersonList={updatePersonList} />
        </div>
    );
}
export default Person;
