# Supply chain & data auditing

This repository containts an Ethereum DApp that demonstrates a Supply Chain flow between a Seller and Buyer. The user story is similar to any commonly used supply chain process. A Seller can add items to the inventory system stored in the blockchain. A Buyer can purchase such items from the inventory system. Additionally a Seller can mark an item as Shipped, and similarly a Buyer can mark an item as Received.

The DApp User Interface when running should look like...

![truffle test](images/ftc_product_overview.png)

![truffle test](images/ftc_farm_details.png)

![truffle test](images/ftc_product_details.png)

![truffle test](images/ftc_transaction_history.png)


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Please make sure you've already installed ganache-cli, Truffle and enabled MetaMask extension in your browser.

```
Give examples (to be clarified)
```

### Installing

A step by step series of examples that tell you have to get a development env running

Clone this repository:

```
git clone https://github.com/udacity/nd1309/tree/master/course-5/project-6
```

Change directory to ```project-6``` folder and install all requisite npm packages (as listed in ```package.json```):

```
cd project-6
npm install
```

Launch Ganache:

```
ganache-cli -m "spirit supply whale amount human item harsh scare congress discover talent hamster"
```

Your terminal should look something like this:

![truffle test](images/ganache-cli.png)

In a separate terminal window, Compile smart contracts:

```
truffle compile
```

Your terminal should look something like this:

![truffle test](images/truffle_compile.png)

This will create the smart contract artifacts in folder ```build\contracts```.

Migrate smart contracts to the locally running blockchain, ganache-cli:

```
truffle migrate
```

Your terminal should look something like this:

![truffle test](images/truffle_migrate.png)

Test smart contracts:

```
truffle test
```

All 10 tests should pass.

![truffle test](images/truffle_test.png)

In a separate terminal window, launch the DApp:

```
npm run dev
```

Transaction History
Harvested - 0xf7e825139592533bd739f11cafe7aa9acc56b768b45f940432ab0ad4d538f1ca
Processed - 0xa801195814c5f22b1e857aae2c289f0eb510e381e2c5be8b9d0c561e22459869
Packed - 0x144388d21fa647a8e3ba326999fa5f1787c952bfb55a57da2fa0b68b65b15a59
ForSale - 0xbe5da699c3e2f365271ea17499954f5407c6e1c1739f9173c3a4dbf7131c36dd
AddedDistributor - 0x134a0158ca5cfb0082649ccffef09e089f0c8f92941280915e361aef647d7ea5
Sold - 0x6b05f4c2b0bd0d83305dc8eed9fe3804fafa98ff2b30cb9e7858bc435b75a915
Shipped - 0x49b442e15c800e91cd32fc67f523c42e17486f0ec9fd700f416c51c5f604cf07
AddedRetailer - 0x7a42c73ab9bc638f4b7c5854f0dc5f9746165b67b4d19fd5ee5dbf5798fc52ad
Received - 0xd7e40f00e3cd760697799998f54462b215cd403d636465135902221c55cc36b8
AddedConsumer - 0x1eae9e1c41a78962dcd157cba73181df8ff2080e8773917e1481cd35ab5c8d4c
Purchased - 0xb1dea65bbfc6c2faaaae606aeaacf0caeea95d8fa84509edd0f8d6e73dfda804


## Built With

* [Ethereum](https://www.ethereum.org/) - Ethereum is a decentralized platform that runs smart contracts
* [IPFS](https://ipfs.io/) - IPFS is the Distributed Web | A peer-to-peer hypermedia protocol
to make the web faster, safer, and more open.
* [Truffle Framework](http://truffleframework.com/) - Truffle is the most popular development framework for Ethereum with a mission to make your life a whole lot easier.


## Authors

See also the list of [contributors](https://github.com/your/project/contributors.md) who participated in this project.

## Acknowledgments

* Solidity
* Ganache-cli
* Truffle
* IPFS
