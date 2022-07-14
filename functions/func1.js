
const userModel = require('../models/userModel');

// check user doesn't exist 
const checkUser = async(data, signIn=false) =>{
    var resp;
    if(signIn){
        resp = await userModel.findOne({userName: data.userName});
    } else {
        resp = await userModel.findOne({contact: data.contact});
    }
    if (resp === null){
        return {status: true, userData: null};
    }else{
        return {status: false, userData: resp};
    }
}
// get userData
const getUser = async(id)=>{
    let userData
    try {
        userData = await userModel.findOne({_id: id});
        return userData;
    } catch (error) {
        return error;
    }
}
// validate incoming requests 
const screenRequest = async(request) =>{
    
}

module.exports = {checkUser};
