// 이 페이지를 만든 이유는 반응형 ...
import React from 'react'


const PagePadding = ({children}) => {


  return (
    <div className='mx-auto px-[10px] py-2 lg:px-[100px]'>
        {children}
    </div>
  )
}

export default PagePadding