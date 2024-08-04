import React from 'react'
import WalletConnection from './WalletConnection'

const Topbar = () => {
    return (
        <div className='fixed top-0 w-full py-3 px-6 flex justify-between border-b border-gray-200'>
            <span className="text-[24px] font-bold">soltrade</span>
            <WalletConnection />
        </div>
    )
}

export default Topbar