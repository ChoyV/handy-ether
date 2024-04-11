// ethersCrypto.js

const { ethers } = require('ethers');

// Generate Ethereum address
function generateAddress() {
    const wallet = ethers.Wallet.createRandom();
    return {
        address: wallet.address,
        privateKey: wallet.privateKey
    };
}

// Sign message with private key
function signMessage(message, privateKey) {
    const wallet = new ethers.Wallet(privateKey);
    const signature = wallet.signMessage(message);
    return signature;
}

// Verify signature
function verifySignature(message, signature, address) {
    const signingAddress = ethers.utils.verifyMessage(message, signature);
    return signingAddress.toLowerCase() === address.toLowerCase();
}

module.exports = {
    generateAddress,
    signMessage,
    verifySignature
};
