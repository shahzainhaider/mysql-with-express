const express = require('express')
const bodyParser = require('body-parser')
const {addUser,getUsers,getUser,deleteUser, updateUser} = require('./controller/userController')
 require('./models')

const app = express()

app.use(bodyParser.json())

app.get('/',(req,res)=>{
    console.log('hello')
    res.send('hello')
})
//get all users
app.get('/users',getUsers)
app.get('/users/:id',getUser)
app.post('/users',addUser)
app.delete('/users/:id',deleteUser)
app.patch('/users/:id',updateUser)


app.listen(3000,()=>{
    console.log('server is running on: http://localhost:3000')


})
