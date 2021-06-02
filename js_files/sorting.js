var container = document.querySelector(".bars-area");
// function to generate array
function generateArray() {
  container.innerHTML = "";
  for (var i = 0; i < 12; i++) {
    // return a random value
    var value = Math.ceil(Math.random() * 100);
    // creating div element
    var array_ele = document.createElement("div");
    // adding class block
    array_ele.classList.add("block");

    // adding style to div
    array_ele.style.height = `${value * 3}px`;

    // creating label for displaying height if each block
    var array_ele_label = document.createElement("label");
    array_ele_label.classList.add("block_id");
    array_ele_label.innerHTML = value;

    // append created elements
    array_ele.appendChild(array_ele_label);
    container.appendChild(array_ele);
  }
}

const generate = document.querySelector("#newArray");
generate.addEventListener("click", () => {
  generateArray();
  enabled();
  document.querySelectorAll("button").setAttribute("disabled", "disabled");
});
