//o manipulate an element inside the DOM, you first need to select it.
const link = document.querySelector("a");

link.textContent = "MDN."
link.href = "https://developer.mozilla.org";

const sect = document.querySelector("section");

const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride";

sect.appendChild(para);

const text = document.createTextNode("- the premier source for web development knowledge");

const linkPara = document.querySelector("p");
linkPara.appendChild(text);

sect.appendChild(linkPara); // This moves the paragraph down to the bottom of the section. You might have thought it would make a second copy of it, but this is not the case — linkPara is a reference to the one and only copy of that paragraph. If you wanted to make a copy and add that as well, you'd need to use Node.cloneNode() instead.


// moving and removing elements

sect.removeChild(linkPara); //  when you have a reference to the node to be removed and its parent.
linkPara.remove();  //When you want to remove a node based only on a reference to itself,

// Manipulating Styles

/* para.style.color = "red";
para.style.backgroundColor = "black";
para.style.padding = "10px";
para.style.width = "250px";
para.style.textAlign = "center"; */

//JavaScript property versions of the CSS styles are written in lower camel case whereas the CSS versions are hyphenated (kebab-case)

//Another way (adding a </style> on the HTML head)

para.setAttribute("class", "highlight");

