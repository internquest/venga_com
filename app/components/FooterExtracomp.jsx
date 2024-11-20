'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import Footer from './Footer'
import Faq from './Faq'

const FooterExtracomp = () => {
    const pathname=usePathname()
  return (
    <div className={`${pathname==='/'?'bg-[#70f8c4] bg-[url("https://venga.com/_next/static/media/blue4.e1b234bd.svg")] bg-no-repeat bg-center bg-cover':''} `}>
        {
            pathname==='/'
          &&<Faq/>
        }
      <Footer/>
    </div>
  )
}

export default FooterExtracomp
