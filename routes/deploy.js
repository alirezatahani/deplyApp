const express = require("express");
const path = require("path");
const shell = require("shelljs");
const router = express.Router();

/* GET home page. */
router.get("/:branchName", async function(req, res) {
  const directoryName = path.dirname(__dirname);
  cloneShAddress = directoryName.toString().concat("/services/clone.sh");
  shell.exec("chmod +x " + cloneShAddress);
});

module.exports = router;
