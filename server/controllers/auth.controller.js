import User from "../models/user.js";
import user from "../models/user.js";
import express from "express";

export async function login(req, res) {
  console.log("Login attempt : ", req.body);

  const { email, password } = req.body;

  try {
    const foundUserData = await user.find({ email: email });

    if (foundUserData.length > 0 && foundUserData[0].password == password) {
      res.status(200).send(foundUserData[0]);
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

export const signUp = async (req, res) => {
  console.log("Signing In");

  const newUser = req.body;
  try {
    console.log(newUser);
    await user.create(newUser);
    const userFound = await user.findOne({ email: newUser.email });

    const userObj = userFound.toObject();

    delete userObj.password;
    res.status(200).send({
      user: userObj,
    });
  } catch (err) {
    res.status(400).send({
      message: "Sign up failed, error : " + err.message,
    });
  }
};
