var ARROUNDtoken = artifacts.require("./ARROUNDtoken.sol");
var env = require("../env.js");

module.exports = function(deployer) {
    var ndf, rf, tf, token;
    deployer.then(function(instance){
        return ARROUNDtoken.deployed();
    }).then(function(instance){
        token = instance;
    }).catch(env.helpers.error);
};
