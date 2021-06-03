// promise to swap two blocks
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
// SELECTION SORT AGORITHM
async function SelectionSort(delay = 200) {
  var blocks = document.querySelectorAll(".block");
  var min = 0;
  for (var i = 0; i < blocks.length; i++) {
    min = i;
    blocks[i].style.backgroundColor = "red"; // change the color of block being compared

    for (var j = i + 1; j < blocks.length; j++) {
      // change background color of blocks being compared
      blocks[j].style.backgroundColor = "red";
      // wait for 0.2 sec
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, delay);
      });

      console.log("run");

      var value1 = Number(blocks[min].childNodes[0].innerHTML);
      var value2 = Number(blocks[j].childNodes[0].innerHTML);
      // compare value of two blocks
      if (value1 > value2) {
        min = j;
      }
      blocks[j].style.backgroundColor = "#6b5b95"; // change the color back to previous color
    }
    await swap(blocks[min], blocks[i]);
    blocks = document.querySelectorAll(".block");
    blocks[i].style.backgroundColor = "rgb(49, 226, 13)"; // change the color of sorted bar to green
  }
}

const Selection = document.querySelector("#selection");
Selection.addEventListener("click", () => {
  SelectionSort();
  Bubble.disabled = true;
  insertion.disabled = true;
  selection.disabled = true;
});
