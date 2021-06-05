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
});
const insertion = document.getElementById("insertion");
const selection = document.getElementById("selection");
const Bubble = document.getElementById("Bubble");

function enabled() {
  insertion.disabled = false;
  selection.disabled = false;
  Bubble.disabled = false;
}

// Swap two blocks
function swap(el1, el2) {
  return new Promise((resolve) => {
    var temp1 = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp1;

    var temp2 = el1.childNodes[0].innerHTML;
    el1.childNodes[0].innerHTML = el2.childNodes[0].innerHTML;
    el2.childNodes[0].innerHTML = temp2;

    // for waiting of 0.25 sec
    window.requestAnimationFrame(function () {
      setTimeout(() => {
        resolve();
      }, 250);
    });
  });
}
