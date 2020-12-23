const rollButton = document.querySelector("button");
const twentyButton = document.querySelector("#twenty");
const sixButton = document.querySelector("#six");
let sides = 0;

twentyButton.addEventListener("click", () => {
    sides = 20;
    printResult(sides);
})

sixButton.addEventListener("click", () => {
    sides = 6;
    printResult(sides);
})

function printResult(numSides) {
    const roll = Math.floor(Math.random() * numSides + 1);
    const rollDiv = document.body.querySelector("#roll");
    let num = document.createTextNode(roll);
    
    if (rollDiv.textContent == null) {
        rollDiv.appendChild(num);
    } else {
        rollDiv.textContent = num.textContent;
    }
}