//brute force solution
function sortArray(arr){
    for(let i = 0 ; i < arr.length; i++){
        for(let j = i +1 ; j < arr.length ;j++){
            if(arr[i] < arr[j]){
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

console.log(sortArray([3,8,4,7,9]))