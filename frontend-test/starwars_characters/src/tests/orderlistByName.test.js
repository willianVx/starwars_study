import orderlistByName from '../helpers/orderlistByName.js';

describe('order list by name test', () => {

    const listMock = [
        {
            name: "green"
        },
        {
            name: "red"
        },
        {
            name: "purple"
        },
        {
            name: "black"
        },
        {
            name: "pink"
        }
    ];

    it('Count persons on list', () => {
        const result = orderlistByName(listMock);
        const expectedResult = [
            { name: 'black' },
            { name: 'green' },
            { name: 'pink' },
            { name: 'purple' },
            { name: 'red' }
        ];

        expect(result.toString()).toBe(expectedResult.toString());
    });
});
