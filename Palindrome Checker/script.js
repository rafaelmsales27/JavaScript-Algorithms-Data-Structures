const checkBtn = document.querySelector('#check-btn');
const textInput = document.querySelector('#text-input');
const text = textInput.textContent;
checkBtn.addEventListener("click", () => {
    if (text === null || text === "")  {
        alert('Please input a value');
    } else if (text = "A") {

    }
})
