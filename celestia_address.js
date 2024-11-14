#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Celestia Address Viewer
// @raycast.mode compact

// Optional parameters:
// @raycast.icon 🔍

// Documentation:
// @raycast.description View Celestia addresses on the blockchain explorer
// @raycast.author joshcs
// @raycast.authorURL https://raycast.com/joshcs

// Commands
// @raycast.argument1 { "type": "dropdown", "placeholder": "Network", "required": true, "default": "mainnet", "data": [{"title": "✨ Mainnet", "value": "mainnet"}, {"title": "🧪 Mocha", "value": "mocha"}, {"title": "🧪 Arabica", "value": "arabica"}] }

const { execSync } = require("child_process");

function getClipboardContent() {
  try {
    return execSync("pbpaste").toString().trim();
  } catch (error) {
    console.error("Error reading clipboard:", error);
    process.exit(1);
  }
}

function isValidCelestiaAddress(address) {
  return address.startsWith("celestia1");
}

function getExplorerUrl(address, network = "mainnet") {
  const baseUrls = {
    mainnet: "https://celenium.io",
    mocha: "https://mocha.celenium.io",
    arabica: "https://arabica.celenium.io",
  };

  const baseUrl = baseUrls[network] || baseUrls.mainnet;
  return `${baseUrl}/address/${encodeURIComponent(address)}`;
}

// Get the selected network from Raycast argument
const network = process.argv[2] || "mainnet";

// Get the clipboard content
const clipboardContent = getClipboardContent();

if (isValidCelestiaAddress(clipboardContent)) {
  const explorerUrl = getExplorerUrl(clipboardContent, network);

  // Open the URL in the default browser
  try {
    execSync(`open "${explorerUrl}"`);
  } catch (error) {
    console.error(`Error opening URL: ${error}`);
    process.exit(1);
  }
} else {
  console.log("Invalid Celestia address in clipboard");
  process.exit(1);
}
