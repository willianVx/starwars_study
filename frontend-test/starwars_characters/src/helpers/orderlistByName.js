const orderlistByName = (list) => {
    const sortedList = list.slice().sort((a, b) => {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        return 0;
    });
    return sortedList;
}

export default orderlistByName;
