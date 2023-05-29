// swap function util for sorting algorithms takes input of 2 DOM elements with .style.height feature
function swap(el1, el2) {
  let temp = el1.style.height; // third variable for swapping
  el1.style.height = el2.style.height;
  el2.style.height = temp;
}

// Disables sorting buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableSortingBtn() {
  document.querySelector("#bubble_sort_btn").disabled = true;
  document.querySelector("#insertion_sort_btn").disabled = true;
  document.querySelector("#merge_sort_btn").disabled = true;
  document.querySelector("#quick_sort_btn").disabled = true;
  document.querySelector("#selection_sort_btn").disabled = true;
  document.querySelector("#heap_sort_btn").disabled = true;
}

// Enables sorting buttons used in conjunction with disable
function enableSortingBtn() {
  document.querySelector("#bubble_sort_btn").disabled = false;
  document.querySelector("#insertion_sort_btn").disabled = false;
  document.querySelector("#merge_sort_btn").disabled = false;
  document.querySelector("#quick_sort_btn").disabled = false;
  document.querySelector("#selection_sort_btn").disabled = false;
  document.querySelector("#heap_sort_btn").disabled = false;
}

// Disables size slider used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableSizeSlider() {
  document.querySelector("#size_input").disabled = true;
}

function disableSpeedSlider() {
  document.querySelector("#speed_input").disabled = true;
}

function enableSpeedSlider() {
  document.querySelector("#speed_input").disabled = false;
}

// Enables size slider used in conjunction with disable
function enableSizeSlider() {
  document.querySelector("#size_input").disabled = false;
}

// Disables newArray button used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableNewArrayBtn() {
  document.querySelector("#new_array_btn").disabled = true;
}

function enableNewArrayBtn() {
  document.querySelector("#new_array_btn").disabled = false;
}

function enableStopSortingBtn() {
  document.querySelector("#stop_btn").disabled = false;
}

function disableStopSortingBtn() {
  document.querySelector("#stop_btn").disabled = true;
}

// Used in async function so that we can see animations of sorting, takes input time in ms (1000 = 1s)
function delayTime(milisec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, milisec);
  });
}

// Selecting size slider from DOM
let arraySize = document.querySelector("#size_input");

// Event listener to update the bars on the UI
arraySize.addEventListener("input", function () {
  console.log(arraySize.value, typeof arraySize.value);
  createNewArray(parseInt(arraySize.value));
});

// Default input for waitforme function (260ms)
let delay = 260;

// Selecting speed slider from DOM
let delayElement = document.querySelector("#speed_input");

// Event listener to update delay time
delayElement.addEventListener("input", function () {
  console.log(delayElement.value, typeof delayElement.value);
  delay = 320 - parseInt(delayElement.value);
});

// Creating barArray to store randomly generated numbers
let barArray = [];

// Call to display bars right when you visit the site
createNewArray();

// To create new barArray input size of barArray
function createNewArray(noOfBars = 50) {
  // calling helper function to delete old bars from DOM
  deleteChild();

  // creating an barArray of random numbers
  barArray = [];
  for (let i = 0; i < noOfBars; i++) {
    barArray.push(Math.floor(Math.random() * 251));
  }
  console.log(barArray);

  const bars = document.querySelector("#sorting");

  // create multiple element div using loop and adding class 'bar col'
  for (let i = 0; i < noOfBars; i++) {
    const bar = document.createElement("div");
    bar.style.height = `${barArray[i] * 1.7}px`;
    bar.classList.add("bar");
    bar.classList.add("flex-item");
    bar.classList.add(`barNo${i}`);
    bars.appendChild(bar);
  }
}

// Helper function to delete all the previous bars so that new ones can be added
function deleteChild() {
  const bars = document.querySelector("#sorting");
  bars.innerHTML = "";
}

// Selecting new array button from DOM and adding event listener
const newArrayButton = document.querySelector("#new_array_btn");
newArrayButton.addEventListener("click", function () {
  hasPressedStop = false;
  enableSpeedSlider();
  console.log("From newArray " + arraySize.value);
  console.log("From newArray " + delay);
  enableSortingBtn();
  enableSizeSlider();
  createNewArray(arraySize.value);
});

const stopSortingButton = document.querySelector("#stop_btn");
stopSortingButton.addEventListener("click", function () {
  disableSortingBtn();
  disableSizeSlider();
  hasPressedStop = true;
});
