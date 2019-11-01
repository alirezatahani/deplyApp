const getProjects = require("../modules/getProjects");
const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", async function(req, res, next) {
  const projects = await getProjects();
  res.render("projects", { projects: projects });
});

module.exports = router;
