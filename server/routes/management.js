import express from "express";
import {
  getAdmins,
  postAdmins,
  getSuperAdmin,
} from "../controllers/management.js";

const router = express.Router();

// GET - admins
router.get("/admins", getAdmins);

// POST - admins
router.post("/admins", postAdmins);

// GET - superadmin
router.get("/superadmin", getSuperAdmin);

export default router;
