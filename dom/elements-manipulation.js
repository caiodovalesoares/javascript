let section = document.querySelector(".section");
let div = document.createElement("div");
section.append(div);

//add
div.classList.add("box");
div.classList.add("accept");

//remove
div.classList.remove("accept");

//contains
console.log(div.classList.contains("box"));

//toggle - add if not present, remove if present
div.classList.toggle("error");

//replace
div.classList.replace("error", "accept");