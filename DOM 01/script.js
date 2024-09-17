const container = document.querySelector("#container");


const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const pharagraf = document.createElement("p");

pharagraf.classList.add("red");
pharagraf.textContent = "Hey I'm red!";
pharagraf.style.color = "red";

const header = document.createElement("h1");
header.textContent = "I'm a blue h3!"
header.style.color = "blue";

const div1 = document.createElement("div");
div1.style.backgroundColor = "pink";
div1.style.border = "1px solid black";

const h1Div = document.createElement("h1");
h1Div.textContent = "I'm in a div";

const pDiv = document.createElement("p");
pDiv.textContent = "ME TOO!"



div1.appendChild(h1Div);
div1.appendChild(pDiv);


container.appendChild(content);
container.appendChild(pharagraf);
container.appendChild(header);
container.appendChild(div1);

btn.addEventListener("click", function (e) {
    console.log(e.target);
  });
