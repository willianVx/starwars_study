const getOddHour = (aulas) => {
    return aulas.filter(aulaItem => {

       if (typeof aulaItem.hora !== "number" ) {
           throw new Error("Property 'hora' must be a numeric type");
       }

       const isOdd = aulaItem.hora % 2 === 1;

       if (isOdd) {
           return aulaItem;
       }

    });
}

const list = [ 1,2,3,4,5,6,7,8,9,10,11,12,13 ];

const aulas = [
    {hora: 21},
    {hora: 22},
    {hora: 23},
    {hora: 24},
    {hora: 25},
    {hora: 26},
    {hora: 27},
    {hora: 28},
    {hora: 29}
];

const result = getOddHour(aulas);

console.log(result);
