const HDWalletProvider = require('truffle-hdwallet-provider');
const mnemonic = "";

module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*"
        },
        rinkeby: {
            provider: () => new HDWalletProvider("sound satoshi ketchup virus blur tell surge hazard forget conduct rich tortoise", 
                                                 `https://rinkeby.infura.io/v3/8043e1f812a04cb1965292c732900155`),
            network_id: 4,
            gas: 4500000,
            gasPrice: 10000000000
        },
    }
};