import express from "express";
import User from "../models/user.model.js";

export async function login(req, res) {
  console.log("Login attempt : ", req.body);

  const { email, password } = req.body;

  try {
    const foundUser = await User.findOne({ email: email });

    if (foundUser && foundUser.password == password) {
      console.log('Login success', foundUser);  
      res.status(200).send(foundUser);
    } else {
      res.status(400).send({
        message: "Email or Password incorrect",
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Cannot login",
      error: err,
    });
  }
}

export async function signUp(req, res) {
  console.log("Signing In");
  
  const newUser = req.body;
  try {
    console.log(newUser);
    await User.create(newUser);
    const userFound = await User.findOne({ email: newUser.email });
    
    const userObj = userFound.toObject();
    
    delete userObj.password;
    console.log('Signup success', userObj);
    res.status(200).send(userObj);
  } catch (err) {
    res.status(400).send({
      message: "Sign up failed, error : " + err.message,
    });
  }
};
