// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SocialMediaPost {
    
    struct Post {
        uint id;
        address creator;
        string content;
        bool reviewed;
        bool flagged;
    }

    Post[] public posts;
    address[] public reviewers;
    mapping(address => bool) public isReviewer;

    event PostSubmitted(uint postId, address indexed creator, string content);
    event PostReviewed(uint postId, address indexed reviewer, bool flagged);

    constructor(address[] memory _reviewers) {
        reviewers = _reviewers;
        for (uint i = 0; i < reviewers.length; i++) {
            isReviewer[reviewers[i]] = true;
        }
    }

    function submitPost(string memory _content) public {
        posts.push(Post(posts.length, msg.sender, _content, false, false));
        emit PostSubmitted(posts.length - 1, msg.sender, _content);
    }

    function reviewPost(uint _postId, bool _flagged) public {
        require(isReviewer[msg.sender], "Only reviewers can review posts");
        Post storage post = posts[_postId];
        require(!post.reviewed, "Post already reviewed");

        post.reviewed = true;
        post.flagged = _flagged;

        emit PostReviewed(_postId, msg.sender, _flagged);
    }

    function getPost(uint _postId) public view returns (Post memory) {
        return posts[_postId];
    }

    function getPostCount() public view returns (uint) {
        return posts.length;
    }
}
