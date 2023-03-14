import { menuNav } from "@/dummy-data"
import Image from "next/image"
import Link from "next/link"

export default function Header({ headerBg, text }: { headerBg: string, text: { row1: string, row2: string, row3: string } }) {
    return (
        <header className="relative header mb-36" style={{ backgroundImage: `url('/images/desktop/${headerBg}')` }}>
            <div className="main-container">
                {/* Logo/Menu container */}
                <nav className="flex justify-between items-center font-bold text-white">
                    {/* Logo  */}
                    <Link href='/'>
                        <Image width={128} height={47.5} src="/images/icons/logo.png" alt="logo" />
                    </Link>
                    {/* Menu  */}
                    <div className="hidden h-10 font-alata md:flex md:space-x-8">

                        {menuNav.map(item => {
                            return (
                                <div className="group" key={item}>
                                    <Link href={item === 'Home' ? '/' : '/' + item}>{item}</Link>
                                    <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                                </div>
                            )
                        })}
                    </div>

                    {/* Hamburger Button */}
                    <div className="md:hidden">
                        <button id="menu-btn" type="button" className="z-40 block hamburger focus:outline-none">
                            <span className="hamburger-top"></span>
                            <span className="hamburger-middle"></span>
                            <span className="hamburger-bottom"></span>
                        </button>
                    </div>
                </nav>

                {/* {/* Mobile Menu */}
                <div id="menu"
                    className="absolute top-0 bottom-36 left-0 hidden flex-col self-end w-full py-1 pt-28 pl-12 space-y-3 text-lg text-white uppercase bg-oxfordBlue duration-200 md:hidden">

                    {menuNav.map(item => <Link key={item} href="#" className="hover:text-robinEggBlue">{item}</Link>)}

                </div>


                <div className="max-w-lg my-32 p-4 font-sans text-3xl text-white  border-2 md:p-10 md:text-5xl md:max-w-3xl">
                    <p className="mb-2 uppercase">{text.row1}</p>
                    <p className="uppercase">{text.row2}</p>
                    <p className="uppercase">{text?.row3}</p>
                    <a className="inline-block btn mt-6 bg-oxfordBlue text-white hover:bg-indigoDye" href="#services">Select
                        Service</a>
                </div>
            </div>


            {/* Contact block */}
            <div
                className="absolute inset-x-1/5 -bottom-28 flex flex-col items-center py-7 px-10 bg-white shadow-lg md:-bottom-20 md:inset-x-1/4">
                <h2 className="capitalize mb-5 text-2xl text-center font-bold lg:text-4xl">your pets, our passion!</h2>
                <div className="flex flex-col space-y-4 items-center md:flex-row md:space-y-0 md:space-x-6">
                    <div className="">
                        <div className="flex items-center space-x-2">
                            <Image width={100} height={120} className="w-4" src="/images/icons/phone-call.png" alt="phone icon" />
                            <p className="whitespace-nowrap">(123) 456-7890</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Image width={100} height={120} className="w-4" src="/images/icons/phone-call.png" alt="phone icon" />
                            <p className="whitespace-nowrap">(098) 765-4321</p>
                        </div>
                    </div>
                    <button className="btn bg-robinEggBlue text-white hover:bg-robinLightEggBlue">Request
                        Service</button>
                </div>
            </div>
        </header>
    )
}