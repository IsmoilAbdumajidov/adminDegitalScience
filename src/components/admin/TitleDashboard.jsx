import React from 'react'

const TitleDashboard = ({ title }) => {
    return (
        <>
            <div className='absolute w-36 h-1 -top-5 left-[50%] -translate-x-[50%] bg-[#0f95ee]'></div>
            <div className='text-bg text-2xl first-letter:uppercase  font-semibold '>{title}</div>
        </>

    )
}

export default TitleDashboard