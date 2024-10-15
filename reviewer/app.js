// Import the required modules
import Web3 from 'web3'; // Use import for Web3
import { readFileSync } from 'fs'; // Import readFileSync from fs
import path from 'path'; // Import path for handling file paths

// Create an instance of Web3 with the local Ganache RPC URL
const web3 = new Web3('http://127.0.0.1:7545'); // Ganache's RPC URL

// Read the contract JSON file synchronously
const contractPath = path.resolve('build/contracts/SocialMediaPost.json'); // Create an absolute path
const contractJSON = JSON.parse(readFileSync(contractPath, 'utf-8')); // Read and parse the JSON file
const contractABI = contractJSON.abi; // Extract the ABI

// Check if the contract is deployed on the expected network
const networkId = "5777"; // Replace with your actual network ID if different
const networkInfo = contractJSON.networks[networkId];

if (!networkInfo) {
    console.error(`No contract found for network ID ${networkId}. Check your deployment.`);
    process.exit(1); // Exit the program
}

const contractAddress = networkInfo.address; // Get the address from the network

const contract = new web3.eth.Contract(contractABI, contractAddress);

async function submitPost(content) {
    try {
        const accounts = await web3.eth.getAccounts();
        await contract.methods.submitPost(content).send({ from: accounts[0] });
        console.log('Post submitted');
    } catch (error) {
        console.error('Error submitting post:', error);
    }
}

async function reviewPost(postId, flagged) {
    try {
        const accounts = await web3.eth.getAccounts();
        await contract.methods.reviewPost(postId, flagged).send({ from: accounts[0] });
        console.log('Post reviewed');
    } catch (error) {
        console.error('Error reviewing post:', error);
    }
}


// Example usage:
(async () => {
    await submitPost("This is a sample post.");
    await reviewPost(0, false);
})();
