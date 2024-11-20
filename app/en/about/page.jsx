import Latestjobs from '@/app/components/about/Latestjobs'
import Letsvenga from '@/app/components/about/Letsvenga'
import OurTeam from '@/app/components/about/OurTeam'
import OurValues from '@/app/components/about/OurValues'
import Regulation from '@/app/components/about/Regulation'
import React from 'react'


const page = () => {
  return (
    <main className='flex-grow flex-shrink-0 basis-auto relative'>
        <div className='max-w-[1440px] w-full my-0 mx-auto py-0 px-5'>
            <Letsvenga/>
            <div id="OurTeam" className='mb-[120px] '></div>
            <div className='px-5 py-0'>
              <OurTeam/>
              <OurValues/>
              <Regulation/>
            </div>
            <Latestjobs/>
        </div>
    </main>
  )
}

export default page
