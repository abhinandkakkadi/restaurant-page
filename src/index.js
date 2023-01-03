import { head } from "../src/home";
import { replace } from "../src/menu";
import { contact } from "./contact";
head();

const button = document.getElementById("menu");
button.addEventListener("click", function () {
  replace();
});

const button3 = document.getElementById("contact");
button3.addEventListener("click", function () {
  contact();
});
