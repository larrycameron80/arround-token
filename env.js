module.exports = {
    network: {
        gasAmount: 4000000
    },
    development: {
        name: "Development network account",
        accounts: {
            crowdsaleWallet: "", // testrpc
            communityDevelopmentWallet: "", // testrpc
            bountyWallet: "", // testrpc
            siteAccount: "", // testrpc
        }
    },
    rinkeby: {
        name: "Rinkeby network account",
        accounts: {
            crowdsaleWallet: "",
            communityDevelopmentWallet: "",
            bountyWallet: "",
            siteAccount: "",
        }
    },
    mainnet: {
        name: "Mainnet network account",
        accounts: {
            crowdsaleWallet: "",
            communityDevelopmentWallet: "",
            bountyWallet: "",
            siteAccount: "",
        }
    },
    tests: {
        name: "Development network test accounts",
        accounts: {
            firstBuyerAddress: "",
            secondBuyerAddress: "",
            firstAirdropAddress: "",
            secondAirdropAddress: "",
            thirdAirdropAddress: "",
            fourthAirdropAddress: ""
            
        },
    },
    helpers: {
        error: function(e) {console.log(e);}
    }
}