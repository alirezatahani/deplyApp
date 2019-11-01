const axios = require("axios");

const getProject = async projectId => {
  try {
    const response = await axios({
      method: "get",
      url: `http://git.smart-age.ir/api/v4/projects/${projectId}/repository/branches`,
      headers: {
        "PRIVATE-TOKEN": "tvZCb23Ja1QeYs4YC1f1"
      }
    });
    return response.data;
  } catch (error) {
    console.log("error");
    console.log(error);
  }
};
module.exports = getProject;
