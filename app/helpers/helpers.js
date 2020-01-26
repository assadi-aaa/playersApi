const axios = require('axios');

/**
 * do http get
 * @Params {string} url
 * @Return {Promise} fetched data
 * */

function doGet(url) {
    return axios.get(url, {responseType:'json'}).then(res => res.data);
}

module.exports = {
    doGet
};
