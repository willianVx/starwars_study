import React, { useState } from 'react';

const DropDown = ({persons, updatePersonList}) => {
    const [selectedPerson, setSelectedPerson] = useState(persons[0]);
    const handleOption = (e) => {
        e.preventDefault();
        updatePersonList(selectedPerson.id);
        console.log(selectedPerson);
    }

    const onChangeOption = (e) => {
        e.preventDefault();
        const optionSelect = persons.find(item => (e.target.value === item.name))
        setSelectedPerson(optionSelect);
    }

    return (
        <form onSubmit={handleOption}>
            <select name="persons" onChange={onChangeOption}>
                {persons.map(({name, id}) => (
                    <option value={name} key={id}> {name} </option>
                ))}
            </select>
            <input type="submit" value="Remove" />
        </form>
    )
}

export default DropDown;
