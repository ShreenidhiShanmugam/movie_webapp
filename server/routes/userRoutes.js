import express from "express";
// importing all controlles
import { register, login} from "../controllers/userControlers.js";
const router = express.Router();

// post method
router.post("/register", register);

// post method
router.post("/login", login);



export default router;