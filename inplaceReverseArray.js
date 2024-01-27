function inplaceReverseArray(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let correspondingIndex = (arr.length - 1) - i;
    let currentValue = arr[i]
    
    
    arr[i] = arr[correspondingIndex]
    arr[correspondingIndex] = currentValue
  }

  return arr
}

console.log(inplaceReverseArray([1, 2, 3, 4, 5, 6]));