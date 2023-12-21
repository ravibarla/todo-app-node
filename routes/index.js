import express from "express";
import {
  add,
  edit,
  get,
  getById,
  remove,
  createTodo,
  editTodo,
  toggleStatus,
} from "../controller/index.js";

export const router = express.Router();

router.get("/", get);
router.get("/add", createTodo);
router.get("/edit/:id", editTodo);
// router.get("/:id", getById);
router.post("/add", add);
router.post("/edit/:id", edit);
router.post("/remove/:id", remove);
router.post("/toggle/:id", toggleStatus);
