import express from "express";
import { employerGetAllApplications, jobSeekerDeleteApplication, jobSeekerGetAllApplications, postApplication } from "../controllers/applicationController.js";
import {isAuthorized} from '../middlewares/auth.js'

const router=express.Router();

router.get('/jobSeeker/getAll',isAuthorized,jobSeekerGetAllApplications)
router.get('/employer/getAll',isAuthorized,employerGetAllApplications)
router.delete('/delete/:id',isAuthorized,jobSeekerDeleteApplication)
router.post('/post',isAuthorized,postApplication)


export default router;