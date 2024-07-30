"use client";

import React from 'react'
import Image from 'next/image'
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from 'next/navigation';
import IconButton from "./IconButton"
import { IoCloseOutline } from "react-icons/io5";


const Logo = ({isInDrawer = false, onClickClose = () => {} }) => {

    const {push} = useRouter()
    const onCilckLogo = ()=>{
        push("/"); // Home으로 이동하는 로직
    }

    const onClickMenu = () => {};


  return (
    <section className='flex flex-row items-center gap-3'>
      { isInDrawer ? (
        <IconButton
        onClickIcon={onClickClose}
        icon={<IoCloseOutline size={30}/>}
        />
      ):(
         <IconButton
        icon={<RxHamburgerMenu size={24}
         onClickIcon={onClickMenu}/>}/>
        )}
        <div className='cursor-pointer' onClick={onCilckLogo}>
            <Image alt="logo" src={"/main-logo.svg"} width={100} height={30} />
        </div>
    </section>
  )
}

export default Logo