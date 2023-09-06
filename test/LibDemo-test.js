const { expect } = require("chai")
const { ethers } = require("hardhat")

describe("LibDemo", () => {
    let owner, demo;

    beforeEach(async () => {
        [owner] = await ethers.getSigners();
    
        const LibDemo = await ethers.getContractFactory("LibDemo", owner);
        demo = await LibDemo.deploy();
        await demo.waitForDeployment();
    });

    it("compares string", async () => {
        let result1 = await demo.runnerStr("cat", "cat");
        expect(result1).to.eq(true);

        let result2 = await demo.runnerStr("cat", "dog");
        expect(result2).to.eq(false);

    });

    it("finds uint in array", async () => {
        let result1 = await demo.runnerArr([1, 2, 3], 2);
        expect(result1).to.eq(true);

        let result2 = await demo.runnerArr([1, 2, 3], 5);
        expect(result2).to.eq(false);
    });
});