import {initializeConnector} from '@web3-react/core'
import {MetaMask} from '@web3-react/metamask'
import {WalletConnect} from '@web3-react/walletconnect'
import UAuth from '@uauth/js'
import {UAuthConnector} from '@uauth/web3-react'

UAuthConnector.registerUAuth(UAuth);

const metaMask = initializeConnector((actions) => new MetaMask({ actions }));

const walletConnect = initializeConnector(
  (actions) =>
    new WalletConnect({
      actions,
      options: {
        rpc: {1: `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_ID}`},
        qrcode: true,
      },
    })
)

const uauth = initializeConnector(
  (actions) => new UAuthConnector({
    actions,
    options: {
      // These values can be copied from your dashboard client configuration
      clientID: process.env.REACT_APP_CLIENT_ID,
      redirectUri: process.env.REACT_APP_REDIRECT_URI,
      // Scope must include openid and wallet
      scope: 'openid wallet',

      // Injected/metamask and walletconnect connectors are required
      connectors: {injected: metaMask[0], walletconnect: walletConnect[0]}
    },
  })
)

const connectors = {
  "UAuth": uauth,
  "MetaMask": metaMask,
  "WalletConnect": walletConnect,
}

export default connectors