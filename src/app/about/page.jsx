import Image from "next/image";
{/*Image is AI generated from https://perchance.org/ai-human-generator */}

export default function About() {
    return (
        <div className="relative px-6 lg:px-8 bg-gray-100">
            <div className="mx-auto max-w-3xl pt-10 pb-32 sm:pb-40">
                <div>
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight text-center sm:text-6xl ">
                            About Us
                        </h1>
                        <h1 className="text-l font-bold tracking-tight text-center sm:text-xl ">
                            Welcome to House Index – Your Home Starts Here
                        </h1>
                        <p>
                        At <strong>House Index</strong>, we help you find more than just a house — we help you find home. Based in <strong>Seattle</strong>, we’re a local real estate company with deep roots in the community and a modern approach to buying and selling.
                        </p>

                        <div className="mt-8 flex md:flex-row flex-col gap-x-4 justify-center items-center">
                            <Image src="/REAPIC.jpg" alt="House Index" className="flex rounded-lg shadow-lg" width={250} height={150} />
                            <div>
                                <h2 className="mt-6 text-lg leading-8 sm:text-center">Why Choose Us?</h2>
                                <ul className="mt-6 text-lg leading-8 sm:text-center">
                                <li><strong>Local Knowledge:</strong> We know Seattle — its neighborhoods, markets, and hidden gems.</li>
                                <li><strong>Personalized Service:</strong> Your goals guide everything we do. We’re here to listen, guide, and deliver.</li>
                                <li><strong>Smart Tech, Smooth Process:</strong> From virtual tours to data-driven insights, we make real estate easier and smarter.</li>
                                <li><strong>Trusted Experts:</strong> Our experienced team is committed to clear communication and great results.</li>
                                </ul>

                                <h2 className="mt-6 text-lg leading-8 sm:text-center">Our Mission</h2>
                                <p className="mt-6 text-lg leading-8 sm:text-center">
                                    To make real estate simple, transparent, and tailored to you.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}