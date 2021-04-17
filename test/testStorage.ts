import { ethers } from "hardhat";
import { Contract, ContractFactory, Signer } from "ethers";
import { expect } from "chai";

describe("Storage", function () {
  let accounts: Signer[];

  beforeEach(async function () {
    accounts = await ethers.getSigners();
  });

  it("should retrive the same number stored", async function () {
    const StorageContract: ContractFactory = await ethers.getContractFactory("Storage");
    const contract: Contract = await StorageContract.deploy();
    await contract.deployed();
    expect(await contract.retrieve()).to.equal(ethers.BigNumber.from("0"));
    await contract.store(ethers.BigNumber.from("42"));
    expect(await contract.retrieve()).to.equal(ethers.BigNumber.from("42"));
    await contract.store(ethers.BigNumber.from("99"));
    expect(await contract.retrieve()).to.equal(ethers.BigNumber.from("99"));
  });
});
