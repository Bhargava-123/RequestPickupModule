import mongoose from "mongoose";
import express from "express";
import fs from "fs";
import path from "path";
import { requestModel } from "../models/request.js";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.resolve(path.dirname(__filename),"..");
export default function requestPickupController(req, res){
    const obj = {
        img: {
            data: fs.readFileSync(
                path.join(__dirname + "/uploads/" + req.file.filename)
            ),
            contentType: "image/png",
        },
    };
    const request = new requestModel({
        waste_image : obj.img,
    })
    request.save().then((msg) => console.log(msg)).catch((err) => console.log(err));
    res.send("File Saved");
}

