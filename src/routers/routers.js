import express from 'express';
import { Router } from 'express';
import requestPickupController from "../controllers/pickupControllers.js";
import { upload } from '../middlewares/imageMiddleware.js';

const router = new Router();
//upload.single("<name>") should be same as name="<name>" in html.
router.post("/request-pickup", upload.array("myImage",5), requestPickupController);

router.get("/home", (req, res) => {
    res.render("app");
})

export { router };