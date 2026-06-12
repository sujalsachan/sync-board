import user from "../models/user.js";
import express from 'express';

export async function login(req, res) {
    console.log("Login attempt : ", req.body);

    const { email, password } = req.body;

    try {
        const foundUser = await user.find({email:email})
        console.log('User found', foundUser);

        if(foundUser.length > 0) res.status(200).send({
            message : "User found",
            user : foundUser,
        }) 
        else 
            res.status(400).send({
                message : 'Email not registered',
                error : err
            })
    } catch (err) {
        res.status(400).send({
            message:"Cannot login",
            error : err
        })
    }
}

export const signUp = async (req, res) => {
    console.log('Signing In');

    const newUser = req.body;
    try {
        console.log(newUser)
        await user.create(newUser);
        res.status(200).send({
            message:"Sign up success"
        })
        console.log('Signin Success')
    } catch (err) {
        console.log('Signup error :', err.message);
        res.status(400).send({
            message:"Sign up failed, error : " + err.message
        })
        console.log('Signin failed')
    }
}