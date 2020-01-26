const helpers = require('../helpers/helpers');
const baseUrl = "https://latelierssl.blob.core.windows.net/trainingday/TennisStats/headtohead.json";

/**
 * @Return {array} list of players
 */

const fineAll = () => {
    return helpers.doGet(baseUrl).then(data => data.players);
};


/**
 * @Return {array} list of players
 */

const playerNumber = () => {
    return helpers.doGet(baseUrl).then(data => data.players.length);
};


/**
 * @Param {string} id
 * @Return {array} player or empty
 */

const findById = (id) => {
    return helpers.doGet(baseUrl).then(data => {
        const players = data.players.filter(player => player.id == id);
        return players.length ? players[0] : null
    });
};


module.exports = {
    fineAll,
    findById,
    playerNumber
};
