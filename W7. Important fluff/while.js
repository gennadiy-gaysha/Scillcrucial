let i = 0;

function counter() {
  i++;
  return i < 10;
}

while (counter()) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}
// -----------------------------------------
const arrays = [
  [1, 4, 6],
  [78, 109],
  [-1, 4],
];

let currentArrayToMergeIndex = 1;
let currentArray = arrays[0];
let newArray = [];

while (currentArrayToMergeIndex < arrays.length) {
  const arr1 = currentArray;
  const arr2 = arrays[currentArrayToMergeIndex];

  let index1Array = 0;
  let index2Array = 0;

  while (index1Array + index2Array !== arr1.length + arr2.length - 2) {
currentArray = newArray;
    if (index1Array >= arr1.length) {
      newArray = [...newArray, arr2[index2Array]];
      index2Array++;
      continue;
    }
		  else (index2Array >= arr2.length) {
      newArray = [...newArray, arr1[index1Array]];
      index1Array++;
      continue;
    }
    if (arr1[index1Array] < arr2[index2Array]) {
      newArray = [...newArray, arr1[index1Array]];
      index1Array++;
    } else {
      newArray = [...newArray, arr2[index2Array]];
      index2Array++;
    }
  }
  currentArrayToMergeIndex++;
}
