const rollButton = document.querySelector("button");

const button = document.querySelector("button");
const twentyButton = document.querySelector("#twenty");
const sixButton = document.querySelector("#six");

// twentyButton.addEventListener("click", () => {
//     sides = 20;
//     printResult(sides);
// })

// sixButton.addEventListener("click", () => {
//     sides = 6;
//     printResult(sides);
// })

button.addEventListener("click", () => {
    const sides = document.querySelector("#sided").value;
    const roll = Math.floor(Math.random() * sides + 1);
    const rollDiv = document.body.querySelector("#roll");
    let num = document.createTextNode(roll);
    
    if (rollDiv.textContent == null) {
        rollDiv.appendChild(num);
    } else {
        rollDiv.textContent = num.textContent;
    }
})