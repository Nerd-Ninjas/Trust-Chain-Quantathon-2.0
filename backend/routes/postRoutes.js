import express from "express";
import {
	createPost,
	deletePost,
	getPost
} from "../controllers/postController.js";
import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router();

router.post("/create", protectRoute, createPost);
router.delete("/:id", protectRoute, deletePost);
router.get("/:id", getPost);

export default router;
