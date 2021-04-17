import { ethers } from "hardhat";
import { Contract, ContractFactory, Signer } from "ethers";
import { expect } from "chai";

const testAddress = "0x37508A08F04ab9d3BC660E40789b131e7dd6Cd0C";

describe("Token", function () {
  let accounts: Signer[];
  let contract: Contract;

  beforeEach(async function () {
    accounts = await ethers.getSigners();
    const TokenContract: ContractFactory = await ethers.getContractFactory("MeuToken");
    contract = await TokenContract.deploy();
    await contract.deployed();
  });

  it("should deploy with zero balances", async function () {
    expect(await contract.balanceOf(testAddress)).to.equal(ethers.BigNumber.from("0"));
  });

  it("should mint new tokens", async function () {
    expect(await contract.balanceOf(testAddress)).to.equal(ethers.BigNumber.from("0"));
    await contract.mint(testAddress, ethers.BigNumber.from("42"));
    expect(await contract.balanceOf(testAddress)).to.equal(ethers.BigNumber.from("42"));
  });

  it("should deploy with zero TotalSupply", async function () {
    expect(await contract.totalSupply()).to.equal(ethers.BigNumber.from("0"));
  });
});
