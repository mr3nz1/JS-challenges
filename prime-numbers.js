function primeNumbers(arr) {
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

    if (isCurrentValuePrime) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

console.log(primeNumbers([2, 4, 7, 10, 13, 125, 7, 71, 20, 23, 29, 30]));

// a prime number if divised by 2, to 10 will not give an integer number
