function isPalindrome(str) {
  let strReversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    strReversed += str[i];
  }

  if (strReversed === str) {
    return true;
  }

  return false;
}

console.log(isPalindrome("tooot"))