import { ethers } from "@nomiclabs/buidler";
import { Bech32DelegateFactory } from '../typechain/Bech32DelegateFactory'

async function main() {
  let signers = await ethers.signers();
  const factory = new Bech32DelegateFactory(signers[0]);
  const contract = await factory.deploy();
  await contract.deployed();
  console.log(`Contract address: ${contract.address}`);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });