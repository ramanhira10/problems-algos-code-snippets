const getLInkedList = listItem => {

    const list = {};

    if (listItem.value) {
        list.value = listItem.value;
        list.next = null;
    }

    return list;
};

const linkedList = getLInkedList({
    value: '10',
    next: null
});

console.log(linkedList);