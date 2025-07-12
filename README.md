# Discord.js v14 Base Template

This repository contains a basic template for Discord.js v14.

## 🚀 Getting Started

This template is coded by [muhosekerci](https://github.com/muhosekerci). It can be run on all platforms except iOS.

Do not change the names of the following folders or files:

📁 commands\
📁 events\
📁 node_modules\
📄 config.js\
📄 index.js\
📄 package.json


### 💻 Windows Installation

1. **Node.js Installation**:
   - If Node.js is not installed on your computer, download and install the LTS version from the [Node.js official website](https://nodejs.org/).
   - After installation, open command prompt (Powershell) and check if Node.js is installed successfully by typing `node -v`.

2. **Project Setup**:
   - You can run `start.bat` file to start the template.
   - If you want it to automatically restart when an error occurs, you can use the `restartOnError.bat` file.

### 📱 Termux Installation

1. Download and install Termux app from [Google Play Store](https://play.google.com/store/apps/details?id=com.termux).
2. After opening the app, enter the following commands in order:
    ```
   pkg update && pkg upgrade
   ```
    ```
   pkg install git nodejs
   ```
    ```
   git clone [REPO_URL]
   ```
    ```
   cd [YOUR_FOLDER_NAME]
   ```
    ```
   npm install
   ```
    ```
   node index.js
   ```

### 🐧 Linux Installation

1. **Node.js Installation**:
   - If Node.js is not installed on your system, install it using the appropriate package manager. For example, for Ubuntu or Debian:
     ```
     sudo apt update
     ```
     ```
     sudo apt install nodejs npm
     ```
   - After installation, open terminal and check if Node.js is installed successfully by typing `node -v`.

2. **Project Setup**:
   - Open terminal and enter the following commands in order:
     ```
     git clone [REPO_URL]
     ```
     ```
     cd [YOUR_FOLDER_NAME]
     ```
     ```
     npm install
     ```
     ```
     node index.js
     ```