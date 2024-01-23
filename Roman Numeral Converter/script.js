const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');
convertBtn.addEventListener("click", ()=>{
    const numberInput = document.getElementById('number').value;
    console.log(numberInput);
    if (!numberInput) {
        output.innerText = "Please enter a valid number";
    } else if ((Number(numberInput))<0) {
        output.innerText = "Please enter a number greater than or equal to 1";
    } else if ((Number(numberInput))>4000) {
        output.innerText = "Please enter a number less than or equal to 3999";    
    } else {
        output.innerText = convertToRoman((Number(numberInput)));
    }
});

// Recursevely reduce the number and concatenate the roman numeral to the string
const convertToRoman = (decimalNumber) => {
    let romanString = ''
    if (decimalNumber <= 0) {
        return romanString;
    }
    if (decimalNumber % 1000 == 0) {
        romanString += 'M';
        return romanString + convertToRoman(decimalNumber - 1000);
    }
    if (decimalNumber % 900 == 0) {
        romanString += 'CM';
        return romanString + convertToRoman(decimalNumber - 900);
    }
    if (decimalNumber % 500 == 0) {
        romanString += 'D';
        return romanString + convertToRoman(decimalNumber - 500);
    }
    if (decimalNumber % 400 == 0) {
        romanString += 'CD';
        return romanString + convertToRoman(decimalNumber - 400);
    }
    if (decimalNumber % 100 == 0) {
        romanString += 'C';
        return romanString + convertToRoman(decimalNumber - 100);
    }
    if (decimalNumber % 90 == 0) {
        romanString += 'XC';
        return romanString + convertToRoman(decimalNumber - 90);
    }
    if (decimalNumber % 50 == 0) {
        romanString += 'L';
        return romanString + convertToRoman(decimalNumber - 50);
    }
    if (decimalNumber % 40 == 0) {
        romanString += 'XL';
        return romanString + convertToRoman(decimalNumber - 40);
    }
    if (decimalNumber % 10 == 0) {
        romanString += 'X';
        return romanString + convertToRoman(decimalNumber - 10);
    }
    if (decimalNumber % 9 == 0) {
        romanString += 'IX';
        return romanString + convertToRoman(decimalNumber - 9);
    }
    if (decimalNumber % 5 == 0) {
        romanString += 'V';
        return romanString + convertToRoman(decimalNumber - 5);
    }
    if (decimalNumber % 4 == 0) {
        romanString += 'IV';
        return romanString + convertToRoman(decimalNumber - 4);
    }
    if (decimalNumber % 1 == 0) {
        romanString += 'I';
        return romanString + convertToRoman(decimalNumber - 1);
    }
};