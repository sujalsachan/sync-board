import express, { Router } from "express";
import { deleteList, getLists } from "../controllers/list.controller.js";

const router = express.Router();

router.get("/:id", getLists);
router.delete("/delete", deleteList);

export default router;
