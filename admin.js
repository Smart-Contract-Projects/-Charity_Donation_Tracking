
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

let provider, signer, contract, primaryAdmin;

document.addEventListener("DOMContentLoaded", async () => {
  if (typeof window.ethereum !== "undefined") {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    signer = provider.getSigner();
    contract = new ethers.Contract(contractAddress, abi, signer);

    // Check user role and show appropriate interface
    await checkUserRole();
  } else {
    alert("MetaMask is not installed. Please install MetaMask to use this platform.");
  }
});

// Function to check user role
async function checkUserRole() {
  try {
    const connectedAddress = await signer.getAddress();
    primaryAdmin = await contract.admin();
    const isAdditionalAdmin = await contract.additionalAdmins(connectedAddress);

    if (connectedAddress.toLowerCase() === primaryAdmin.toLowerCase()) {
      // Show admin interface for the primary admin
      alert("Welcome, Primary Admin!");
      document.getElementById("admin-page").style.display = "block";
      document.getElementById("admin-management-section").style.display = "block"; // Show manage admins section
      await loadAdmins();
      await loadPendingCharities();
      await loadValidatedCharities();
    } else if (isAdditionalAdmin) {
      // Show admin interface for additional admins, but hide the manage admins section
      alert("Welcome, Additional Admin!");
      document.getElementById("admin-page").style.display = "block";
      document.getElementById("admin-management-section").style.display = "none"; // Hide manage admins section
      await loadPendingCharities();
      await loadValidatedCharities();
    } else {
      // Hide admin interface for non-admins
      alert("Access Denied: Admin privileges are required.");
      document.getElementById("admin-page").style.display = "none";
    }
  } catch (error) {
    console.error("Error checking user role:", error);
  }
}

// Load pending charities
async function loadPendingCharities() {
  try {
    const charityCount = await contract.charityCount();
    const pendingCharities = document.getElementById("pending-charities");
    pendingCharities.innerHTML = "";

    for (let i = 1; i <= charityCount; i++) {
      const charity = await contract.charities(i);
      if (!charity.isVerified) {
        const row = `
          <tr>
            <td>${charity.id}</td>
            <td>${charity.name}</td>
            <td>${charity.cause}</td>
            <td>${charity.walletAddress}</td>
            <td>
              <button class="btn btn-success btn-sm" onclick="validateCharity(${charity.id})">Validate</button>
            </td>
          </tr>
        `;
        pendingCharities.innerHTML += row;
      }
    }
  } catch (error) {
    console.error("Error loading pending charities:", error);
  }
}

// Load validated charities
async function loadValidatedCharities() {
  try {
    const charityCount = await contract.charityCount();
    const validatedCharities = document.getElementById("validated-charities");
    validatedCharities.innerHTML = "";

    for (let i = 1; i <= charityCount; i++) {
      const charity = await contract.charities(i);
      if (charity.isVerified) {
        const row = `
          <tr>
            <td>${charity.id}</td>
            <td>${charity.name}</td>
            <td>${charity.cause}</td>
            <td>${charity.walletAddress}</td>
          </tr>
        `;
        validatedCharities.innerHTML += row;
      }
    }
  } catch (error) {
    console.error("Error loading validated charities:", error);
  }
}

// Validate charity
async function validateCharity(charityId) {
  try {
    const tx = await contract.verifyCharity(charityId);
    await tx.wait();

    alert(`Charity ID ${charityId} has been validated.`);
    await loadPendingCharities();
    await loadValidatedCharities();
  } catch (error) {
    console.error("Error validating charity:", error);
    alert("Failed to validate charity. Please try again.");
  }
}

// Load admins
async function loadAdmins() {
  const adminList = document.getElementById("admin-list");
  adminList.innerHTML = "";

  try {
    const connectedAddress = await signer.getAddress();

    // Add primary admin
    primaryAdmin = await contract.admin();
    const primaryAdminRow = `
      <tr>
        <td>1</td>
        <td>${primaryAdmin}</td>
        <td>Primary Admin</td>
        <td>-</td>
      </tr>
    `;
    adminList.innerHTML += primaryAdminRow;

    // Add additional admins
    const addresses = await provider.listAccounts();
    let count = 2;

    for (const address of addresses) {
      const isAdditionalAdmin = await contract.additionalAdmins(address);
      if (isAdditionalAdmin) {
        const removeButton =
          connectedAddress.toLowerCase() === primaryAdmin.toLowerCase()
            ? `<button class="btn btn-danger btn-sm" onclick="removeAdmin('${address}')">Remove</button>`
            : `<button class="btn btn-danger btn-sm" disabled>Remove</button>`;

        const adminRow = `
          <tr>
            <td>${count}</td>
            <td>${address}</td>
            <td>Additional Admin</td>
            <td>${removeButton}</td>
          </tr>
        `;
        adminList.innerHTML += adminRow;
        count++;
      }
    }
  } catch (error) {
    console.error("Error loading admins:", error);
  }
}

// Add new admin
document.getElementById("add-admin-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const newAdminAddress = document.getElementById("new-admin-address").value;

  try {
    const connectedAddress = await signer.getAddress();

    // Only primary admin can add
    if (connectedAddress.toLowerCase() !== primaryAdmin.toLowerCase()) {
      alert("Only the primary admin can add new admins.");
      return;
    }

    const tx = await contract.addAdditionalAdmin(newAdminAddress);
    await tx.wait();

    alert("Admin added successfully!");
    await loadAdmins(); // Reload the admin list
  } catch (error) {
    console.error("Error adding admin:", error);
    alert("Failed to add admin. Please try again.");
  }
});

// Remove admin
async function removeAdmin(adminAddress) {
  try {
    const connectedAddress = await signer.getAddress();

    // Only primary admin can remove
    if (connectedAddress.toLowerCase() !== primaryAdmin.toLowerCase()) {
      alert("Only the primary admin can remove admins.");
      return;
    }

    const tx = await contract.removeAdditionalAdmin(adminAddress);
    await tx.wait();

    alert("Admin removed successfully!");
    await loadAdmins(); // Reload the admin list
  } catch (error) {
    console.error("Error removing admin:", error);
    alert("Failed to remove admin. Please try again.");
  }
}