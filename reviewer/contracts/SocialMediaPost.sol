// SPDX-License-Identifier: Appache
pragma solidity ^0.8.0;

contract SocialMediaPost {
    struct Post {
        uint id;
        string content;
        address owner;
    }

    Post[] public posts;
    uint public postCount;

    function createPost(string memory _content) public {
        postCount++;
        posts.push(Post(postCount, _content, msg.sender));
    }

    function getPost(uint _id) public view returns (Post memory) {
        return posts[_id - 1];
    }
}
