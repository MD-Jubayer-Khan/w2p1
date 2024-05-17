const numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10]

function duplicateNumber (numbers){
    const unique = [];
    for (const element of numbers){
        console.log(element);
        if(unique.indexOf(element) == -1);
        unique.push(element);
    };
    return unique;
};
const uniqueNumber = duplicateNumber(numbers);
console.log(uniqueNumber);