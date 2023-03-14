import { services } from "@/dummy-data";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";


const text = {
    row1: "we treat your pet like family",
    row2: "Schedule an appointment today!",
    row3: "Please feel free to call us for more information"
}


export default function Services() {
    return (
        <>
            <Header headerBg="close-up-veterinarian-taking-care-dog.jpg" text={text} />
            <section>
                <div className="main-container flex flex-col items-center space-y-6  md:space-y-10">
                    <h3>our services</h3>
                    <p className="text-center text-lg text-gray-500">When you choose Pipka Animal Medical Hospital, you won’t have to
                        worry about traveling from place to place to get the care your companion needs. We offer comprehensive
                        care and provide a wide range of veterinary services in one convenient location. Our services include:
                    </p>
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-12">
                        {services.map(item => {
                            return (
                                <div className="group item" key={item}>
                                    <Link href={`/Services/${item}`} className="w-32 h-40">
                                        <Image
                                            width={100} height={120} className="hidden w-full duration-200 md:block group-hover:scale-110"
                                            src="/images/desktop/sausage-dog-weiner-dog-stand-watch-doctor-helping-hurt-cut-leg-let-medical-officer-wrap-white-tape-veterinary-clinic-blue-background-studio-shot-photo-image.jpg"
                                            alt="" />
                                        <Image width={100} height={120} className="w-full md:hidden"
                                            src="/images/mobile/sausage-dog-weiner-dog-stand-watch-doctor-helping-hurt-cut-leg-let-medical-officer-wrap-white-tape-veterinary-clinic-blue-background-studio-shot-photo-image.jpg"
                                            alt="" />
                                        <div className="item-gradient"> </div>
                                        <h5>{item}</h5>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}