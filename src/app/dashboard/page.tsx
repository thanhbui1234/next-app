import React from 'react'
import  Link  from 'next/link'
const page = () => {
  return (
    <>
   <div className='h-[2000px]'>
   <button>Link</button>
    <button><Link href={`../dashboard/demo`}>demo</Link></button>
    <button><Link href={`../dashboard/setting`}>setting</Link></button>

   </div>
    </>
  )
}

export default page