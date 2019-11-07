# Udacity Project 6 Supply Chain

## Contract Address
>
    0x3fDDE1f783619A623634F7636d4b285232A830DD 
>

## Contract Transactions
<https://rinkeby.etherscan.io/address/0x3fDDE1f783619A623634F7636d4b285232A830DD#events>

Transaction History
Harvested - 0x42976d4b0d9a03d7917c860eec1f2b55c4cf0438198cdc3ab809ac1a395cdd94
Processed - 0x3e66187fb21396d520519e7a59e8ed16725bff616b1413a5c2650681479516c7
Packed - 0x86343eeb81853d3889183e8623447b571ebc364cf522103d29d55bb9fc2dc261
ForSale - 0x4741414581d5a231d2d81e90b9491aeafa024e49669705eea5a3afea4275b0f3
AddedDistributor - 0x922931a6f2799887e4e19f3f279aa81dc02c803234d313ffdd4471b0bc056520
Sold - 0xf5046f2349eff91b822a8da987da8a2e6928732c59612508f7eedbebf54418ad
Shipped - 0xa7929efc1abb29b23f1a10ac3ae83a5a4a9daa7bb697199fd86c6f5d813099af
AddedRetailer - 0x1123d61375b3dc5e8a4ccd1345a144627124f2831b692c4a3b2e890d2aba94c4
Received - 0xb511d084e26c1ec6747a1e03d3b08d883201fbf9751cdf6ed44dffc1810b75d1
AddedConsumer - 0x8811e42a662b9e9ccffbbff45e8e34c11ff6f591d463fef8647f2c9c7eb4b534

## UML
### Activity Diagram
![Activity Diagram](images/activity-diagram.png)

### Sequence Diagram
![Sequence Diagram](images/sequence-diagram.png)

### State Diagram
![State Diagram](images/state-diagram.png)

### Class Diagram (Data Model)
![Class Diagram](images/class-diagram.png)

## Libraries
Roles.sol has a Roles library. The Roles library will be used by different access control contracts for easy add and remove players in the supply chain. 

## IPFS
IPFS is not used in this project

## Notes
Remember only Farmer can call harvestItem, processItem, packItem, add Item. Only Distributor can call buyItem and shipItem. Only Retailer can call receiveItem. Only Consumer can call purchaseItem. So before calling each function, please go to that specific account in metamask and click add role button to add that account as a role. For example, click "Add as Farmer" button to add that metamask account as a farmer, before calling those farmer only functions.

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
git clone https://github.com/zhangylcloud/UdacitySupplyChain.git
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
