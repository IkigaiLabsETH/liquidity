import React, { FC } from 'react'
import { URLS } from '../../common/config'
import { Network } from '../../common/types'
import Link from 'next/link'

interface SuccessfulModalProps {
  transactionHash: string
  network: Network
  contract: string
  tokenId: string
}

export const SuccessfulModal: FC<SuccessfulModalProps> = ({ transactionHash, network, contract, tokenId }) => {
  return (
    <div className="p-10">
      <h1>Mint successful</h1>
      <p className="text-gray-800 text-xl">Your NFT has been minted.</p>
      <div>
        <Link href={`/drop/${network}/${contract}/${tokenId}`}>
          <a className="text-yellow text-xl">View your NFT</a>
        </Link>
      </div>
      <div>
        <a
          href={`${URLS[network].explorer}/tx/${transactionHash}`}
          target="_blank"
          className="text-yellow text-xl"
          rel="noreferrer"
        >
          View your transaction
        </a>
      </div>
    </div>
  )
}
