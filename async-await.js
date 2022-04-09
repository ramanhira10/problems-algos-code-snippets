/**
 * Async JS Programming
 * 
 * Callback, Promises, Async and Await
 */

const TIME = {
    ONE_SECOND: 1000,
    TWO_SECOND: 2000
};

const datas = [{
    name: 'Ajay',
    Profession: 'Software Developer'
}, {
    name: 'Anuj',
    Profession: 'Software Developer'
}];

function getData () {
    let output = '';
    setTimeout(() => {
        datas.forEach((data, index) => {
            output += `<li>${data.name}</li>`;
        });
        document.body.innerHTML = output;
    }, TIME.ONE_SECOND);
}

function createData (newData) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            datas.push(newData);
            let error = false;

            if (!error) {
                resolve();
            } else {
                reject('No Error');
            }
        }, TIME.TWO_SECOND);
    });
    
}
/* 
createData({
    name: 'Vivek',
    Profession: 'Software Developer'
})
    .then(getData)
    .catch(err => document.body.innerHTML = err);
 */

async function start () {
    await createData({
        name: 'Vivek',
        Profession: 'Software Developer'
    });

    getData();
}

start();