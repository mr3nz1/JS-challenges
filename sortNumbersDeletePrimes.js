function notPrimeNumbers(arr) {
    // NOT not prime numbers
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let isCurrentValuePrime = true;

    for (let j = 2; j < 10; j++) {
      if (arr[i] % j === 0) {
        // if current value divised by any number from 2 to 9 gives zero then it is not a prime number
        isCurrentValuePrime = false;
        break;
      }
    }

    if (arr[i] === 2 || arr[i] === 3 || arr[i] === 5 || arr[i] === 7) {
      // if the number is either 2, 3, 5, 7 then it is a prime number
      isCurrentValuePrime = true;
    }

    if (!isCurrentValuePrime) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

function sortNumbersDeletePrimes(arr) {
  let isArrSorted = false;

  arr = notPrimeNumbers(arr);

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

console.log(
  sortNumbersDeletePrimes([
    2, 31, 32, 7, 1000, 2232, 123123123, 22, 45, 534, 4, 3, 2, 1, 434,
  ])
);
