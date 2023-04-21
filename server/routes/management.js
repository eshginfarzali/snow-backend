import express from "express";
import {getAdmins, postAdmins} from "../controllers/management.js";

const router = express.Router();

// GET - admins
router.get("/admins", getAdmins);

// POST - admins
router.post("/admins", postAdmins);

export default router;