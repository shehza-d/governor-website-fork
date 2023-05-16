'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Logo from '../../../public/logo.png'
import ChakraMenu from '../ChakraMenu';
import { FiMenu } from 'react-icons/fi'
import { RxCross1 } from 'react-icons/rx'
function Header() {

    const [open, setOpen] = useState(false)

    return (
        <>
            <div className={`fixed top-0 left-0 w-full h-full bg-main z-40 ${!open && 'hidden'}`}>
                <div className='absolute top-5 right-5 '>
                    <RxCross1 className='text-white' size={25} onClick={() => setOpen(false)} />
                </div>
                <div className='w-[90%] m-auto mt-20 text-base text-white font-normal flex flex-col'>
                    <Link href={'/'} onClick={() => setOpen(false)}>
                        <div className='py-5 border-b border-[#1468a5]'>
                            Home
                        </div>
                    </Link>
                    <Link href={'/apply'} onClick={() => setOpen(false)}>
                        <div className='py-5 border-b border-[#1468a5]'>
                            Apply
                        </div>
                    </Link>
                    <ChakraMenu screen='small' open={open} setOpen={setOpen} />
                </div>
            </div>
            <div className='w-full bg-main sticky top-0 backdrop-blur-3xl z-30'>
                <div className='w-[1300px] xl:w-[90%] lg:w-[95%] m-auto flex justify-between items-center h-20 md:h-16'>
                    <Link href={'/'}><Image src={Logo} alt='logo' width={90} className='mt-20 md:w-[80px]' /></Link>
                    <h1 className='text-2xl font-extrabold text-[#b9d8f3] md:hidden text_shadow'>Tuition Free Education Program on Latest Technologies</h1>

                    <div className='flex gap-10 text-[#FAF9F6] sm:hidden'>
                        <Link href={'/'}>
                            <div className='menu_btns'>
                                Home
                            </div>
                        </Link>

                        <Link href={'/apply'}>
                            <div className='menu_btns'>
                                Apply
                            </div>
                        </Link>
                        <ChakraMenu screen='large' open={open} setOpen={setOpen} />

                    </div>
                    <div className='hidden sm:block'>
                        <FiMenu size={24} className='text-white' onClick={() => setOpen(true)} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;