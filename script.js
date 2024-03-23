// section tag for all
let section = document.createElement("section");

// my header tag
let header = document.createElement("header");

// my h1 tag
let heading = document.createElement("h1");
heading.textContent = "Omar Gaal";

// my ul
let ul = document.createElement("ul");

// my 4 li content
let menuItems = ["About", "Experience", "Projects", "Contact"];

// my container
let divContainer = document.createElement("div");

// my container2
let container2 = document.createElement("div");
container2.classList.add("container2");

// my image
let img = document.createElement("img");
img.src = "./img/me.jpg";

// p tag
let p = document.createElement("p");
p.textContent = "Hello 👋, I'm";

// my h2 tag
let h2 = document.createElement("h2");
h2.textContent = "Omar Gaal";

// my h4 tag
let h4 = document.createElement("h4");
h4.textContent = "Frontend Developer";

menuItems.forEach(function (itemText) {
  let li = document.createElement("li");
  li.textContent = itemText;
  ul.appendChild(li);
});

// appendChild area

// everything on my section tag
section.appendChild(header);
section.appendChild(divContainer);
section.appendChild(container2);

header.appendChild(heading);
header.appendChild(ul);
divContainer.appendChild(img);
divContainer.appendChild(p);
divContainer.appendChild(h2);
divContainer.appendChild(h4);

// Appending container2 to divContainer after divContainer is created
divContainer.appendChild(container2);
container2.appendChild(p);
container2.appendChild(h2);
container2.appendChild(h4);

// pushing element to the DOM

document.body.appendChild(section);
document.body.appendChild(header);
document.body.appendChild(divContainer);
