require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  paths: {                         // add this
    artifacts: './src/artifacts',  // this is where our compiled contracts will go
  },
  networks: {                      // and this ...
    hardhat: {
      chainId: 1337                // this is needed for MetaMask
    },
    ropsten: {//got from infura.io
      url: "https://ropsten.infura.io/v3/e5b2a0e633424711855e7994fa9240f5",  // Ropsten endpoint
      accounts: [
        "18094b8d0858376ef69945b04c822817732707d2632dbaad868c5d12e5016f55" // private key with ETH, reclytest02 account private key
      ]
    }
  }
};
