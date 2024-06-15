import type { MessageProps } from '@/interfaces/web3'
// import { authLogin } from '@/service/authLogin'

// import { ethers } from 'ethers'
// import { SiweMessage } from 'siwe'
const getMessageNonce = ({ address, chainId, nonce }: MessageProps) => {
    // const message = new SiweMessage({
    //     domain: window.location.host,
    //     uri: window.location.origin,
    //     address: address,
    //     statement: 'I am signing my one-time nonce:',
    //     version: '1',
    //     chainId: Number(chainId),
    //     nonce: nonce,
    // })
    // return { msgData: message, message: message.prepareMessage() }
}



// export const onSignMessage = async ({ dataSiwe, walletProvider }: { walletProvider: ethers.providers.ExternalProvider, dataSiwe: MessageProps }) => {
// const provider = new ethers.providers.Web3Provider(walletProvider)
// const signer = provider.getSigner()
// const { message, msgData } = getMessageNonce(dataSiwe)
// const signature = await signer?.signMessage(message)
// return await authLogin({ message: msgData, signature })
// }
