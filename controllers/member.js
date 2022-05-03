const res = require("express/lib/response");

const memberService = require('../services/member');

exports.getmember = async function getmember(req,res){
    const data = await memberService.findmember();
    res.status(200).json(data);
}

exports.loginMember = async (req, res) => {
    try{
        const body = req.body;
        const data = await memberService.login(body.username,body.password);
        if (data) {
            res.status(200).json({
                status: true,
                message: "login success",
                data: data
            })
        } else {
            res.status(200).json({
                status: false,
                message: "login error",
                data: data
            })
        }
      
    }catch(err){
        res.status(500).json({
            status: false,
            message: err
        });
    }

}

exports.createmember = async(req,res) => {
    try{
        const body = req.body;
        await memberService.createmember(body.fname,body.lname,body.email,body.username,body.password);
        res.status(201).json({
            status: true,
            message: "Created"
        })
    }catch(err){
        res.status(500).json({
            status: false,
            message: err
        });
    }
}
