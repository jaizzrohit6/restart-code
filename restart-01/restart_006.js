// username , email , address

// middlleware will validate the input field and give error 

// in req body customer is passing addtional details throw and exceptions 

// if reqbody is not in format

const express = require("express")
const app = express()
const port = 8080

params = {
    "username" : "rohit",
    "email" : "rohitxyz@gmail.com",
    "address" : "bnagalore",

}

app.post("/createUser",(req,res)=>{
    let params =  req.params
    let validation = inputValidation(params)
    let response = validation.response 
    if(response.status == 200){
        username = req.params.username
        email = req.params.username
        address= req.params.username
        let createUserInfo = createUser(username,email,address)
        res.send(createUserInfo)
    } 
})
app.get("/getUser",(req,res)=>{
    let params =  req.params
    let validation = inputValidation(params)
    let response = validation.response 
    if(response.status == 200){
        username = req.params.username
        email = req.params.username
        address= req.params.username

        let getUserInfo = getUser(username,email,address)
        res.send(getUserInfo)
    }
    else{
        let response = {
            "status": 500,
            "message": "Input validation failed"
        }
        res.send(response)
    } 
})



function inputValidation(params){
    username = params && params.usernam ? params.username: ""
    email = params && params.email ? params.email: ""
    address = params && params.address ? params.address: ""
    if (params.length >2){
        return response = ({
            "status": 404,
            "messase": "addtional field is not expected , remove extra field"
        })
    }
    else{
        if(((!username )|| (username =="")) && ((!email )|| (email =="")) && ((!address )|| (address ==""))){
            return response = ({
                "status": 404,
                "messase": "input validation failed , please provide correct input"
            })
        }
        else{
            return response ({
                "status": 200,
                "messase": "success"
            })
        }
    }
    
}


app.use(port,(url)=>{
    console.log("server is started")
})

second highest salary 

select sal from emp as e1  where  ( select sal from emp e2 where e2.sal > e1.sal)
    select 
)



