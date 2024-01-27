function sortNumberArrInDesc(arr) {
  let isArrSorted = false;

  while (!isArrSorted) {
    let swappedInThisRun = false;

    for (let i = 0; i < arr.length; i++) {
      if (i < arr.length - 1) {
        if (arr[i] < arr[i + 1]) {
          let a = arr[i + 1];

          arr[i + 1] = arr[i];
          arr[i] = a;
          swappedInThisRun = true;
        }
      }
    }

    if (!swappedInThisRun) {
      isArrSorted = true;
    }
  }

  return arr;
}

function containsMajorityElement(arr) {
  arr = sortNumberArrInDesc(arr);

  for (let i = 0; i < arr.length; i++) {
    let countOfCurrentNumOccurances = 0;

    for (let j = 0; j < arr.length; j++) {
      if (j < arr.length - 1) {
        if (arr[j] === arr[j + 1]) {
          countOfCurrentNumOccurances += 1;
        }
      }

      if (countOfCurrentNumOccurances > arr.length / 2) {
        return true;
      }
    }
  }

  return false;
}

// console.log(containsMajorityElement([3, 1, 3, 4, 4, 5, 3, 5, 3, 3, 3, 6, 3]));
console.log(containsMajorityElement([3, 1, 3, 4, 4]));
