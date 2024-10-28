//pattern1

 

function checkAnagram(str1,str2){
    const lookup ={}
    if(str1.length !== str2.length){
        return false
    }
    for(let i = 0 ; i < str1.length ; i++){
        let letter = str1[i]
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
    }
    //console.log(lookup)

    for(let i = 0 ; i< str2.length ; i++){
        let letter = str2[i]
        if(!lookup[letter]){
            return false
        }else{
            lookup[letter] -=1
            console.log(lookup)
        }
    }
    console.log("outsude",lookup)
    return true

}
let str1='anagram'
let str2='aaagram'
console.log(checkAnagram(str1,str2))