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

  let countOfCurrentNumOccurances = 1;
  let containsMajEl = false;

  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 1) {
      if (arr[i] === arr[i + 1]) {
        countOfCurrentNumOccurances += 1;
      } else {
        countOfCurrentNumOccurances = 1;
      }
    }

    console.log(countOfCurrentNumOccurances, arr.length / 2);
    if (countOfCurrentNumOccurances > arr.length / 2) {
      containsMajEl = true;
      break;
    }
  }

  if (containsMajEl) {
    return true;
  }

  return false;
}

console.log(containsMajorityElement([3, 1, 3, 4, 4, 5, 3, 5, 3, 3, 3, 6, 3]));
