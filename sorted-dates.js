const dateArr = [
    new Date("2023-03-25"),
    new Date("2023-03-26"),
    new Date("2023-03-24"),
    new Date("2023-04-02"),
];
 
const sortedDates = dateArr.sort((a, b) => a - b).reverse();

sortedDates.forEach(eachDateObj => console.log(eachDateObj));