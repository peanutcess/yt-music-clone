"use Client"
import React from 'react'
import { IoMdPlayCircle } from "react-icons/io";

const PlaylistNav = ({playlist}) => {
    const {id, owner, playlistName, songList } = playlist;

    const onClickPlay = () => {
        //TODO play music
    }


  return (

    <li className="mx-3 px-4 h-[56px] flex flex-row justify-between items-center
    hover:bg-neutral-700 hover:cursor-pointer rounded-lg group">
        <div>
            <div className='text-[14px] line-clamp-1 overflow-ellipsis'>{playlistName}</div>
            <div className='text-[12px] text-neutral-500'>{owner}</div>
        </div>
        <div onClick={onClickPlay} className='hidden group-hover:block'>
            <div><IoMdPlayCircle size={30}/></div>
        </div>
    </li>
  );
}

export default PlaylistNav