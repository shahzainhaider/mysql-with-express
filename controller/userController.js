const db = require('../models')

const User = db.user


//GET ALL USER 
const getUsers =async(req,res)=>{
    let users = await User.findAll()
    res.status(200).json(users)

}

//GET SINGLE USER
const getUser =async(req,res)=>{
    let user = await User.findOne({
        where:{
            id:req.params.id
        }
    })
    res.status(200).json(user)
}

//CREATE USER
const addUser =async(req,res)=>{
    let data = req.body
    if(data.length>1){
        let users = await User.bulkCreate(data)
        res.status(200).json(users)
    }else{
        let user = await User.create(data)
        res.status(200).json(user)
    }
}

//DELETE USER
const deleteUser =async(req,res)=>{
    let user = await User.destroy({
        where:{
            id:req.params.id
        }
    })
    res.status(200).json(user)
}

//UPDATE USER
const updateUser =async(req,res)=>{
    let data = req.body
    let user = await User.update(data,{
        where:{
            id:req.params.id
        }
    })
    res.status(200).json(user)
}


module.exports={
    addUser,getUsers,getUser,deleteUser,updateUser
}