import axios from "axios";

const signupUrl = "http://localhost:4000/api/createacc";
const loginUrl = "http://localhost:4000/api/loginacc";

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
    })
    return response;
}



export {signupFunc, loginFunc} ;
