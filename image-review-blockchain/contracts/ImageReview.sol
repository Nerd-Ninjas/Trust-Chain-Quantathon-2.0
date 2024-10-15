// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

contract ImageReview {
    struct Image {
        string ipfsHash;
        address[] reviewers;
        mapping(address => string) reviews; // user address -> review
    }

    Image[] public images;

    // Event for new image
    event NewImage(uint indexed imageId, string ipfsHash);

    // Add image to the blockchain
    function addImage(string memory ipfsHash) public {
        Image storage newImage = images.push();
        newImage.ipfsHash = ipfsHash;
        emit NewImage(images.length - 1, ipfsHash);
    }

    // Review image
    function reviewImage(uint imageId, string memory review) public {
        require(imageId < images.length, "Image does not exist");
        images[imageId].reviewers.push(msg.sender);
        images[imageId].reviews[msg.sender] = review;
    }

    // Get image details
    function getImage(uint imageId) public view returns (string memory, address[] memory) {
        require(imageId < images.length, "Image does not exist");
        return (images[imageId].ipfsHash, images[imageId].reviewers);
    }

    // Get review
    function getReview(uint imageId) public view returns (string memory) {
        require(imageId < images.length, "Image does not exist");
        return images[imageId].reviews[msg.sender];
    }
}
