const SocialMediaPost = artifacts.require("SocialMediaPost");

module.exports = function (deployer) {
    const reviewers = ["0xfd2c4c7A4DF966B984870639461E31bDc71f73B0", "0x5c47539113968B42a205E7AAfA05cd019D2b8cde"];  // Replace with reviewer accounts
    deployer.deploy(SocialMediaPost, reviewers);
};
