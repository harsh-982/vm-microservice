# VirtualBox VM Microservice Setup

## Overview
This repository provides step-by-step instructions for setting up two VirtualBox VMs (Linux and Debian), configuring network settings, and deploying a simple REST API using Node.js and Express.

## Prerequisites
Ensure you have the following installed:
- VirtualBox ([Download Here](https://www.virtualbox.org/))
- Node.js and npm ([Download Here](https://nodejs.org/))

## Setup Instructions

### Step 1: Clone the Repository
```bash
git clone <your-repo-url>
cd vm-microservice-setup
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Start the REST API Server
```bash
node index.js
```

### Step 4: Test the API
From another VM or system, run:
```bash
curl http://<Linux_VM_IP>:3000/
```
Expected response:
```json
{
  "message": "Welcome to the Simple REST API"
}
```

### Step 5: Keep API Running in Background (Optional)
```bash
npm install -g pm2
pm2 start index.js --name rest-api
pm2 save
```

## REST API Source Code (`index.js`)
```javascript
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Simple REST API' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
```

