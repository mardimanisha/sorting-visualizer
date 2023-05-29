async function partitionLomuto(ele, l, r) {
  let i = l - 1;
  ele[r].style.background = "cyan"; // pivot
  for (let j = l; j <= r - 1; j++) {
    if (hasPressedStop) {
      return;
    }
    ele[j].style.background = "yellow"; // current element
    await delayTime(delay);
    if (hasPressedStop) {
      return;
    }
    if (parseInt(ele[j].style.height) < parseInt(ele[r].style.height)) {
      i++;
      swap(ele[i], ele[j]);
      // color
      ele[i].style.background = "orange";
      if (i !== j) ele[j].style.background = "orange";
      // pauseChamp
      await delayTime(delay);
    } else {
      // color if not less than pivot
      ele[j].style.background = "pink";
    }
  }
  i++;
  if (hasPressedStop) {
    return;
  }
  await delayTime(delay);
  if (hasPressedStop) {
    return;
  }
  swap(ele[i], ele[r]);
  // color
  ele[r].style.background = "pink";
  ele[i].style.background = "green";

  if (hasPressedStop) {
    return;
  }
  await delayTime(delay);
  if (hasPressedStop) {
    return;
  }

  // color
  for (let k = 0; k < ele.length; k++) {
    if (ele[k].style.background !== "green")
      ele[k].style.background = "#e43f5a";
  }

  return i;
}

async function quickSort(ele, l, r) {
  if (l < r) {
    let pivot_index = await partitionLomuto(ele, l, r);
    await quickSort(ele, l, pivot_index - 1);
    await quickSort(ele, pivot_index + 1, r);
  } else {
    if (l >= 0 && r >= 0 && l < ele.length && r < ele.length) {
      ele[r].style.background = "green";
      ele[l].style.background = "green";
    }
  }
}

const quickSortbtn = document.querySelector("#quick_sort_btn");
quickSortbtn.addEventListener("click", async function () {
  let ele = document.querySelectorAll(".bar");
  let l = 0;
  let r = ele.length - 1;
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  enableStopSortingBtn();
  await quickSort(ele, l, r);
  if (hasPressedStop) {
    disableSpeedSlider();
  } else {
    enableSortingBtn();
    enableSizeSlider();
  }
  enableNewArrayBtn();
  disableStopSortingBtn();
});
