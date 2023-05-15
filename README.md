
# Unstoppable Domains Verified (Solana) Login

This example app provides a a basic implementation on veryifying Unstoppable Login for different chains. While UD is EVM focussed, UD allows users to sign their login using multiple different wallet providers, such as Phantom (Solana). Dapps that exclusivly support Solana wallets for example, can still utilize login with Unstoppable and use this example to verify the UD user logged in with their verified Phantom (Solana) address. This can be extended to other verifiable addresses.

**Prereq**
Rename `.env.example` to `.env` and replace `tobemodified` with your Unstoppable Domains client config. Client configs can be generated following this [guide](https://docs.unstoppabledomains.com/identity/quickstart/retrieve-client-credentials/). Replace `000000000` with your Infura API key.

This guide is based on the Unstoppable Domains (Web3 React Integration Pathway)[https://docs.unstoppabledomains.com/identity/quickstart/other-integration-paths/web3-react/]

### Install 
**NPM**
`npm install`

**Yarn**
`yarn install`

### Running the Script
`yarn start`
`npm start`

## Breakdown

The `App.js` file outlines the basic function needed to verify if a user logged in with their verified SOL address. Once the user has successfully signed their login attempt, it parses the JSON response to console log the `domain name` and to check if the `account.symbol` is `SOL`. On error, the function logs an error message to console. In practice, the error could be useed to reject the login or otherwise prompt the user to sign their login with `Phantom`.

```javascript
async function checkVerified() {
      if (isActive) {
        const authorization = await connector.uauth.authorization() // Get Login attempt JSON
        const account = connector.uauth.getAuthorizationAccount(authorization); // Get Account for login attempt
        const user = await connector.uauth.user(); // Get User
        console.log(user.sub) // Console log the domain name
        // Check if user signed with SOL account
        if (account.symbol !== "SOL") {
          console.error("User logged in without a Verified SOL address. Please retry with Phantom")
        }
      }
    }
```
