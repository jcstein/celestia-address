# Celestia Address Viewer Raycast Extension

This Raycast extension allows you to quickly view Celestia addresses on the blockchain explorer. When a Celestia address is in your clipboard, this extension will automatically open it in the Celenium explorer for your selected network.

## Features

- Quick access to view Celestia addresses on Celenium explorer
- Support for multiple networks:
  - ✨ Mainnet (celenium.io)
  - 🧪 Mocha Testnet (mocha.celenium.io)
  - 🧪 Arabica Devnet (arabica.celenium.io)
- Validates Celestia addresses (must start with "celestia1")
- Works directly with clipboard content

## Installation

1. Make sure you have [Raycast](https://www.raycast.com/) installed on your macOS system
2. Clone this repository or download the `celestia_address.js` file
3. Open a terminal and navigate to your Raycast scripts directory:
   ```bash
   cd ~/Library/Application Support/Raycast/Scripts
   ```
4. Copy the `celestia_address.js` file into this directory:
   ```bash
   cp /path/to/celestia_address.js .
   ```
5. Make the script executable:
   ```bash
   chmod +x celestia_address.js
   ```
6. Refresh your Raycast commands or restart Raycast

## Usage

1. Copy a Celestia address to your clipboard
2. Open Raycast
3. Type "Celestia Address Viewer"
4. Select your desired network (Mainnet, Mocha, or Arabica)
5. Hit enter
6. The address will automatically open in the Celenium explorer

## Requirements

- Raycast installed on your macOS system
- Internet connection to access the explorer
- Valid Celestia address in clipboard

## Support

For issues, feature requests, or contributions, please open an issue or pull request in this repository.

Created by [joshcs](https://raycast.com/joshcs)
