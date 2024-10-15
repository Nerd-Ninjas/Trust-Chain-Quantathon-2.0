// 1_initial_migration.js
const SocialMediaPost = artifacts.require("SocialMediaPost");

module.exports = function (deployer) {
  deployer.deploy(SocialMediaPost);
};
