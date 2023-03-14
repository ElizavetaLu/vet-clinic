import { workers } from "@/dummy-data"
import Image from "next/image"

export default function SpecialistsSection() {
    return (
        <section>
            <div className="main-container">
                <h3>our specialists</h3>
                <div className="flex space-x-6 py-8 overflow-hidden overflow-x-scroll">
                    {workers.map(item => {
                        return (
                            <div className="flex flex-col items-center h-96 lg:h-104" key={item.name}>
                                <div className="w-52 h-80 overflow-hidden mb-3 lg:w-60 lg:h-96">
                                    <Image width={100} height={120} className="w-full rounded-t-3xl" src={`/images/workers/${item.photo}`} alt="" />
                                </div>
                                <div className="flex flex-col items-center justify-between h-full space-y-3">
                                    <p className="font-bold text-xl">{item.name}</p>
                                    <p
                                        className="w-52 text-center max-h-32 tracking-tight text-gray-500 text-sm leading-5 lg:text-base">
                                        {item.spec}</p>
                                    <button className="btn bg-oxfordBlue text-white hover:bg-indigoDye"> make an appointment</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}