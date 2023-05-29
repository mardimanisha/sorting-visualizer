async function heapSort(arr, n) {
  // Build heap (rearrange array)
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    if (hasPressedStop) {
      return;
    }
    await heapify(arr, n, i);
  }

  // One by one extract an element from the heap
  for (let i = n - 1; i > 0; i--) {
    if (hasPressedStop) {
      return;
    }
    // Move current root to end
    const temp = arr[0].style.height;
    arr[0].style.height = arr[i].style.height;
    arr[i].style.height = temp;
    arr[0].style.background = "cyan";
    arr[i].style.background = "green";
    await delayTime(delay);

    // Call max heapify on the reduced heap
    await heapify(arr, i, 0);
  }
}

// To heapify a subtree rooted with node i which is an index in arr[]. n is the size of the heap
async function heapify(arr, n, i) {
  if (hasPressedStop) {
    return;
  }
  let largest = i; // Initialize largest as the root
  const l = 2 * i + 1; // left = 2*i + 1
  const r = 2 * i + 2; // right = 2*i + 2

  // If the left child is larger than the root
  if (
    l < n &&
    parseInt(arr[l].style.height) > parseInt(arr[largest].style.height)
  ) {
    largest = l;
  }

  // If the right child is larger than the largest so far
  if (
    r < n &&
    parseInt(arr[r].style.height) > parseInt(arr[largest].style.height)
  ) {
    largest = r;
  }

  // If the largest is not the root
  if (largest !== i) {
    const temp = arr[i].style.height;
    arr[i].style.height = arr[largest].style.height;
    arr[largest].style.height = temp;

    // Recursively heapify the affected sub-tree
    await heapify(arr, n, largest);
  }
}

const heapSortBtn = document.querySelector("#heap_sort_btn");
heapSortBtn.addEventListener("click", async function () {
  const bars = document.querySelectorAll(".bar");
  const n = bars.length;

  hasPressedStop = false;
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  enableStopSortingBtn();
  await heapSort(bars, n);
  bars[0].style.background = "green";
  if (hasPressedStop) {
    disableSpeedSlider();
  } else {
    enableSortingBtn();
    enableSizeSlider();
  }
  enableNewArrayBtn();
  disableStopSortingBtn();
});
