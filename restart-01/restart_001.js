
console.log("Hello World")
// Anagram

//rohit // tihro

function anagram(str1,str2){
    str1 = str1.toLowerCase()
    str2= str2.toLowerCase()
    if (str1.length !== str2.length) return false;
    let frequency1 = {}
    let frequency2 = {}
    for (let val of str1){
        frequency1[val] = (frequency1[val] || 0 ) + 1
    }
    for (let val of str2){
        frequency2[val] = (frequency2[val] || 0 ) + 1
    }
    const isAnagram =
    Object.keys(frequency1).every(
      (key) => frequency2.hasOwnProperty(key) && frequency1[key] === frequency2[key]
    ) && 
    Object.keys(frequency2).every(
      (key) => frequency1.hasOwnProperty(key)
    );

  return isAnagram;
}
let str1 = "rohit"
let str2= "thiRo"
console.log(anagram(str1,str2))


