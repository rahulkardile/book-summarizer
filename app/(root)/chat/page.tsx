import React from 'react'

const page = () => {
    return (
        <section className='h-screen bg-white flex'>
            <div className="bg-amber-200 w-[20%]">side nav</div>
            <div className="bg-red-200 w-[60%]">gpt</div>
            <div className="bg-blue-200 w-[20%]">library</div>
        </section>
    )
}

export default page