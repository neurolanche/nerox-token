const { ethers, upgrades } = require("hardhat");

async function main() {
    const NeurolancheToken = await ethers.getContractFactory("NeurolancheToken");

    const proxy = await upgrades.deployProxy(NeurolancheToken, [], {
        initializer: "initialize",
    });

    console.log("NeurolancheToken deployed to:", proxy.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
