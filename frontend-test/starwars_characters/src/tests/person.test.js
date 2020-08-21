import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import Person from '../components/person';


describe('Person component test', () => {
    it('Render person test', () => {
        const person = {
                birthYear: "19BBY",
                eyeColor: ["BLUE"],
                hairColor: ["BLONDE"],
                id: "cj0nv9p8yewci0130wjy4o5fa",
                name: "Luke Skywalker"
            };

        const personFunc = () => {};
        const { container } = render(
            <Person person={person} updatePersonList={personFunc} />
        )
        expect(container).toBeInTheDocument();
    });
});
