import Image from 'next/image'
import React from 'react'
import { MagnifyingGlassIcon, GlobeAltIcon, Bars3Icon, UserCircleIcon } from '@heroicons/react/24/solid'
function Header() {
    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
            {/* Left */}
            <div className='relative flex items-center h-10 cursor-pointer my-auto '>
                <Image src='https://links.papareact.com/qd3'
                    layout='fill' // use max space of the container
                    objectFit='contain' // sets how Image should be resized to fit container
                    objectPosition='left'
                />
            </div>

            {/* Middle - Search bar */}
            <div className='flex items-center border-2 rounded-full py-2 md:shadow-sm'>
                <input
                    type="text"
                    placeholder='Start your search here!'
                    className='pl-5 bg-transparent outline-none text-sm flex-grow text-gray-600 placeholder-gray-400' />
                <MagnifyingGlassIcon
                    className='hidden md:inline-flex h-8 bg-red-400 rounded-full text-white p-2 cursor-pointer mx-auto md:mx-2' />
            </div>

            {/* Right */}
            <div className='flex space-x-4 items-center justify-end text-gray-500'>
                <p className='hidden md:inline cursor-pointer'>Become a host!</p>
                <GlobeAltIcon className='h-6' />

                <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
                    <Bars3Icon className='h-6' />
                    <UserCircleIcon className='h-6' />
                </div>
            </div>
        </header>
    )
}

export default Header
