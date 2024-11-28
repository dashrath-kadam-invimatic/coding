function add(numbers) {
    if (!numbers) return 0;

    let delimiter = /,|\n/;
    let otherDelimiter = numbers.match(/^\/\/(.+)\n/);

    console.log(otherDelimiter);
    if (otherDelimiter) {
        delimiter = new RegExp(otherDelimiter[1]); 
        numbers = numbers.substring(otherDelimiter[0].length);
    }

    const numberArray = numbers.split(delimiter).map(num => Number(num.trim()));


    const negativeNumbers = numberArray.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(', ')}`);
    }

    return numberArray.reduce((sum, num) => sum + num, 0);
}

try {
    console.log(add("")); 
    console.log(add("1")); 
    console.log(add("1,5")); 
    console.log(add("1\n2,3")); 
    console.log(add("//;\n1;2")); 
    console.log(add("1,-2,3")); 
} catch (error) {
    console.error(error.message);
}
