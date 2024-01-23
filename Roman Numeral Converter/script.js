const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');
convertBtn.addEventListener("click", ()=>{
    const numberInput = document.getElementById('number').value;
    console.log(numberInput);
    if (!numberInput) {
        output.innerText = "Please enter a valid number";
    } else if ((Number(numberInput))<0) {
        output.innerText = "Please enter a number greater than or equal to 1";
    } else if ((Number(numberInput))>=4000) {
        output.innerText = "Please enter a number less than or equal to 3999";    
    } else {
        output.innerText = convertToRoman((Number(numberInput)));
    }
});

// Reduce the number and concatenate the roman numeral to the string
const convertToRoman = (decimalNumber) => {
    const numeralSymbols = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];
    let romanString = '';
    for (const numeral of numeralSymbols) {
        while (decimalNumber >= numeral.value) {
            romanString += numeral.symbol;
            decimalNumber -= numeral.value;
        }
    }
    return romanString;
};