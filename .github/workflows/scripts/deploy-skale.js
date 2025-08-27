name: Deploy to SKALE

on:
  push:
    branches:
      - main   # ⚡ Change if you want another branch

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      # 1. Checkout repo
      - name: Checkout repository
        uses: actions/checkout@v3

      # 2. Setup Node
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      # 3. Install dependencies
      - name: Install dependencies
        run: npm install

      # 4. Compile contracts
      - name: Compile contracts
        run: npx hardhat compile

      # 5. Deploy to SKALE
      - name: Deploy contract to SKALE
        env:
          PRIVATE_KEY: ${{ secrets.PRIVATE_KEY }}
          SKALE_RPC_URL: ${{ secrets.SKALE_RPC_URL }}
        run: npx hardhat run scripts/deploy-skale.js --network skale
