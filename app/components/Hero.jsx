'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { useMotionValueEvent, useScroll, motion } from "motion/react"



const Hero = () => {
    const [scrolval, setScrlval] = useState(0)
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    })
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        //     console.log(latest)
        setScrlval(latest)
    })
    return (
        <section ref={ref} className="m-0 px-[20px] py-0 box-border mb-[120px] h-[300vh] relative">
            <div className="m-0 p-0 box-border h-screen sticky top-0 left-0 flex items-center">
                <div className="m-0 p-0 box-border relative w-full t90:min-h-[auto] mt-[80px] flex flex-col">


                    <h1 className={` ${scrolval >= .25 ? 't90:mb-[20px]' : ''} t14:text-[120px] m-0 p-0 box-border font-[LabilGrotesk,_sans-serif] font-extrabold leading-[85%] tracking-[-0.02em] text-[rgb(17,_26,_41)] uppercase t14:min-h-[350px] mb-[40px] relative t14:max-w-[800px] opacity-100 transform-none`}>
                        <motion.p initial={{ y: '40px', opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .3 }} className={` ${scrolval > .25 ? 'hidden' : ''} m-0 p-0 box-border`}>Get in
                            <br className="m-0 p-0 box-border hidden"></br> on the future of finance
                        </motion.p>

                        {
                            scrolval >= .25 &&
                            <motion.p initial={{ y: '40px', opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .3 }} className="m-0 p-0 box-border">Buy
                            </motion.p>
                        }
                        {
                            scrolval >= .5 &&
                            <motion.p initial={{ y: '40px', opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .3 }} className="m-0 p-0 box-border">sell
                            </motion.p>
                        }
                        {

                            scrolval >= .75 &&
                            <motion.p initial={{ y: '40px', opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .3 }} className="m-0 p-0 box-border">swap
                            </motion.p>
                        }

                    </h1>


                    <div className="m-0 p-0 box-border font-[LabilGrotesk,_sans-serif] font-medium text-[24px] leading-[130%] tracking-[0.01em] text-[rgb(43,_55,_74)] max-w-[632px] min-h-[94px] flex items-end mb-[40px] relative">
                        {
                            scrolval < .25 &&
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .2 }} className="m-0 p-0 box-border opacity-100">Discover innovative blockchain technologies, invest in crypto, and effortlessly navigate the world of Web3.</motion.p>
                        }
                        {
                            scrolval >= .25 && scrolval < .5 &&
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .2 }} className="m-0 p-0 box-border opacity-100">Find the best exchange rate and lowest fees to buy Bitcoin, Ethereum, and many more cryptocurrencies. Buy smarter with Venga.</motion.p>
                        }
                        {
                            scrolval >= .5 && scrolval < .75 &&
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .2 }} className="m-0 p-0 box-border opacity-100">Sell your crypto for Euros and instantly withdraw your funds to your Visa, Mastercard, or bank account.</motion.p>
                        }
                        {
                            scrolval >= .75 &&
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .2 }} className="m-0 p-0 box-border opacity-100">Quickly and seamlessly swap any crypto to expand your digital asset portfolio while choosing the best exchange rate and lowest fees.</motion.p>
                        }
                    </div>
                    <div className=" absolute z-[1] top-[118px] w-0 h-0 t14:left-[calc(50%+105px)]">
                        {/* <Image alt="Bitcoin" width={180} height={180} src="https://venga.com/_next/static/media/bitcoin.6b6ba954.webp" className="  absolute top-[270px] */}
                        {/* left-[calc(50%-157px)] z-[2] w-[180px] h-[180px]" /> */}
                        <motion.img initial={{ y: '-2000px' }} animate={{ y: 0 }} transition={{ duration: 1, type: 'spring' }} alt="Bitcoin" loading="lazy" width={180} height={180} decoding="async" data-nimg="1" src="/bitcoin.6b6ba954.webp" className="border-none m-0 p-0 box-border absolute top-[270px] left-[calc(50%-157px)] max-w-none z-[2] w-[180px] h-[180px] text-transparent transform-none"></motion.img>
                        <motion.img style={{ visibility: scrolval >= .25 && 'hidden' }} initial={{ y: '2000px' }} animate={{ y: 0 }} preload transition={{ duration: '2s', type: 'spring' }} alt="Venga app dashboard" loading="lazy" width="320" height="670" decoding="async" data-nimg="1" src="/michael-phone.webp" className="border-none m-0 p-0 box-border max-w-none  absolute w-[320px] h-[670px] z-[1]  top-0 left-0 rounded-[55px] [box-shadow:rgba(0,_0,_0,_0.01)_0px_1.06px_2.51px_0px,_rgba(0,_0,_0,_0.02)_0px_4.66px_5.2px_0px,_rgba(0,_0,_0,_0.024)_0px_11.43px_10.37px_0px,_rgba(0,_0,_0,_0.03)_0px_22.01px_20.33px_0px,_rgba(0,_0,_0,_0.04)_0px_37.04px_37.38px_0px,_rgba(0,_0,_0,_0.05)_0px_57.15px_63.82px_0px] text-transparent opacity-100 transform-none"></motion.img>
                        <div style={{ transform: scrolval >= .25 && 'translateY(-80px)' }} className="m-0 p-0 box-border relative z-[1] transform-none">
                            <img alt="Venga app buy" loading="lazy" width="320" height="670" decoding="async" data-nimg="1" src="/phone2.d63a1c99.webp" className={`border-none m-0 p-0 box-border absolute w-[320px] h-[670px] top-0 left-0 rounded-[55px] [box-shadow:rgba(0,_0,_0,_0.01)_0px_1.06px_2.51px_0px,_rgba(0,_0,_0,_0.02)_0px_4.66px_5.2px_0px,_rgba(0,_0,_0,_0.024)_0px_11.43px_10.37px_0px,_rgba(0,_0,_0,_0.03)_0px_22.01px_20.33px_0px,_rgba(0,_0,_0,_0.04)_0px_37.04px_37.38px_0px,_rgba(0,_0,_0,_0.05)_0px_57.15px_63.82px_0px] max-w-none ${scrolval >= .25 && scrolval < .5 ? 'visible' : 'invisible'}  text-transparent`}></img>

                            <Image src={'https://venga.com/_next/static/media/phone3.257030de.webp'} alt='Venga app sell' width="320" height="670" priority className={`border-none m-0 p-0 box-border absolute w-[320px] h-[670px] top-0 left-0 rounded-[55px] [box-shadow:rgba(0,_0,_0,_0.01)_0px_1.06px_2.51px_0px,_rgba(0,_0,_0,_0.02)_0px_4.66px_5.2px_0px,_rgba(0,_0,_0,_0.024)_0px_11.43px_10.37px_0px,_rgba(0,_0,_0,_0.03)_0px_22.01px_20.33px_0px,_rgba(0,_0,_0,_0.04)_0px_37.04px_37.38px_0px,_rgba(0,_0,_0,_0.05)_0px_57.15px_63.82px_0px] max-w-none  text-transparent ${scrolval >= .5 && scrolval < .75 ? 'visible' : 'invisible'}`} />
                            {/* <img alt="Venga app sell" loading="lazy" width="320" height="670" decoding="async" data-nimg="1" src="/_next/static/media/phone3.257030de.webp" className="border-none m-0 p-0 box-border absolute w-[320px] h-[670px] top-0 left-0 rounded-[55px] [box-shadow:rgba(0,_0,_0,_0.01)_0px_1.06px_2.51px_0px,_rgba(0,_0,_0,_0.02)_0px_4.66px_5.2px_0px,_rgba(0,_0,_0,_0.024)_0px_11.43px_10.37px_0px,_rgba(0,_0,_0,_0.03)_0px_22.01px_20.33px_0px,_rgba(0,_0,_0,_0.04)_0px_37.04px_37.38px_0px,_rgba(0,_0,_0,_0.05)_0px_57.15px_63.82px_0px] invisible text-transparent"></img> */}
                            <Image src={'https://venga.com/_next/static/media/phone4.72ef8f1c.webp'} alt='Venga app sell' width="320" height="670" priority className={`border-none m-0 p-0 box-border absolute w-[320px] h-[670px] top-0 left-0 rounded-[55px] [box-shadow:rgba(0,_0,_0,_0.01)_0px_1.06px_2.51px_0px,_rgba(0,_0,_0,_0.02)_0px_4.66px_5.2px_0px,_rgba(0,_0,_0,_0.024)_0px_11.43px_10.37px_0px,_rgba(0,_0,_0,_0.03)_0px_22.01px_20.33px_0px,_rgba(0,_0,_0,_0.04)_0px_37.04px_37.38px_0px,_rgba(0,_0,_0,_0.05)_0px_57.15px_63.82px_0px] max-w-none  text-transparent ${scrolval >= .75 ? 'visible' : 'invisible'}`} />

                            {/* <img alt="Venga app swap" loading="lazy" width="320" height="670" decoding="async" data-nimg="1" src="/_next/static/media/phone4.72ef8f1c.webp" className="border-none m-0 p-0 box-border absolute w-[320px] h-[670px] top-0 left-0 rounded-[55px] [box-shadow:rgba(0,_0,_0,_0.01)_0px_1.06px_2.51px_0px,_rgba(0,_0,_0,_0.02)_0px_4.66px_5.2px_0px,_rgba(0,_0,_0,_0.024)_0px_11.43px_10.37px_0px,_rgba(0,_0,_0,_0.03)_0px_22.01px_20.33px_0px,_rgba(0,_0,_0,_0.04)_0px_37.04px_37.38px_0px,_rgba(0,_0,_0,_0.05)_0px_57.15px_63.82px_0px] invisible text-transparent"></img> */}
                        </div>
                        <motion.img initial={{ y: '-2000px' }} animate={{ y: 0 }} transition={{ duration: 1, type: 'spring' }} alt="Solana coin" loading="lazy" width="144" height="144" decoding="async" data-nimg="1" src="/solana.e45e5ef7.webp" className="border-none m-0 p-0 box-border absolute top-[65px] left-[calc(50%+260px)] max-w-none z-0 w-[144px] h-[144px] text-transparent transform-none"></motion.img>
                    </div>
                    <div className="m-0 p-0 box-border flex gap-[24px] opacity-100">
                        <a href="https://www.producthunt.com/posts/venga-app?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-venga-app" target="_blank" rel="noreferrer" className="bg-transparent m-0 p-0 box-border">
                            <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=551934&theme=light" alt="Venga App - Discover blockchain innovations & access crypto services! | Product Hunt" className="border-none m-0 p-0 box-border h-[48px] w-auto"></img>
                        </a>
                        <a href="/en/download-app/" className="bg-transparent m-0 p-0 box-border no-underline relative z-10">
                            <button type="button" fdprocessedid="vlc5e" className="font-[LabilGrotesk,_sans-serif] text-[16px] leading-[20px] m-0 overflow-visible normal-case [appearance:button] pl-[16px] pr-[4px] py-[4px] box-border relative border-[none] bg-none cursor-pointer text-[rgb(17,_26,_41)] font-bold text-left min-h-[48px] rounded-[40px] [transition:0.2s] flex items-center gap-[8px] justify-between bg-[rgb(120,_166,_255)] min-w-[200px]">
                                <div className="m-0 p-0 box-border overflow-hidden w-auto [transition:0.2s]">
                                    <div className="m-0 p-0 box-border">Get the App</div>
                                </div>
                                <div className="m-0 p-0 box-border ml-[4px] rounded-[50%] w-[40px] h-[40px] min-w-[40px] bg-[rgb(255,_254,_248)] overflow-hidden flex rotate-0"></div>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
