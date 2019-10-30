const fetch = require("node-fetch");


const url = "git.smart-age.ir/api/v4/projects/23/repository/branches";
const getData = async url => {
    try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.log(error);
    }
};
getData(url);