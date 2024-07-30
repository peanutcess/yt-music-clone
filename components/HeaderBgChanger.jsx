"use client";
import React, { useEffect } from 'react'
import useUIState from '@/hooks/useUIState'

const HeaderBgChanger = ({imageSrc}) => {

    const {setHeaderImageSrc} = useUIState();

    useEffect(()=>{
        // eslint-disable-next-line react-hooks/exhaustive-deps
        if(imageSrc) setHeaderImageSrc(imageSrc);},[imageSrc])


  return (
    <></>
  )
}

export default HeaderBgChanger