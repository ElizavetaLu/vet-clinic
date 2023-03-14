export default function DiscountSection() {
    return (
        <section className="offer h-80 md:h-96 mt-24">
            <div className="main-container h-full">
                <div className="h-full flex flex-col space-y-6 items-center md:space-y-0 md:flex-row md:justify-between">
                    <div className="flex flex-col items-center text-white font-bold">
                        <p className="text-2xl md:text-5xl">10% off</p>
                        <p className="text-xl md:text-3xl">a dental cleaning </p>
                        <p className="text-xl md:text-3xl">is something to</p>
                        <p className="text-5xl md:text-8xl">smile</p>
                        <p className="text-xl md:text-3xl">about</p>
                    </div>
                    <button className="btn bg-robinEggBlue text-white hover:bg-robinLightEggBlue">Call
                        to book!</button>
                </div>
            </div>
        </section>
    )
}