const ImageModeration = artifacts.require("ImageModeration");

module.exports = function(deployer) {
  deployer.deploy(ImageModeration);
};
