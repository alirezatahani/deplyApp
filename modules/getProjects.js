const axios = require("axios");


const getProjects = async () => {
    try {
        const response = await axios({
            method: 'get',
            url: "http://git.smart-age.ir/api/v4/projects",
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
module.exports = getProjects;
