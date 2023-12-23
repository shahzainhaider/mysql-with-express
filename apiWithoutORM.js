const connection = require('./connection')
const express = require('express')
const bodyParser = require('body-parser')

let app = express()

app.use(bodyParser.json())

//getting all the data
app.get('/employees',(req,res)=>{
    connection.query('SELECT * FROM employee',(err,row)=>{
        if(err){
            console.log(err)
        }else{
            console.log(row)
            res.send(row)
        }
    })
})

//getting specific data
app.get('/employees/:id',(req,res)=>{
    connection.query('SELECT * FROM employee WHERE id=?',[req.params.id],(err,row)=>{
        if(err){
            console.log(err)
        }else{
            console.log(row)
            res.send(row)
        }
    })
})

//deleting data
app.delete('/employees/:id',(req,res)=>{
    connection.query('DELETE FROM employee WHERE id=?',[req.params.id],(err,row)=>{
        if(err){
            console.log(err)
        }else{
            console.log(row)
            res.send(row)
        }
    })
})

//create data
app.post('/employees',(req,res)=>{
    let data = req.body
    let employeeData = [data.name,data.salary]
    connection.query('INSERT INTO employee(name,salary) VALUE(?)',[employeeData],(err,row)=>{
        if(err){
            console.log(err)
        }else{
            console.log(row)
            res.send(row)
        }
    })
})

//update data
app.patch('/employees',(req,res)=>{
    let data = req.body
    connection.query('UPDATE employee SET ? WHERE id='+data.id,[data],(err,row)=>{
        if(err){
            console.log(err)
        }else{
            console.log(row)
            res.send(row)
        }
    })
})

app.put('/employees',(req,res)=>{
    let data = req.body
    employeeData = [data.name,data.salary]
    connection.query('UPDATE employee SET ? WHERE id='+data.id,[data],(err,row)=>{
        if(err){
            console.log(err)
        }else{
            if(row.affectedRows==0){
                connection.query('INSERT INTO employee(name,salary) VALUE(?)',[employeeData],(err,row)=>{
                    if(err){
                        console.log(err)
                    }else{
                        console.log(row)
                        res.send(row)
                    }
                })
            }
            else{
                console.log(row)
                res.send(row)
            }
        }
    })
})




app.listen(3000,()=>{
    console.log(`running on port 3000`)
})