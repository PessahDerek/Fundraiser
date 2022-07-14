
const routes = require('express').Router();
const functions = require('../functions/func1');
const userModel = require('../models/userModel');
const fundraisers = require('../models/fundraisers');
const invitedRaisers = require('../models/invitedFundraisers');
const AllRaisersSchema = require('../models/AllRaisers');


routes.post('/createacc', async(req, res)=>{
    // test credentials first
    var testCases = [req.body.userName, req.body.contact, req.body.password];
    proceed = 1;
    for (var i = 0; i < testCases.length; i++){
        if (testCases[i] !== '' && testCases[i] !== null && typeof(testCases[i]) !== 'undefined' && typeof(testCases[i])==='string'){
            proceed = proceed * 1;
        }else{
            proceed = proceed * 0;
        }
    }
    if (proceed === 1){
        //proceed to save
        // check user doesn't exist
        const exists = await functions.checkUser(req.body)
        if(exists.status){
            const raiserKey = (await new fundraisers({}).save())._id;
            const invitedKey = (await new invitedRaisers({}).save())._id;
            
            const newUser = new userModel({
                contact: req.body.contact,
                userName: req.body.userName,
                password: req.body.password,
                fundRaiserKey: raiserKey,
                keyForInvited: invitedKey
            });
            console.log('hello')
            try {
                newUser.save()
                .then(res.send(true));
            } catch (error) {
                res.send("Error Occured");
            }
        } else {
            res.send("Account Exists");
        };
    }
})

routes.post('/loginacc', async(req, res)=>{
    // check if user exist
    const exists = await functions.checkUser(req.body, true);
    if (exists.status){
        // means user doesn't exist as null returns true
        res.send("Check Credentials or Create Account");
    }else{
        // check if passwords match
        try {
            if (req.body.userName === exists.userData.userName && req.body.password === exists.userData.password){
                console.log("success");
                res.send({message: "Successful", userId: exists.userData._id})
            } else {
                console.log("Check Username or Password");
                res.send(false)
            }
        } catch (error) {
            console.log(error);
        }
    }
})

routes.post('/createraiser', async(req, res)=>{
    // get user's userName and phone
    var user = await userModel.findById(req.body.userId);
    var raiserId;
    // save fundraiser
    const newRaiser = new AllRaisersSchema({
        title: req.body.title,
        img: "pending",
        description: req.body.description,
        owner: user._id,
        beneficiary: req.body.beneficiary,
        contributors: [],
        total: Number(req.body.total) || 0,
        target: req.body.target
    });
    await newRaiser.save()
    .then((res)=>{raiserId = res._id})
    .catch((err)=>console.log(err));
    console.log(raiserId);
    // add key to list
    const userRaisers = await fundraisers.updateOne({_id: user.fundRaiserKey}, {$addToSet: {fundraiser: raiserId}})
        .then((res)=>console.log(res))
        .catch(err=>console.log(err));
})

module.exports = routes;
