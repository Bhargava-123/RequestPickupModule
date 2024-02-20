import mongoose from "mongoose";
import express from "express";
import fs from "fs";
import path from "path";
import { requestModel } from "../models/request.js";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.resolve(path.dirname(__filename),"..");
export default function requestPickupController(req, res) {
    console.log(req.files);
    const imageList = req.files.map((data) => {
        return { data: data['buffer'], contentType: "image/png" }
    });
    // const obj = {
    //     img: {
    //         data: req.file['buffer'],
    //         contentType: "image/png",
    //     },
    // };
    const request = new requestModel({
        waste_image : imageList,
    })
    request.save().then(
        () => res.status(200).send({ "msg": "Request Successful" })
    ).catch((err) => res.status(400).send({ "msg": "Request Failed" }));
}

