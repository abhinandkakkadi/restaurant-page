export function head() {
  console.log(1000);
  // import { head } from "../src/home";
  // head();

  var ul = document.createElement("ul");

  // Create the li elements

  var div = document.createElement("div");
  div.id = "header";

  const anchor1 = document.createElement("a");
  anchor1.href = "#";
  anchor1.textContent = "Home";
  anchor1.id = "home";
  var li1 = document.createElement("li");
  li1.appendChild(anchor1);

  const anchor2 = document.createElement("a");
  anchor2.href = "#";
  anchor2.textContent = "Menu";
  anchor2.id = "menu";
  var li2 = document.createElement("li");
  li2.appendChild(anchor2);

  const anchor3 = document.createElement("a");
  anchor3.href = "#";
  anchor3.textContent = "Contact";
  anchor3.id = "contact";
  var li3 = document.createElement("li");
  li3.appendChild(anchor3);

  // Append the li elements to the ul element
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  div.appendChild(ul);

  // Get a reference to the list container div

  // Append the ul element to the list container div
  const listContainer = document.getElementById("content");
  listContainer.appendChild(div);

  const body = document.createElement("div");
  body.setAttribute("class", "main");
  listContainer.appendChild(body);

  const heading = document.createElement("h1");
  heading.innerHTML = "Kakkadi Restaurant";
  body.appendChild(heading);

  const imageHolder = document.createElement("div");
  imageHolder.id = "image-holder";
  imageHolder.innerHTML = "";
  body.appendChild(imageHolder);

  const line1 = document.createElement("p");
  line1.innerHTML = "Best pizza in your country";
  line1.id = "line1";
  const line2 = document.createElement("p");
  line2.innerHTML = "Made with passion since 1908";
  line1.id = "line2";

  const image = document.createElement("img");
  image.src = "../src/cooks.jpeg";
  image.id = "image";

  imageHolder.appendChild(line1);
  imageHolder.appendChild(line2);
  imageHolder.appendChild(image);

  const footer = document.createElement("footer");
  footer.innerHTML = "Copyright 2023 abhinandkakkadi";

  listContainer.appendChild(footer);
}

export function head1() {
  const imageHolder = document.getElementById("image-holder");

  imageHolder.innerHTML = "";
  const line1 = document.createElement("p");
  line1.innerHTML = "Best pizza in your country";
  line1.id = "line1";
  const line2 = document.createElement("p");
  line2.innerHTML = "Made with passion since 1908";
  line1.id = "line2";

  const image = document.createElement("img");
  image.src = "../src/cooks.jpeg";
  image.id = "image";

  imageHolder.appendChild(line1);
  imageHolder.appendChild(line2);
  imageHolder.appendChild(image);
}
