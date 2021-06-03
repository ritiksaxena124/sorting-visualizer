// BUBBLE SORT

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

async function BubbleSort(delay = 100) {
  var blocks = document.querySelectorAll(".block");
  for (var i = 0; i < blocks.length; i++) {
    for (var j = 0; j < blocks.length - i - 1; j++) {
      // change background color of blocks being comapred
      blocks[j].style.backgroundColor = "#FF4949";
      blocks[j + 1].style.backgroundColor = "#FF4949";
      // wait for 0.1 sec
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, delay);
      });

      console.log("run");

      var value1 = Number(blocks[j].childNodes[0].innerHTML);
      var value2 = Number(blocks[j + 1].childNodes[0].innerHTML);
      // compare value of two blocks
      if (value1 > value2) {
        await swap(blocks[j], blocks[j + 1]);
        blocks = document.querySelectorAll(".block");
      }
      // change color to the previous
      blocks[j].style.backgroundColor = "#6b5b95";
      blocks[j + 1].style.backgroundColor = "#6b5b95";
    }
    // change the color of maximum bar
    blocks[blocks.length - i - 1].style.backgroundColor = "green";
  }
}

const bubble = document.querySelector("#Bubble");
bubble.addEventListener("click", () => {
  BubbleSort();
  Bubble.disabled = true;
  insertion.disabled = true;
  selection.disabled = true;
});
