let size = 10;
let orderElement = 1;

const init = () => {
    const btn = document.createElement("button");
    btn.textContent = "Dodaj 10 elementów listy";
    btn.style.fontSize = "28px";
    document.body.appendChild(btn);
    
    const btnReset = document.createElement("button");
    btnReset.textContent = "Wyczyść";
    btnReset.style.fontSize = "28px";
    document.body.appendChild(btnReset);

    const ul = document.createElement("ul");
    document.body.appendChild(ul);
    ul.style.listStyle = "none";

    btn.addEventListener("click", createElementLi);
    // btn reset
    btnReset.addEventListener("click", cleanList);
}

const createElementLi = () => {
    for ( let i = 0; i < 10; i++) {
        const li = document.createElement('li');
        li.textContent = `Element nr ${orderElement++}`;
        document.querySelector('ul').appendChild(li);

        li.style.fontSize= `${size++}px`;
    }
}

const cleanList = () => {
    document.querySelector('ul').textContent = "";
    size = 10;
    orderElement = 1;
}
init ()



