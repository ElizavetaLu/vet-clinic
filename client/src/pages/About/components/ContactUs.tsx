import Image from "next/image";

export default function ContactUs() {
    return (
        <section>
            <div className="main-container flex">
                <Image width={250} height={300} src="/images/cyrus-chew-hjsNyctCkCQ-unsplash.jpg" alt="animal" />
                <div className="flex flex-col items-center bg-oxfordBlue text-white max-w-2xl mx-auto px-12 py-8">
                    <h3>Veterinarian in PipkaLand</h3>
                    <p className="text-justify mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laboriosam molestias ullam ad, dolorum quae voluptatem debitis aliquam dicta, suscipit obcaecati iure? Minima, obcaecati distinctio culpa ut ea quis cumque.</p>
                    <h3>Call us (123) 456-7890</h3>
                    <button className="btn bg-robinEggBlue text-white">Request Service</button>
                </div>
                <Image width={250} height={300} src="/images/mitchell-orr-_59aYi9cPUE-unsplash.jpg" alt="animal" />
            </div>
        </section>
    )
}