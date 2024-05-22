const { expect } = require("chai");
const { ethers } = require("hardhat");

// Start test block
describe('MySimpleToken', function () {

  before(async function () {
    this.MySimpleToken = await ethers.getContractFactory('MyVideoCardNFT');
  });

  beforeEach(async function () {
    this.mySimpleToken = await this.MySimpleToken.deploy();
    await this.mySimpleToken.waitForDeployment();
    
    const signers = await ethers.getSigners();

    this.ownerAddress = signers[0].address;
    this.recipientAddress = signers[1].address;

    this.signerContract = this.mySimpleToken.connect(signers[1]);
  });

  // Test cases
  it('Test case 1 to create a token with a name', async function () {
    expect(await this.mySimpleToken.name()).to.exist;
  });
});