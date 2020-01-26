const playerService = require('./player.service');

/**
 * @Return {array} list of players
 * */
const findAll = async (req, res) => {
    try {
        const players = await playerService.fineAll();
        return res.status(200).json(players);
    } catch (e) {
        return res.status(500).json({err: "internal server problem"})
    }
};

/**
 * @Return {number} count players
 * */
const countPlayers = async (req, res) => {
    try {
        const playerNumber = await playerService.playerNumber();
        return res.status(200).json(playerNumber);
    } catch (e) {
        return res.status(500).json({err: "internal server problem"})
    }
};

/**
 * @Param {id} id of player
 * @Return {array} one player
 * */
const findById = async (req, res) => {

    const id = req.params.id;
    if (!id) return res.status(500).json({err: "id of player is required "});

    try {
        const player = await playerService.findById(id);
        if (!player) return res.status(404).json({err: "player not found"});
        return res.status(200).json(player);
    } catch (e) {
        return res.status(500).json({err: "internal server problem"})
    }
};

module.exports = {
    findAll,
    findById,
    countPlayers
};
