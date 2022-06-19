const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener("click", function() {
    if (input == null) {
        return;
    }
    const liElement = document.createElement("li");
    const deleteButton = document.createElement("button");
    
    liElement.textContent = input.value;
    deleteButton.textContent = "❌";
    liElement.appendChild(deleteButton);
    list.appendChild(liElement);
    input.value = "";
    deleteButton.addEventListener("click", function() {
        liElement.remove();
    })
    input.focus();
});
