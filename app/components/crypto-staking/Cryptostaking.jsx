import React from 'react'

const Cryptostaking = () => {
  return (
    <section id="Staking" class=" t13:flex-col t13:items-center t13:py-16 t13:px-11 flex gap-20 [scroll-margin-top:50px]">
    <div class="">
        <div class="flex gap-3">
            <div class="">
                <svg
                    xmlns="http://www.w3.org/2000/svg" width="47" height="47" fill="none" class="">
                    <path stroke="#111A29" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M31.196 25.417c-5.293 0-9.583-2.146-9.583-4.792s4.29-4.792 9.583-4.792 9.583 2.146 9.583 4.792-4.29 4.792-9.583 4.792M21.613 28.292c0 2.646 4.29 4.791 9.583 4.791s9.583-2.145 9.583-4.791M6.279 18.708c0 2.647 4.29 4.792 9.583 4.792 2.158 0 4.15-.357 5.751-.958M6.28 25.417c0 2.646 4.29 4.791 9.583 4.791 2.158 0 4.149-.356 5.75-.958" class=""></path>
                    <path stroke="#111A29" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6.28 11.042v21.083c0 2.646 4.29 4.792 9.583 4.792 2.158 0 4.149-.357 5.75-.959M25.445 16.792v-5.75M21.613 20.625v15.333c0 2.647 4.29 4.792 9.583 4.792s9.583-2.145 9.583-4.792V20.625" class=""></path>
                    <path stroke="#111A29" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15.862 15.833c-5.293 0-9.583-2.145-9.583-4.791s4.29-4.792 9.583-4.792 9.583 2.145 9.583 4.792-4.29 4.791-9.583 4.791" class=""></path>
                </svg>
            </div>
            <h2 class="font-extrabold text-[64px] leading-[85%] tracking-[-0.02em] text-[rgb(17,26,41)] uppercase max-w-[633px] mb-10">What is crypto staking?</h2>
        </div>
        <div class="flex flex-col gap-10">
            <p class="para">Crypto staking lets you put your tokens to work by locking them into a blockchain network. In return, you earn rewards directly in crypto.</p>
            <p class="para">By staking your assets, you also contribute to the blockchain security and efficiency while gaining governance power over the related project.</p>
            <p class="para"> Staking is a smart way to maximize your crypto’s potential while supporting the blockchain.</p>
        </div>
    </div>
    <div class="relative flex flex-col justify-center gap-[49px] max-w-[524px] w-full  ">
        <div class="relative flex flex-col gap-[12.22px] p-[18.33px] bg-[#f7f6ed] rounded-[22.44px] w-full">
            <img alt="coin" loading="lazy" width="255" height="255" decoding="async" data-nimg="1" src="https://venga.com/_next/static/media/coin.156252a7.webp" class="border-none absolute right-[21.47px] top-[-70px]  text-transparent"></img>
            <p class="text-[27.5px] leading-[37.45px] font-semibold text-[rgb(17,26,41)]">6.24 ETH</p>
            <p class="text-[21.39px] leading-[27.8px] font-medium text-[#a4a4a4]">€14,847.50</p>
        </div>
        <div class="m-0 p-[3px] box-border rounded-[16px] bg-no-repeat bg-[-30px_-248px] bg-[url('https://venga.com/_next/static/media/mint2.530242b1.svg')] [background-size:718px] bg-[rgb(120,_166,_255)]  [transform:translateY(50px)_translateZ(0px)]">
            <div class="m-0 px-[18.33px] py-[27.5px] box-border bg-[rgb(255,_254,_248)] rounded-[12px] h-full">
                <div class="flex">
                    <div class="[border-right:1.53px_solid_rgb(236,235,228)] mr-[18.33px] w-full">
                        <p class="text-[15.28px] leading-[19.86px] tracking-[.05em] font-semibold text-[rgb(17,26,41)]">Earned Rewards</p>
                        <p class="text-[24.44px] leading-[29.33px]  font-semibold text-[rgb(17,26,41)]">
                            <span class="">0.0000</span>
                            <span class="">ETH</span>
                        </p>
                        <p class="text-[21.39px] leading-[27.8px] tracking-[.05em] font-semibold text-[#a4a4a4]">
                            <span class="">≈ €0.00</span>
                        </p>
                    </div>
                    <div class="w-full">
                        <p class="text-[15.28px] leading-[19.86px] tracking-[.05em] font-semibold text-[rgb(17,26,41)]">30 Days Rewards</p>
                        <p class="text-[24.44px] leading-[29.33px]  font-semibold text-[rgb(17,26,41)]">
                            <span class="">≈ 0.0156</span>
                            <span class="">ETH</span>
                        </p>
                        <p class="text-[21.39px] leading-[27.8px] tracking-[.05em] font-semibold text-[#a4a4a4]">≈ €37.11</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Cryptostaking
