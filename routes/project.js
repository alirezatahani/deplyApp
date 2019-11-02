const getProject = require("../modules/getRepos");
const deployService = require("../services/deploy");
const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/:projectName/:id", async function(req, res) {
  const project = await getProject(req.params.id);
  res.render("project", { project: project, deploy: deployService });
});

module.exports = router;
