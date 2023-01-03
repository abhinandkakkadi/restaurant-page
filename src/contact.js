export function contact() {
  const imageHolder = document.getElementById("image-holder");

  imageHolder.innerHTML = "";
  const contactHolder = document.createElement("div");
  contactHolder.id = "ContactHolder";

  const line1 = document.createElement("h2");
  line1.innerHTML = "Contact";
  line1.id = "contact1";

  const line2 = document.createElement("h2");
  line2.innerHTML = "Abhinand Kakkadi";
  line2.id = "abhinand";
  const line3 = document.createElement("p");
  line3.innerHTML = "9961088604";
  line3.id = "contact2";

  contactHolder.appendChild(line1);
  contactHolder.appendChild(line2);
  contactHolder.appendChild(line3);

  imageHolder.appendChild(contactHolder);
}
