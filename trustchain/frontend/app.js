window.addEventListener('load', async () => {
    // Check if MetaMask is installed
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
        // Initialize web3
        window.web3 = new Web3(window.ethereum);

        // Request account access if needed
        await window.ethereum.enable();
    } else {
        console.error("MetaMask is not installed");
    }

    const contractAddress = '0x11C72FDa91d874b6e718CD64354344d1A11EdB1F';  // Deployed contract address
    
    // Replace with the actual ABI from the build/contracts/ImageModeration.json
    const contractABI = [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "imageUrl",
                    "type": "string"
                },
                {
                    "name": "approve",
                    "type": "bool"
                }
            ],
            "name": "moderateImage",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "imageUrl",
                    "type": "string"
                }
            ],
            "name": "getModerationStatus",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                },
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "moderator",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "imageUrl",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "ImageModerated",
            "type": "event"
        }
    ];

    const contract = new web3.eth.Contract(contractABI, contractAddress);

    // Approve button functionality
    document.getElementById('approveButton').addEventListener('click', async () => {
        const accounts = await web3.eth.getAccounts();
        const imageUrl = document.getElementById("dynamicImage").src;

        contract.methods.moderateImage(imageUrl, true).send({
            from: accounts[0]
        }).then((receipt) => {
            console.log("Transaction successful!", receipt);
        }).catch((err) => {
            console.error("Transaction failed", err);
        });
    });

    // Disapprove button functionality
    document.getElementById('disapproveButton').addEventListener('click', async () => {
        const accounts = await web3.eth.getAccounts();
        const imageUrl = document.getElementById("dynamicImage").src;

        contract.methods.moderateImage(imageUrl, false).send({
            from: accounts[0]
        }).then((receipt) => {
            console.log("Transaction successful!", receipt);
        }).catch((err) => {
            console.error("Transaction failed", err);
        });
    });
});
