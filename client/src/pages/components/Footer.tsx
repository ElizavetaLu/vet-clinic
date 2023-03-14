import { quickLinks, workingHours } from "@/dummy-data";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <footer className="footer bg-gray-50 mt-14 lg:mt-32">
            <div className="main-container">
                <div
                    className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:justify-between md:space-x-2 md:items-start">
                    <Link href='/'>
                        <Image width={100} height={100} className="mb-4 w-32 self-center md:self-start" src="/images/icons/logo.png" alt="logo" />
                    </Link>
                    <div className="flex flex-col items-center md:items-start">
                        <h4>Contact Information</h4>
                        <div className=" space-y-1">

                            <p><span className="mr-2 font-bold text-gray-700 md:text-base md:mr-1">Email:</span>
                                emailadress@pipka.com</p>
                            <p><span className="mr-2 font-bold text-gray-700 md:text-base md:mr-1">Visit Us:</span>123 Pipka
                                Blvd Adress, PK 11223
                            </p>
                            <div className="flex">
                                <span className="mr-2 font-bold text-gray-700 text-lg md:text-base md:mr-1">Phone
                                    numbers:</span>
                                <div>
                                    <p className="text-base md:text-sm">(123) 456-7890</p>
                                    <p className="text-base md:text-sm">(098) 765-4321</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center md:items-start">
                        <h4>Hours of Operation</h4>
                        <div>
                            {workingHours.map(item => {
                                return (
                                    <p className="text-base md:text-sm" key={item.week}><span
                                        className="mr-2 font-bold text-gray-700 text-lg md:text-base md:mr-1">{item.week}:</span>{item.time}
                                    </p>
                                )
                            })}

                        </div>
                        <Link className="mt-1 block text-center underline text-gray-500 hover:text-gray-700" href="#">Check out our
                            holiday hours here.</Link>
                    </div>

                    <div className="flex flex-col items-center md:items-start">
                        <h4>Quick Links</h4>

                        <div className="flex flex-col">
                            {quickLinks.map(item => <Link key={item} className="mr-2 font-bold text-gray-700 text-lg md:text-base" href="#">{item}</Link>)}
                        </div>

                    </div>

                </div>

                <div className="flex flex-col items-center mt-10 space-y-3 md:flex-row md:justify-between">
                    <p className="font-light text-sm text-gray-500">© 2023 Pipka Medical Hospital.</p>
                    <div className="flex items-center space-x-3">
                        <Image width={24} height={24} className="w-6 cursor-pointer ficon" src="/images/icons/facebook.svg" alt="icon" />
                        <Image width={24} height={24} className="w-6 cursor-pointer ficon" src="/images/icons/telegram.svg" alt="icon" />
                        <Image width={24} height={24} className="w-6 cursor-pointer ficon" src="/images/icons/instagram.svg" alt="icon" />
                    </div>
                </div>
            </div>
        </footer>
    )
}