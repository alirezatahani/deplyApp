const express = require("express");
const find = require('find');
const fs = require('fs');
const path = require("path");
const router = express.Router();
const commander = require("../utils/commander");

/* GET home page. */
router.get("/:branchName", async function(req, res) {
  const splitedUrl = req.baseUrl.split("/");
  const directoryName = path.dirname(__dirname);

  await commander(`mkdir project; cd project && git clone --single-branch --branch ${req.params.branchName} git@git.smart-age.ir:administrator/${splitedUrl[2]}.git`);

  cloneShAddress = directoryName.toString().concat(`/project/${splitedUrl[2]}`);

  find.file(/deploy.json$/, cloneShAddress, function (files) {
    fs.readFile(files[0], 'utf8', function(err, contents) {
      const parsedDeployJson = (JSON.parse(contents));
      let commands = `cd project && cd ${splitedUrl[2]}`;
      Object.keys(parsedDeployJson).map(function (content) {
        parsedDeployJson[content].map(async function (cmd) {
          commands = commands.concat(" && ", cmd);
        });
      });
      commander(commands);
    });
  });
});

module.exports = router;
