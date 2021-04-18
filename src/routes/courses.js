const express = require("express");
const router = express.Router();

const coursesController = require("../app/controllers/CourseController");

router.put("/:id", coursesController.update);
router.get("/:id/edit", coursesController.edit);
router.get("/create", coursesController.create);
router.post("/store", coursesController.store);
router.delete("/:id", coursesController.destroy);
router.get("/:slug", coursesController.show);
module.exports = router;
