import React from 'react';
import { render } from '@testing-library/react';
import PersonList from '../components/personList';

const mockedPersons = [
    {
        birthYear: "19BBY",
        eyeColor: ["BLUE"],
        hairColor: ["BLONDE"],
        id: "cj0nv9p8yewci0130wjy4o5fa",
        name: "Luke Skywalker"
    },
    {
        birthYear: "112BBY",
        eyeColor: ["YELLOW"],
        hairColor: null,
        id: "cj0nv9p9gewck0130h8f8esy0",
        name: "C-3PO"
    },
    {
        birthYear: "33BBY",
        eyeColor: ["RED"],
        hairColor: null,
        id: "cj0nv9p9wewcm01302r07xzna",
        name: "R2-D2"
    },
    {
        birthYear: "41.9BBY",
        eyeColor: ["YELLOW"],
        hairColor: null,
        id: "cj0nv9pa9ewco0130v4ocnhed",
        name: "Darth Vader"
    },{
        birthYear: "19BBY",
        eyeColor: ["BROWN"],
        hairColor: ["BROWN"],
        id: "cj0nv9pakewcq01303eu3xuy1",
        name: "Leia Organa",
    },
    {
        birthYear: "52BBY",
        eyeColor: ["BLUE"],
        hairColor: (2) ["BROWN", "GREY"],
        id: "cj0nv9paxewcs01300tqz2uvu",
        name: "Owen Lars"
    },{
        birthYear: "47BBY",
        eyeColor: ["BLUE"],
        hairColor: ["BROWN"],
        id: "cj0nv9pbaewcu0130s0n2en0f",
        name: "Beru Whitesun lars"
    },{
        birthYear: null,
        eyeColor: ["RED"],
        hairColor: null,
        id: "cj0nv9pblewcw0130k575f0nj",
        name: "R5-D4"
    },{
        birthYear: "24BBY",
        eyeColor: ["BROWN"],
        hairColor: ["BLACK"],
        id: "cj0nv9pbxewcy0130rl03ub1e",
        name: "Biggs Darklighter"
    },{
        birthYear: "57BBY",
        eyeColor: ["BLUEGREY"],
        hairColor: (2) ["AUBURN", "WHITE"],
        id: "cj0nv9pc9ewd00130o0n3f3m1",
        name: "Obi-Wan Kenobi",
    }
]


describe('personList test', () => {
    it('Count persons on list', () => {
        const { container } = render(
            <PersonList persons={mockedPersons} />
        );
        console.log(container);
    });

});