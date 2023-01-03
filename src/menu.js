import { head1 } from "../src/home";
export function replace() {
  const p = document.getElementById("menu");
  const listContainer = document.getElementById("image-holder");
  listContainer.innerHTML = "";

  const menuHolder = document.createElement("div");
  menuHolder.id = "menuHolder";

  const div1 = document.createElement("div");
  div1.id = "food1";
  const div2 = document.createElement("div");
  div2.id = "food2";
  const div3 = document.createElement("div");
  div3.id = "food3";
  const div4 = document.createElement("div");
  div4.id = "food4";

  menuHolder.appendChild(div1);
  menuHolder.appendChild(div2);
  menuHolder.appendChild(div3);
  menuHolder.appendChild(div4);

  listContainer.appendChild(menuHolder);

  const button2 = document.getElementById("home");
  button2.addEventListener("click", function () {
    head1();
  });
}
