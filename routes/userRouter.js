import express from "express";
import { getuser, login, logout, register } from "../controllers/userController.js";
import { isAuthorized } from "../middlewares/auth.js";


const router=express.Router();

router.post('/register',register);
router.post('/login',login);
router.get('/logout',isAuthorized,logout);
router.get('/getUser',isAuthorized,getuser)


export default router;