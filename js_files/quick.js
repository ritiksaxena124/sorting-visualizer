const quick = document.querySelector("#quick");
quick.addEventListener("click", () => {
  QuickSort(0, 11);
});

// this function will return the pivot position
async function Partition(l, r, delay = 300) {
  var blocks = document.querySelectorAll(".block"); // select all the blocks
  //   store value of pivot element;
  var pivot = Number(blocks[r].childNodes[0].innerHTML);
  var i = l - 1;

  blocks[r].style.backgroundColor = "red";

  for (var j = l; j <= r - 1; j++) {
    blocks[j].style.backgroundColor = "yellow";
    // wait for 300 ms
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );

    var value = blocks[j].childNodes[0].innerHTML;

    if (value < pivot) {
      i++;
      swap(blocks[i], blocks[j]);
      blocks[i].style.backgroundColor = "orange";
      if (i != j) blocks[j].style.backgroundColor = "#6b5b95";
      //To wait for 300 ms
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
    } else {
      blocks[j].style.backgroundColor = "#6b5b95";
    }
  }

  i++;
  swap(blocks[i], blocks[r]);
  blocks[r].style.backgroundColor = "pink";
  blocks[i].style.backgroundColor = "green";

  // To wait for 900 ms
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, delay * 3)
  );
  for (var k = 0; k < 12; k++)
    blocks[k].style.backgroundColor = "rgb(49, 226, 13)";
  return i;
}

async function QuickSort(l, r) {
  if (l < r) {
    var pivot = await Partition(l, r);
    await QuickSort(l, pivot - 1);
    await QuickSort(pivot + 1, r);
  }
}
