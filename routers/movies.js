import express from "express";
import movieController from "../controllers/movieController.js";

const router = express.Router();

//INDEX
router.get("/", movieController.index);

//SHOW
router.get("/:id", movieController.show);

//STORE
router.post("/", movieController.store);

//UPDATE
router.put("/:id", movieController.update);

//DESTROY
router.delete("/:id", movieController.destroy);

export default router;