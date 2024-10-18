# Trust Chain - Quantathon 2.0

-------------------------------------------------------------------------------------------------------

## Tagline
Decentralized content moderation for a safer social media experience.

## Problem Statement
In an era dominated by user-generated content, content moderation is critical to ensure compliance with community guidelines and legal standards. However, traditional moderation systems are fraught with challenges such as bias, lack of transparency, scalability issues, and limited user input. Our project addresses these problems through a combination of AI, decentralization, and blockchain technology.

## Proposed Solution
Our solution revolutionizes content moderation by:
- **AI-Based Moderation:** Automatically reviewing and flagging content based on community-defined rules, reducing bias and increasing efficiency.
- **Decentralized Review:** Distributing moderation responsibilities across a network of nodes to minimize central control and bias.
- **Blockchain Transparency:** Recording all moderation actions on an immutable blockchain ledger for full transparency.
- **Community Involvement:** Allowing users to vote on content moderation guidelines, ensuring the rules reflect community values.

## Approach
Our approach incorporates the following innovations:
- **AI-Driven Moderation:** Automated review using advanced AI to reduce human bias and scale effectively.
- **Decentralized Governance:** Community-driven moderation policies that reflect the diverse values of users.
- **Blockchain Transparency:** Immutable, verifiable moderation records for complete transparency.
- **Community Feedback Loops:** Continuous improvement of guidelines through user feedback.

## Technologies Used
- **AI Tech Stack:**
  - React.js for UI development
  - Python for core AI logic
  - Django for backend functionality
  - TensorFlow for AI model development
  - SpaCy/NLTK for natural language processing
  - MongoDB for storing user data and content
- **Blockchain Tech Stack:**
  - Ethereum for storing moderation records and smart contracts
  - Solidity for creating moderation-related smart contracts
  - Web3.js/Ethers.js to connect the frontend to the blockchain
  - MetaMask for user authentication via Ethereum wallets
- **Frontend & Backend Tech Stack:**
  - React.js with Chakra UI for frontend design
  - Node.js and Express.js for backend server functionality
  - JWT-based custom authentication for secure user access
  - WebSocket/REST API for real-time communication and chat features

## Key Features
- **Decentralized Data Management:** Using blockchain for trustless, decentralized data storage.
- **User Authentication:** Secure login and signup functionalities.
- **AI-Based Content Moderation:** Automating content review and classification using machine learning algorithms.
- **Blockchain Transparency:** Immutable record of all moderation decisions for accountability and transparency.
- **Community Involvement:** Voting on moderation policies and guidelines to shape the rules.
- **Real-Time Chat:** Enabling users to communicate instantly via WebSocket/REST API.
- **Dark Mode:** Offering users the option to toggle between light and dark themes for enhanced user experience.

## Workflow
![Workflow Image](./snapshots/Screenshot%202024-10-16%20090127.png)
![Use Case Image](./snapshots/Screenshot%202024-10-16%20090138.png)

## PowerPoint Presentation
View the project presentation [here](./snapshots/Quantathon(Nerd%20ninjas).pdf).

## Challenges Faced
During development, we encountered various challenges such as scalability issues with AI moderation and blockchain integration complexity. We overcame these challenges by refining our machine learning models and streamlining the smart contract deployment process, which improved performance and transparency.

## Team Experience
Working on this project helped us gain practical experience in integrating AI and blockchain technologies. We also enhanced our teamwork and project management skills, learning to collaborate effectively across different technical domains.

## Getting Started

### Prerequisites
To set up and run the project locally, ensure the following are installed:
- **Node.js** (v14 or later)
- **npm** (Node Package Manager)
- **MongoDB** (either local or MongoDB Atlas)

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/Nerd-Ninjas/Trust-Chain-Quantathon-2.0.git
   ```
   Navigate to the project directory:
   ```bash
   cd Trust-Chain-Quantathon-2.0
   ```

2. **Install Dependencies:**
   Install dependencies for both the frontend and backend.

   #### Frontend:
   Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
   Install the required packages:
   ```bash
   npm install
   ```

   #### Backend:
   In another terminal, navigate to the backend directory:
   ```bash
   cd backend
   ```
   Install backend dependencies:
   ```bash
   npm install
   ```

3. **Configuration:**
   Create a `.env` file in the backend directory with the following variables:
   ```bash
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

### Running the Application

#### Frontend:
In the frontend directory, start the development server:
```bash
npm run dev
```
Access the frontend at `http://localhost:3000`.

#### Backend:
In the backend directory, start the backend server:
```bash
node server.js
```
The backend will run at `http://localhost:5000`.

### AI Model Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Nerd-Ninjas/Trust-Chain-Quantathon-2.0.git
   ```
   Navigate to the AI model directory:
   ```bash
   cd Trust-Chain-Quantathon-2.0/ai
   ```

2. **Install Required Dependencies:**
   Make sure Python and Jupyter Notebook are installed. Then, create a virtual environment and install necessary libraries:
   ```bash
   python -m venv env
   source env/bin/activate
   pip install tensorflow keras numpy matplotlib
   ```

3. **Run Jupyter Notebook:**
   Start Jupyter Notebook to open the main image classification model:
   ```bash
   jupyter notebook main.ipynb
   ```

### Blockchain Review Setup

1. **Install Required Dependencies:**
   Navigate to the blockchain project directory:
   ```bash
   cd Trust-Chain-Quantathon-2.0/image-review-blockchain
   npm install
   ```

2. **Set Up Ethereum with Ganache:**
   Launch Ganache and note the RPC server URL (default is `http://127.0.0.1:7545`).

3. **Configure MetaMask:**
   Connect MetaMask to the local Ganache blockchain:
   - **Network Name:** Ganache
   - **New RPC URL:** `http://127.0.0.1:7545`
   - **Chain ID:** 5777

4. **Deploy Smart Contracts:**
   Deploy the smart contracts via Truffle:
   ```bash
   truffle migrate --network development
   ```

5. **Run the Reviewer Application:**
   Navigate to the `reviewer` directory and run:
   ```bash
   npm start
   ```

## Project Structure
```plaintext
Trust-Chain-Quantathon-2.0/
├── frontend/          # React.js frontend code
├── backend/           # Express.js backend code
├── ai/                # AI Model for content classification
├── image-review-blockchain/  # Blockchain review module
├── snapshots/         # Project images and snapshots
└── README.md          # Documentation
```

### API Endpoints
| Method | Endpoint          | Description                        |
|--------|-------------------|------------------------------------|
| POST   | /api/auth/signup   | Register a new user                |
| POST   | /api/auth/login    | Log in an existing user            |
| GET    | /api/user/:id      | Retrieve user details              |
| GET    | /api/chat          | Fetch chat messages                |
| POST   | /api/chat/send     | Send a new chat message            |

## License
This project is licensed under the [Apache 2.0 License](LICENSE).

## Contributors
- [Srihari Prasath A](https://github.com/Srihari-Prasath)
- [Naveen Bharathi B](https://github.com/bnaveenbharathi)
- [Sandhosh G](https://github.com/SANDHOSH02)
- [Pranav S](https://github.com/Pranavshiv)
