
const contractAddress = "0xae2AC0B1c4AbCDc4432C5d4BEC0A1321c947f0F1"; // Replace with deployed address
const abi =   [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "newAdmin",
        "type": "address"
      }
    ],
    "name": "AdditionalAdminAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "removedAdmin",
        "type": "address"
      }
    ],
    "name": "AdditionalAdminRemoved",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "oldAdmin",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "newAdmin",
        "type": "address"
      }
    ],
    "name": "AdminRoleTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "cause",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "walletAddress",
        "type": "address"
      }
    ],
    "name": "CharityRegistered",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "name",
        "type": "string"
      }
    ],
    "name": "CharityVerified",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "donor",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "charityId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "adminFee",
        "type": "uint256"
      }
    ],
    "name": "DonationMade",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "walletAddress",
        "type": "address"
      }
    ],
    "name": "DonorRegistered",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "charityId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "walletAddress",
        "type": "address"
      }
    ],
    "name": "Withdrawal",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newAdmin",
        "type": "address"
      }
    ],
    "name": "addAdditionalAdmin",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "additionalAdmins",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "admin",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "adminProfit",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "charities",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "description",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "bankAccount",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "bankName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "cause",
        "type": "string"
      },
      {
        "internalType": "address payable",
        "name": "walletAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "totalDonations",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isVerified",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "charityCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_charityId",
        "type": "uint256"
      }
    ],
    "name": "donate",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "donationCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "donations",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "donor",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "charityId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "donationsByCharity",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "donationsByDonor",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "donorCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "donors",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "walletAddress",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAdminProfit",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_donationId",
        "type": "uint256"
      }
    ],
    "name": "getDonationDetails",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "donor",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "charityId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "timestamp",
            "type": "uint256"
          }
        ],
        "internalType": "struct CharityPlatform.Donation",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_charityId",
        "type": "uint256"
      }
    ],
    "name": "getDonationsByCharity",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_donor",
        "type": "address"
      }
    ],
    "name": "getDonationsByDonor",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_description",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_bankAccount",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_bankName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_cause",
        "type": "string"
      }
    ],
    "name": "registerCharity",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      }
    ],
    "name": "registerDonor",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "adminAddress",
        "type": "address"
      }
    ],
    "name": "removeAdditionalAdmin",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newAdmin",
        "type": "address"
      }
    ],
    "name": "transferAdminRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_charityId",
        "type": "uint256"
      }
    ],
    "name": "verifyCharity",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_charityId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "withdrawFunds",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];
 

let provider, signer, contract;

// Initialize MetaMask Provider and Contract
async function initContract() {
  if (typeof window.ethereum !== "undefined") {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    signer = provider.getSigner();
    contract = new ethers.Contract(contractAddress, abi, signer);
  } else {
    alert("MetaMask is not installed. Please install MetaMask to use this platform.");
    throw new Error("MetaMask not installed");
  }
}

// Redirect to Admin Interface if Admin
async function redirectToAdminInterface() {
  try {
    const adminAddress = await contract.admin();
    const walletAddress = await signer.getAddress();
    const isAdditionalAdmin = await contract.additionalAdmins(walletAddress);

    if (
      walletAddress.toLowerCase() === adminAddress.toLowerCase() ||
      isAdditionalAdmin
    ) {
      // Redirect to the admin interface
      window.location.href = "./admin.html"; // Ensure this path is correct
    } else {
      alert("Access Denied: Admin privileges are required.");
    }
  } catch (error) {
    console.error("Error checking admin privileges:", error);
  }
}

// Display Role Selection for Non-Admin Users
function displayRoleSelection() {
  const roleSelection = document.getElementById("role-selection");
  roleSelection.classList.remove("d-none"); // Show the role selection section
}

// Handle Role Selection
function handleRoleSelection(role) {
  if (role === "donor") {
    window.location.href = "./donor.html"; // Redirect to the donor interface
  } else if (role === "charity") {
    window.location.href = "./charity.html"; // Redirect to the charity interface
  }
}

// Display Transaction History on Main Page
async function fetchTransactions() {
  const transactionTableBody = document.getElementById("transaction-table-body");
  transactionTableBody.innerHTML = ""; // Clear existing rows

  try {
    const donationCount = await contract.donationCount();

    for (let i = 1; i <= donationCount; i++) {
      const donation = await contract.donations(i);
      const charity = await contract.charities(donation.charityId);

      if (charity.isVerified) {
        const row = `
          <tr>
            <td>${donation.donor}</td>
            <td>${charity.name}</td>
            <td>${charity.cause}</td>
            <td>${ethers.utils.formatEther(donation.amount)} ETH</td>
            <td>${ethers.utils.formatEther((donation.amount * 10) / 100)} ETH</td>
            <td>${new Date(donation.timestamp * 1000).toLocaleString()}</td>
          </tr>
        `;
        transactionTableBody.innerHTML += row;
      }
    }
  } catch (error) {
    console.error("Error fetching transactions:", error);
    alert("Failed to fetch transactions. Please try again.");
  }
}

// Load Dashboard Data (Transactions and Role Check)
async function loadDashboard() {
  try {
    await initContract();
    await fetchTransactions();

    const adminAddress = await contract.admin();
    const walletAddress = await signer.getAddress();
    const isAdditionalAdmin = await contract.additionalAdmins(walletAddress);

    document.getElementById("wallet-address").innerText = `Connected: ${walletAddress}`;

    if (
      walletAddress.toLowerCase() === adminAddress.toLowerCase() ||
      isAdditionalAdmin
    ) {
      alert("Welcome, Admin!");
      await redirectToAdminInterface(); // Redirect admin to their interface
    } else {
      displayRoleSelection(); // Show role selection for non-admin users
    }
  } catch (error) {
    console.error("Error loading dashboard:", error);
  }
}

// Connect Wallet and Load Dashboard
document.getElementById("connect-wallet").addEventListener("click", async () => {
  try {
    if (!provider) await initContract(); // Ensure contract is initialized
    await provider.send("eth_requestAccounts", []); // Request wallet connection
    await loadDashboard();
  } catch (error) {
    console.error("Error connecting wallet:", error);
    alert("Failed to connect wallet.");
  }
});

// Load transactions on page load (for read-only mode)
document.addEventListener("DOMContentLoaded", async () => {
  try {
    provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    contract = new ethers.Contract(contractAddress, abi, provider); // Read-only contract
    await fetchTransactions(); // Display transactions
  } catch (error) {
    console.error("Error initializing read-only contract:", error);
  }
});
