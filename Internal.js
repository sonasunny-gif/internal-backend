const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const app=express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post("/Calculator",(request,response)=>{
    const present=parseInt(request.body.present)
    const totalpre=parseInt(request.body.totalpre)
    const preresult=(present/totalpre)*8

    const exam1=parseInt(request.body.exam1)
    const exam1total=parseInt(request.body.exam1total)
    const exam1res=exam1/exam1total*10

    const exam2=parseInt(request.body.exam2)
    const exam2total=parseInt(request.body.exam2total)
    const exam2re=exam2/exam2total*10

    const ass1=parseInt(request.body.ass1)
    const ass2=parseInt(request.body.ass2)
   

    const assres=ass1+ass2

    const internal=preresult+exam1res+exam2re+assres
    response.json({"Attendance":preresult ,"Exam1":exam1res,
    "Exam2":exam2re,
    "Assignment":assres,
    "Internalmark":internal})


})

app.listen("5000",()=>{
    console.log("Server running")
})