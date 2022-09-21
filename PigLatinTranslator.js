let newNameList = [];
for (let i = 0; i < process.argv.slice(2).length; i++) {
  let originName = process.argv.slice(2)[i];
  let modifyMod = originName.slice(1) + originName.charAt(0) + "ay"
  newNameList.push(modifyMod);
}
console.log(newNameList.join(" "));