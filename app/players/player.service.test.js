const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;
const should = chai.should();
const utils = require('../helpers/helpers');
const playerService = require('./player.service');
const listPlayers = require('../../mocks/players');


describe('fineAll', () => {

    let doGetStub;

    beforeEach(() => {
        doGetStub = sinon.stub(utils, 'doGet');
    });

    afterEach(() => {
        doGetStub.restore();
    });

    describe("when list of players exist", function () {

        it('should be a function', () => {
            playerService.fineAll.should.be.an('function');
        });

        it('should return array of players with length 5', async () => {
            doGetStub.returns(Promise.resolve(listPlayers));
            const players = await playerService.fineAll();
            sinon.assert.calledOnce(doGetStub);
            players.should.be.an('array');
            players.length.should.be.equal(5);
            expect(players).to.deep.equal(listPlayers.players)
        });


    })


});

describe('findById', () => {

    let doGetStub;

    beforeEach(() => {
        doGetStub = sinon.stub(utils, 'doGet');
    });

    afterEach(() => {
        doGetStub.restore();
    });

    describe("when a player exist", function () {

        it('should be a function', () => {
            playerService.findById.should.be.an('function');
        });

        it('should return a player', async () => {
            doGetStub.returns(Promise.resolve(listPlayers));
            const player = await playerService.findById(52);
            sinon.assert.calledOnce(doGetStub);
            player.should.be.an('object');
            expect(player).to.deep.equal(listPlayers.players[0])
        });

    })


});
