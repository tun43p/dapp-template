# Dapp Template

## Table of contents

- [Dapp Template](#dapp-template)
  - [Table of contents](#table-of-contents)
  - [How it works](#how-it-works)
    - [Commands](#commands)
  - [Hardhart informations](#hardhart-informations)
    - [Etherscan verification](#etherscan-verification)
    - [Performance optimizations](#performance-optimizations)
  - [Authors](#authors)
  - [License](#license)

## How it works

### Commands

| Command         | Comment                  |
| --------------- | ------------------------ |
| `yarn compile`  | Compile the contracts    |
| `yarn deploy`   | Deploy the contract      |
| `yarn test`     | Test the app             |
| `yarn coverage` | Coverage the project     |
| `yarn chain`    | Run a local chain        |
| `yarn clean`    | Clean the project        |
| `yarn accounts` | See accounts             |
| `yarn lint`     | Lint the project         |
| `yarn lint:fix` | Lint and fix the project |
| `yarn format`   | Format the project       |

## Hardhart informations

### Etherscan verification

To try out Etherscan verification, you first need to deploy a contract to an Ethereum network that's supported by Etherscan, such as Ropsten.

In this project, copy the .env.example file to a file named .env, and then edit it to fill in the details. Enter your Etherscan API key, your Ropsten node URL (eg from Alchemy), and the private key of the account which will send the deployment transaction. With a valid .env file in place, first deploy your contract:

```shell
npx hardhat run --network ropsten scripts/deploy.ts
```

Then, copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS` in this command:

```shell
npx hardhat verify --network ropsten DEPLOYED_CONTRACT_ADDRESS "Hello, Hardhat!"
```

### Performance optimizations

For faster runs of your tests and scripts, consider skipping ts-node's type checking by setting the environment variable `TS_NODE_TRANSPILE_ONLY` to `1` in hardhat's environment. For more details see [the documentation](https://hardhat.org/guides/typescript.html#performance-optimizations).

## Authors

- tun43p - _Initial work_ - [tun43p](https://github.com/tun43p).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
