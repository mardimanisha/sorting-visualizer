async function insertion() {
  const ele = document.querySelectorAll(".bar");
  ele[0].style.backgroundColor = "green";

  for (let i = 1; i < ele.length; i++) {
    if (hasPressedStop) {
      return;
    }

    let j = i - 1;
    let key = parseInt(ele[i].style.height);
    ele[i].style.backgroundColor = "blue";

    await delayTime(delay);

    if (hasPressedStop) {
      return;
    }

    while (j >= 0 && parseInt(ele[j].style.height) > key) {
      if (hasPressedStop) {
        return;
      }

      ele[j].style.backgroundColor = "blue";
      ele[j + 1].style.height = ele[j].style.height;
      j--;

      await delayTime(delay);

      if (hasPressedStop) {
        return;
      }

      for (let k = i; k >= 0; k--) {
        ele[k].style.backgroundColor = "green";
      }
    }

    ele[j + 1].style.height = `${key}px`;
    ele[i].style.backgroundColor = "green";
  }
}

const inSortbtn = document.querySelector("#insertion_sort_btn");
inSortbtn.addEventListener("click", async function () {
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  enableStopSortingBtn();

  await insertion();

  if (hasPressedStop) {
    disableSpeedSlider();
  } else {
    enableSortingBtn();
    enableSizeSlider();
  }

  enableNewArrayBtn();
  disableStopSortingBtn();
});
