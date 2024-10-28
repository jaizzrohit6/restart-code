//sliding window bruteforce

function findMaximumSum(arr,k){
    let n = arr.length
    let maxSum = -100000

    if(n<k){
        return false
    }
    for(let i = 0 ; i <= n-k ; i++){
        let currentSum = 0
        for(let j = i ; j < k+i ; j++){
            currentSum +=arr[j]
        }
        maxSum = Math.max(maxSum,currentSum) 
    }
    console.log(maxSum)
    return maxSum
}

// let arr = [1,2,3,4,5,6]
let arr = [9,5,1,4,6,8]
k = 3
console.log(findMaximumSum(arr,k))

function maxSumNew(arr,k){
    let n = arr.length
    if(n<k){
        return false
    }
    let currentSum = 0
    for(let i = 0 ; i < k ; i++){
        currentSum += arr[i]
    }
    maxSum = currentSum
    for(let j = k ; j < n ; j++){
        currentSum = currentSum + arr[j] - arr[j-k]
        maxSum = Math.max(maxSum,currentSum)
    }
    return maxSum
}

console.log(maxSumNew(arr,k))

let newArr = [1,1,1,1,2,2,2,2,3,3,4,5,5,5,5,6,7,7,7]
function countuniquevalues(arr){
    let countValues ={}
    for(let i = 0 ; i < arr.length ; i ++){
        let startVal = arr[i]
        countValues[startVal] ? countValues[startVal] += 1 : countValues[startVal] = 1
    }

    let result = Object.keys(countValues).length
    return result
}

console.log(countuniquevalues(newArr))

function countuniquevaluesNew(arr){
    let i = 0 
    for(let j = 1 ; j < arr.length ; j++){
        if(arr[i]!== arr[j]){
            i++
            arr[i] = arr[j]
        }
    }
    return i + 1
}


console.log(countuniquevaluesNew(newArr))