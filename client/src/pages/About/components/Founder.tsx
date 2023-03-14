import Image from "next/image";

export default function Founder() {
    return (
        <section>
            <div className="main-container">
                <h3>Сlinic founder</h3>
                <div className=" flex flex-col items-center">
                    <Image width={100} height={100} className="mb-3 md:hidden" src="/images/workers/700x525_old-trail_GaryLukacs2.jpg" alt="" />
                    <h2 className="text-4xl font-bold text-center md:hidden">Elsdon Coles Oliver </h2>

                    <div className="space-y-3">
                        <Image width={100} height={100} className="hidden w-64 md:block md:float-left" src="/images/workers/700x525_old-trail_GaryLukacs2.jpg" alt="" />
                        <h2 className="hidden text-5xl md:block">Elsdon Coles Oliver </h2>

                        <p className="text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae earum odio eum
                            accusamus nobis asperiores, corporis voluptas minus amet, eveniet adipisci modi voluptatibus magnam
                            quibusdam voluptatem tempore quos beatae id.</p>
                        <p className="text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae earum odio eum
                            accusamus nobis asperiores, corporis voluptas minus amet, eveniet adipisci modi voluptatibus magnam
                            quibusdam voluptatem tempore quos beatae id. Corporis voluptas minus amet, eveniet adipisci modi voluptatibus magnam
                            quibusdam voluptatem tempore quos beatae id. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde fugit explicabo asperiores, quod veritatis praesentium sit quo accusantium sed incidunt odio quaerat quis sequi doloribus voluptates, repellendus ullam, necessitatibus dolorum.</p>
                        <p className="text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae earum odio eum
                            accusamus nobis asperiores, corporis voluptas minus amet, eveniet adipisci modi voluptatibus magnam
                            quibusdam voluptatem tempore quos beatae id.Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Recusandae earum odio eum accusamus nobis asperiores, corporis voluptas minus amet, eveniet
                            adipisci modi voluptatibus magnam quibusdam voluptatem tempore quos beatae id.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}