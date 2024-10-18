// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ImageModeration {
    
    // Struct to store the moderation details
    struct Moderation {
        address moderator;
        string imageUrl;
        bool approved;  // true = approved, false = disapproved
    }
    
    // Mapping to store the image moderation by their URLs
    mapping(string => Moderation) public moderations;
    
    // Event to notify when an image is moderated
    event ImageModerated(address indexed moderator, string imageUrl, bool approved);

    // Function to approve or disapprove an image
    function moderateImage(string memory imageUrl, bool approve) public {
        // Create a new moderation entry
        moderations[imageUrl] = Moderation(msg.sender, imageUrl, approve);
        
        // Emit an event for logging purposes
        emit ImageModerated(msg.sender, imageUrl, approve);
    }

    // Function to retrieve moderation status of an image
    function getModerationStatus(string memory imageUrl) public view returns (bool, address) {
        Moderation memory moderation = moderations[imageUrl];
        return (moderation.approved, moderation.moderator);
    }
}
