const getProjects = require("../services/getProjects");
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/',async function(req, res, next) {
  const projects = await getProjects();
  console.log(projects, "projects");
  res.render('index', { projects: projects });
});

module.exports = router;
