import express from 'express';

const router = express.Router();

const { register, login } = require("../controller/userController");

router.post("/register", register);
router.post("/login", login);

export default router;