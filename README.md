# Meme Token Generation and Trading Platform
- https://neo-x-pump.vercel.app/
## Project Overview

This sophisticated decentralized application (dApp) represents a cutting-edge platform for the creation, trading, and management of meme-inspired cryptocurrency tokens. Leveraging the robust capabilities of blockchain technology, specifically the `AIA ecosystem` which is EVM compataible , this project offers a seamless interface for users to engage with the burgeoning world of digital assets in a secure, transparent, and user-friendly manner.

## Project Setup

To set up the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/aryandharwa/AIA-Pump
   ```
2. **Navigate into the project directory:**
    ```bash
        cd AIA-Pump
   ```
3. **Move to the frontend directory:**
    ```bash
    cd frontend
    ```

4. **Install project dependencies:**
    ```bash
    yarn install
    ```
5. **Update environment variables:**
    - change the environments in the `.env.example`
    
6. **Start the development server:**
    ```bash
    yarn dev
    ```
This will start the server at` http://localhost:3000.`


## Project structure through flowchart
![alt text](flow.jpg)


## Core Components

### 1. Smart Contract Infrastructure

At the heart of this dApp lies a meticulously crafted smart contract ecosystem, primarily centered around the `TokenFactoryv2` contract. This contract serves as the foundational pillar for token creation and management, embodying the principles of decentralization and immutability inherent to blockchain technology.

#### Key Functions:

- **calculateCost(uint256 currentSupply, uint256 tokensToBuy)**  
    The cost is calculated using the calculateCost function, which takes into account the current supply and the number of tokens to be purchased. This function uses a formula that includes a gradual price increase factor (K).


- **createMemeToken(string memory name,string memory symbol,string memory imageUrl,string memory description)**  
  This function facilitates the instantiation of new token contracts, allowing users to mint their own unique digital assets. It encapsulates the token creation process, ensuring each new token adheres to predefined standards and is properly registered within the ecosystem.

  *Funding Raised:*
    The amount of ETH sent by the buyer is added to the fundingRaised variable of the memeToken struct, which keeps track of how much funding has been raised for that specific token.
  


- **buyMemeToken(address memeTokenAddress, uint256 tokenQty)**  
  Enabling the acquisition of tokens, this function manages the intricate process of token purchases. It incorporates sophisticated checks to ensure the availability of tokens, calculates the required payment based on a dynamic pricing model, and executes the transfer of tokens to the buyer.

- **sellMemeToken(address memeTokenAddress, uint256 tokenQty)**  

    The sellMemeToken function allows users to sell their tokens back to the contract. It first checks if the token is listed and if the seller has enough tokens to sell.
    Refund Calculation:
    The function calculates the ETH refund based on the number of tokens being sold using the calculateRefund function. This function ensures that the refund amount is calculated correctly based on the current supply and the number of tokens being sold.


### 2. Frontend Application

The user interface of this dApp is crafted using cutting-edge web technologies, primarily React and TypeScript, ensuring a robust, type-safe, and responsive user experience.

#### Key Components:

- **TokenDetail**  
  This component serves as the central hub for displaying comprehensive information about individual tokens. It dynamically fetches and renders token data, including market statistics, trading volumes, and historical price data.

- **TokenTrade**  
  Facilitating the core functionality of token trading, this component provides an intuitive interface for users to execute buy and sell orders. It integrates seamlessly with the underlying smart contract functions to process transactions.

- **BuyTabContent and SellTabContent**  
  These specialized components handle the intricacies of buy and sell operations respectively. They incorporate real-time price calculations, transaction confirmation flows, and error handling to ensure smooth trading experiences.

- **Chart**  
  Utilizing advanced data visualization techniques, this component renders interactive price charts, offering users valuable insights into token performance and market trends.

### 3. State Management and Blockchain Interaction

The application employs sophisticated state management techniques and blockchain interaction libraries to ensure real-time data synchronization and seamless transaction processing.

#### Key Features:

- **React Query Integration**  
  Leveraging the power of React Query, the application implements efficient data fetching, caching, and state management strategies, ensuring optimal performance and responsiveness.

- **Wagmi Library Utilization**  
  The integration of the Wagmi library facilitates seamless interaction with Ethereum-based blockchains, handling wallet connections, contract interactions, and transaction management with elegance and efficiency.

### 4. User Interface Enhancements

The project incorporates a suite of custom UI components and dialogs to elevate the user experience:

- **CreateTokenDialog**  
  This component offers a comprehensive interface for token creation, guiding users through the process with intuitive form controls and real-time validation.

- **HowItWorksModal**  
  Providing an informative overview of the platform's functionality, this modal component ensures users are well-equipped to navigate the complexities of token creation and trading.

## Technical Sophistication

### Smart Contract Architecture

The smart contract infrastructure is designed with a focus on security, efficiency, and scalability. Key features include:

- **Bonding Curve Implementation**  
  The token pricing mechanism utilizes an advanced bonding curve algorithm, ensuring a fair and predictable token valuation model that scales with market demand.

- **Gas Optimization**  
  Meticulous attention has been paid to gas optimization techniques, ensuring cost-effective contract interactions even in high-congestion network conditions.

### Frontend Architecture

The frontend application exemplifies modern web development practices:

- **Component Modularity**  
  Adhering to the principles of component-based architecture, the application is structured into highly reusable and maintainable modules.

- **Responsive Design**  
  Utilizing advanced CSS techniques and responsive design principles, the application ensures a seamless user experience across a diverse range of devices and screen sizes.

- **Performance Optimization**  
  Implementing code-splitting, lazy loading, and memoization techniques, the application achieves optimal loading times and runtime performance.

### Anti-Rug Pull Mechanisms

One of the most significant features of this platform is its robust anti-rug pull mechanisms, making it the first truly unruggable meme token launchpad on the Neo ecosystem. Here's why:

- **Smart Contract-Controlled Liquidity**
The platform's smart contracts, particularly the `TokenFactoryv2`, manage the liquidity pool for each token. This prevents creators from arbitrarily removing liquidity, a common method used in rug pulls.

- **Bonding Curve Implementation**
The use of a bonding curve for token pricing ensures a fair and predictable token valuation model. This transparency makes it difficult for malicious actors to manipulate token prices for personal gain.

- **Automated Buy and Sell Functions**
The `buyMemeToken` and `sellMemeToken` functions are implemented directly in the smart contract, ensuring that all trades follow predefined rules. This prevents creators from blocking sell orders, another common rug pull tactic.

- **Transparent Funding Tracking**
The `fundingRaised` variable in the `memeToken` struct keeps track of how much funding has been raised for each token. This transparency allows users to monitor the financial health of each project.

- **Decentralized Control**
Once deployed, the token contracts operate independently of their creators, adhering to the rules set by the `TokenFactoryv2` contract. This decentralization prevents any single entity from having undue control over the token's economy.

- **Gradual Price Increase**
The `calculateCost` function implements a gradual price increase factor, preventing sudden price spikes that could be exploited by bad actors.

---

By implementing these features, the platform ensures that token creators cannot arbitrarily manipulate token supplies, remove liquidity, or block sell orders—common techniques used in rug pulls. This creates a safer environment for users to create, buy, and trade meme tokens.

The meticulous attention to detail, from the implementation of sophisticated pricing algorithms to the crafting of an engaging user experience, demonstrates a commitment to excellence that positions this platform at the forefront of the rapidly evolving digital asset landscape. By prioritizing user safety and transparency, this platform not only facilitates the creation and trading of meme tokens but also sets a new standard for trust and security in the decentralized finance space.
