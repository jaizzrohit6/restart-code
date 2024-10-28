


// let str1 = "apple"
// let str2 = "leppa"


// function testAnagram(str1,str2){
//     if(str1.length !== str2.length){
//         return false
//     }

//     for(let i = 0 ; i < str1.length;i++){
//         if(str1[i].includes(str2)){
//            console.log(str1[i])
//            str2.splice(str1[i],1)
//            console.log(str2)
//         }
//     }
// }



// console.log(testAnagram(str1,str2))

// let test= [1,2,3,4]
// let val = 5
// if(val.includes(test)){
//     console.log("test")
// }


// let mypromise= new Promise(function(resolve,reject){
//     //logic 
// })


// mypromise.then(res=>{
//     resolve(res)
// }).catch(err=>{
//     reject(err)
// })



let obj1 = {
    name: 'xyz',
    printName(){
        console.log(this.name)
    }
}
     
    let obj2 ={
       name:'abc'
    }


// console.log(obj1.printName())

console.log(obj2.apply(obj1))