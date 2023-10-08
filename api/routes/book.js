import express from "express";
import { createBook } from "../controllers/book.js";

const router = express.Router();

router.post("/new", createBook)


export default router