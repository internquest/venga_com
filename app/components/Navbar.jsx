import React from 'react'

const Navbar = () => {
    return (
        <header className='flex-none fixed z-[100] top-[30px] left-[50%] translate-x-[-50%] w-[calc(100%-40px)] '>
            <div className="mx-[auto] my-0 pl-[30px] pr-[14px] py-[14px] box-border max-w-[1400px] w-full flex justify-between items-center [box-shadow:rgba(0,_0,_0,_0.02)_0px_4px_5px_0px,_rgba(0,_0,_0,_0.04)_0px_20px_13px_0px,_rgba(0,_0,_0,_0.05)_0px_6px_35px_0px] bg-[rgb(255,_254,_248)] rounded-[30px] min-h-[60px]">
                <a title="Home" tabIndex="0" href="/en/" className="bg-transparent m-0 p-0 box-border flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 112 24" role="img" aria-label="Home" className="m-0 p-0 box-border w-[112px] h-[23px]">
                        <path fill="#FF6000" d="m31.09 15.962.282-1.468a.29.29 0 0 1 .286-.235h8.437a.7.7 0 0 0 .687-.567l.629-3.306a.697.697 0 0 0-.687-.826h-8.09a.29.29 0 0 1-.286-.342l.235-1.288a.29.29 0 0 1 .287-.238h8.88c.336 0 .625-.24.686-.57l.899-4.841a.697.697 0 0 0-.687-.823h-16.83a.7.7 0 0 0-.687.568l-3.684 19.692c-.08.428.25.824.687.824H39.04c.337 0 .625-.24.687-.57l.898-4.842a.697.697 0 0 0-.687-.823h-8.564a.29.29 0 0 1-.286-.345M59.95 2.027l-1.808 9.745c-.057.306-.492.32-.568.017l-2.462-9.804a.7.7 0 0 0-.678-.527H45.2a.7.7 0 0 0-.686.568l-3.684 19.692c-.08.428.25.824.686.824h5.863c.337 0 .625-.24.687-.569l1.838-9.838c.056-.305.489-.32.567-.02l2.586 9.906c.08.307.358.521.676.521h9.055c.337 0 .626-.24.687-.57l3.66-19.691a.697.697 0 0 0-.687-.823h-5.81a.7.7 0 0 0-.688.57M90.164 9.831H78.776a.7.7 0 0 0-.679.535l-.788 3.283a.813.813 0 0 0 .793 1.002h4.227c.247 0 .382.286.225.476-.732.883-1.967 1.391-3.723 1.391-2.262 0-3.603-1.597-3.603-3.584 0-3.434 2.84-5.15 7.1-5.15 2.358 0 4.39.46 5.998 1.102a.698.698 0 0 0 .946-.52l.902-4.887a.696.696 0 0 0-.381-.753C87.33 1.53 84.52.735 81.039.735c-8.283 0-14.647 3.976-14.647 12.259 0 5.452 4.05 10.271 11.334 10.271 7.021 0 11.36-3.192 12.675-10.21l.45-2.399a.697.697 0 0 0-.687-.825M12.332 1.932l-1.868 5.526a.29.29 0 0 0 .276.383h1.827c.21 0 .35.214.267.406L9.82 15.18c-.121.28-.537.208-.557-.096L8.388 2.107a.7.7 0 0 0-.697-.65H.698a.697.697 0 0 0-.695.764L1.92 21.913c.035.357.335.63.695.63h11.387c.27 0 .517-.157.632-.402L23.892 2.45a.697.697 0 0 0-.633-.992H12.994c-.3 0-.566.19-.662.474M109.386 1.458H97.999a.7.7 0 0 0-.632.4L88.109 21.55a.697.697 0 0 0 .632.992h10.265c.3 0 .566-.19.662-.474l1.687-4.99a.697.697 0 0 0-.662-.92h-1.26a.29.29 0 0 1-.267-.405l3.014-6.933c.122-.28.537-.208.557.096l.875 12.976c.025.366.33.65.697.65h6.993a.697.697 0 0 0 .695-.764l-1.916-19.691a.697.697 0 0 0-.695-.63" className="m-0 p-0 box-border"></path>
                    </svg>
                </a>
                <nav className="m-0 p-0 box-border">
                    <ul className="m-0 p-0 box-border [list-style:none] flex items-center gap-[24px]">
                        <li tabIndex="0" className="m-0 p-0 box-border">
                            <a href="/en/about/" className="bg-transparent m-0 p-0 box-border no-underline flex font-[LabilGrotesk,_sans-serif] hover:text-[#ff6000] font-bold text-[16px] leading-[100%] uppercase text-[rgb(17,_26,_41)]">About</a>
                        </li>
                        <li tabIndex="0" className="m-0 p-0 box-border">
                            <a href="/en/crypto-staking/" className="bg-transparent m-0 p-0 box-border no-underline flex font-[LabilGrotesk,_sans-serif] hover:text-[#ff6000] font-bold text-[16px] leading-[100%] uppercase text-[rgb(17,_26,_41)]">Earn</a>
                        </li>
                        <li tabIndex="0" className="m-0 p-0 box-border">
                            <a href="/en/blog/" className="bg-transparent m-0 p-0 box-border no-underline flex font-[LabilGrotesk,_sans-serif] hover:text-[#ff6000] font-bold text-[16px] leading-[100%] uppercase text-[rgb(17,_26,_41)]">Blog</a>
                        </li>
                        <li tabIndex="0" className="m-0 p-0 box-border">
                            <a href="/en/download-app/" className="bg-transparent m-0 p-0 box-border no-underline flex font-[LabilGrotesk,_sans-serif]  font-bold text-[16px] leading-[100%] uppercase text-[rgb(17,_26,_41)]">
                                <button type="button" fdprocessedid="tl731x" className="font-[LabilGrotesk,_sans-serif] text-[16px] leading-[16px] m-0 overflow-visible uppercase [appearance:button] px-[16px] py-[4px] box-border relative border-[none] bg-none cursor-pointer hover:bg-[#ff6000] text-[rgb(255,_254,_248)] text-center [transition:0.2s] font-bold min-h-[30px] rounded-[16px] bg-[rgb(17,_26,_41)]">Download</button>
                            </a>
                        </li>
                    </ul>
                </nav>
                <button aria-label="Menu" type="button" className="[font-family:inherit] text-[100%] leading-[1.15] m-0 overflow-visible normal-case [appearance:button] p-0 box-border justify-center items-center cursor-pointer border-[none] hidden bg-none flex-col w-[32px] h-[32px]">
                    <div className="m-0 p-0 box-border w-[26px] h-[3px] rounded-[3px] bg-[rgb(17,_26,_41)] mb-[6px] transform-none"></div>
                    <div className="m-0 p-0 box-border w-[26px] h-[3px] rounded-[3px] bg-[rgb(17,_26,_41)] mb-[6px] opacity-100"></div>
                    <div className="m-0 p-0 box-border w-[26px] h-[3px] rounded-[3px] bg-[rgb(17,_26,_41)] mb-0 transform-none"></div>
                </button>
            </div>
        </header>
    )
}

export default Navbar
