const checkBtn = document.querySelector('#check-btn');
const result = document.getElementById('result');

checkBtn.addEventListener("click", () => {
    const textInput = document.getElementById('text-input').value;

    if (textInput === "" || textInput === null){
        alert('Please input a value');
    } else if (isPalindrome(textInput)){
        result.textContent = `${textInput} is a palindrome`;
    } else {
        result.textContent = `${textInput} is not a palindrome`;
    }
});

const isPalindrome = (word) => {
    //Ignore non alphanumeric characters
    const wordwithOnlyAlphanumeric = word.replace(/[^a-zA-Z0-9]/g, '');
    console.log("only alpha: " + wordwithOnlyAlphanumeric);
    //remove spaces
    const wordWithoutSpaces = wordwithOnlyAlphanumeric.replace(/\s/g, '');
    console.log("without space: " + wordWithoutSpaces);
    //lowercase all chars
    const wordLowerCase = wordWithoutSpaces.toLowerCase();
    console.log("lower: " + wordLowerCase);
    //reverse word
    const reverseWord = wordLowerCase.split('').reverse().join('');    
    console.log("reverse: " + reverseWord);
    if (wordLowerCase === reverseWord) {
        return true;
    } else {
        return false;
    }
}
