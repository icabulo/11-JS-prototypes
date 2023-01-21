String.prototype.palindrome = function () {
  const stgNoSpaces = this.replace(/\s+/g, "");
  const reverseString = stgNoSpaces.split("").reverse().join("");

  //   console.log(reverseString, stgNoSpaces);

  return stgNoSpaces === reverseString ? true : false;
};

console.log("anita lava la tina".palindrome());
console.log("prueba".palindrome());
