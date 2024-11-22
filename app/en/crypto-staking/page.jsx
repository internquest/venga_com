import Cryptostaking from '@/app/components/crypto-staking/Cryptostaking'
import StartGrowing from '@/app/components/crypto-staking/StartGrowing'
import Whyearningwithvenga from '@/app/components/crypto-staking/Whyearningwithvenga'
import React from 'react'


const page = () => {
  return (
    <main className='flex-grow flex-shrink-0 basis-auto relative'>
        <StartGrowing/>
        <div className='max-w-[1440px] w-full my-0 mx-auto py-0 px-5'>
          <Cryptostaking/>
          <Whyearningwithvenga/>
        </div>
    </main>
  )
}

export default page
