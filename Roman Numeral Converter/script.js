const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');
convertBtn.addEventListener("click", ()=>{
    const numberInput = document.getElementById('number').value;
    console.log(numberInput);
    if (!numberInput) {
        output.innerText = "Please enter a valid number";
    } else if ((Number(numberInput))<0) {
        output.innerText = "Please enter a number greater than or equal to 1";
    }
});