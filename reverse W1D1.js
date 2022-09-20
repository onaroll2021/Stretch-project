function reverseString(str) {
  let newString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str [i];
  }
  return newString;
}
for (let i = 2; i < process.argv.length; i++) {
  console.log(reverseString(process.argv[i]));
}
