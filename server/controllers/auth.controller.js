import user from "../models/user.js";
import express from 'express';

export function login(req, res) {
    console.log("Auth Controller : Login");
}

export const signUp = (req, res) => {
    console.log("Hello", req);
    res.send({message: "Success"})
}