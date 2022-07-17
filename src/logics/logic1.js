import axios from "axios";

const signupUrl = "http://localhost:4000/api/createacc";
const loginUrl = "http://localhost:4000/api/loginacc";
const create = "http://localhost:4000/api/createraiser";
const getmyraisers = "http://localhost:4000/api/getraisers";

const signupFunc = async(signUpData) =>{
    let response;
    await axios.post(signupUrl, signUpData)
    .then((res)=>{
        response = res.data;
    })
    .catch((err)=>{
        response = err;
    })
    return response;
}


const loginFunc = async(loginData) =>{
    let response;
    await axios.post(loginUrl, loginData)
    .then((res)=>{
        response = res.data;
    })
    .catch((err)=>{
        response = err;
    });
    return response;
}

const createRaiser = async(data) =>{
    let response;
    await axios.post(create, data)
    .then((res)=>{
        response = res.data;
    })
    .catch((err)=>{
        response = err;
    });
    return response;
}

const getraisers = async(key) =>{
    let raisers;
    console.log(key)
    await axios.post(getmyraisers, {raiserKey: key})
    .then((res)=>{
        raisers = res.data;
    })
    .catch((err)=>{
        raisers = err;
    });
    return raisers;
}


export {signupFunc, loginFunc, createRaiser, getraisers} ;
